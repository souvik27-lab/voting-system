// backend/server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import {
  PutCommand,
  GetCommand,
  UpdateCommand,
  ScanCommand,
  DeleteCommand,   // ⬅️ required for deleting polls
} from "@aws-sdk/lib-dynamodb";

import { docClient } from "./db.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const TABLE = process.env.DYNAMO_TABLE;

// HEALTH CHECK
app.get("/", (req, res) => {
  res.json({ status: "ok", msg: "VoteCast backend running" });
});

// CREATE POLL
app.post("/polls", async (req, res) => {
  try {
    const { question, options } = req.body;

    if (!question || !options || options.length < 2) {
      return res.status(400).json({ msg: "Invalid poll data" });
    }

    const pollId = "poll_" + Date.now();

    const optionsMap = {};
    options.forEach((label, i) => {
      optionsMap[`opt${i + 1}`] = { label, votes: 0 };
    });

    const item = {
      pollId,
      question,
      options: optionsMap,
      createdAt: new Date().toISOString(),
      status: "open",
    };

    await docClient.send(
      new PutCommand({
        TableName: TABLE,
        Item: item,
      })
    );

    res.json({ msg: "Poll created", pollId, poll: item });
  } catch (err) {
    console.error("Create poll error:", err);
    res.status(500).json({ msg: "Server error", error: String(err) });
  }
});

// GET ALL POLLS
app.get("/polls", async (req, res) => {
  try {
    const result = await docClient.send(
      new ScanCommand({
        TableName: TABLE,
      })
    );

    res.json(result.Items || []);
  } catch (err) {
    console.error("Fetch polls error:", err);
    res.status(500).json({ msg: "Error fetching polls", error: String(err) });
  }
});

// GET SINGLE POLL
app.get("/polls/:pollId", async (req, res) => {
  try {
    const { pollId } = req.params;

    const result = await docClient.send(
      new GetCommand({
        TableName: TABLE,
        Key: { pollId },
      })
    );

    if (!result.Item) {
      return res.status(404).json({ msg: "Poll not found" });
    }

    res.json(result.Item);
  } catch (err) {
    console.error("Get poll error:", err);
    res.status(500).json({ msg: "Error fetching poll", error: String(err) });
  }
});

// VOTE ON POLL
app.post("/polls/:pollId/vote", async (req, res) => {
  try {
    const { pollId } = req.params;
    const { optionId } = req.body;

    if (!optionId) {
      return res.status(400).json({ msg: "optionId is required" });
    }

    const result = await docClient.send(
      new UpdateCommand({
        TableName: TABLE,
        Key: { pollId },
        UpdateExpression:
          "SET #opts.#oid.#votes = #opts.#oid.#votes + :inc",
        ConditionExpression:
          "attribute_exists(pollId) AND attribute_exists(#opts.#oid)",
        ExpressionAttributeNames: {
          "#opts": "options",
          "#oid": optionId,
          "#votes": "votes",
        },
        ExpressionAttributeValues: { ":inc": 1 },
        ReturnValues: "ALL_NEW",
      })
    );

    res.json({ msg: "Vote counted", poll: result.Attributes });
  } catch (err) {
    console.error("Vote error:", err);

    if (err.name === "ConditionalCheckFailedException") {
      return res.status(400).json({ msg: "Poll or option not valid" });
    }

    res.status(500).json({ msg: "Server error", error: String(err) });
  }
});

// DELETE POLL  ✅ NEW ROUTE
app.delete("/polls/:pollId", async (req, res) => {
  try {
    const { pollId } = req.params;

    await docClient.send(
      new DeleteCommand({
        TableName: TABLE,
        Key: { pollId },
      })
    );

    res.json({ msg: "Poll deleted successfully" });
  } catch (err) {
    console.error("Delete poll error:", err);
    res.status(500).json({ msg: "Failed to delete poll", error: String(err) });
  }
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

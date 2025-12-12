const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  options: PollOption[];
  totalVotes: number;
  createdAt: string;
}

export interface CreatePollData {
  title: string;
  description: string;
  options: string[];
}

export interface VoteData {
  optionId: string;
}

// Convert backend DynamoDB item → frontend Poll
function transformPoll(poll: any): Poll {
  const optionsArray: PollOption[] = Object.entries(poll.options || {}).map(
    ([optionId, optionData]: any) => ({
      id: optionId,
      text: optionData.label,
      votes: optionData.votes ?? 0,
    })
  );

  const totalVotes = optionsArray.reduce((sum, opt) => sum + opt.votes, 0);

  return {
    id: poll.pollId,
    title: poll.question,
    description: poll.description || "",
    options: optionsArray,
    totalVotes,
    createdAt: poll.createdAt || "",
  };
}

export const api = {
  async getPolls(): Promise<Poll[]> {
    const response = await fetch(`${API_BASE_URL}/polls`);
    if (!response.ok) {
      throw new Error("Failed to fetch polls");
    }
    const data = await response.json();
    return data.map(transformPoll);
  },

  async getPollById(id: string): Promise<Poll> {
    const response = await fetch(`${API_BASE_URL}/polls/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch poll");
    }
    const data = await response.json();
    return transformPoll(data);
  },

  async createPoll(data: CreatePollData): Promise<Poll> {
    const body = {
      question: data.title,
      options: data.options, // array of strings
    };

    const response = await fetch(`${API_BASE_URL}/polls`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to create poll");
    }

    const resJson = await response.json(); // { msg, pollId, poll }
    return transformPoll(resJson.poll);
  },

  async votePoll(id: string, optionId: string): Promise<Poll> {
    const response = await fetch(`${API_BASE_URL}/polls/${id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionId }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit vote");
    }

    const resJson = await response.json(); // { msg, poll }
    return transformPoll(resJson.poll);
  },

  // 🔥 NEW: delete poll
  async deletePoll(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/polls/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete poll");
    }

    // no body needed; backend sends { msg }
  },
};

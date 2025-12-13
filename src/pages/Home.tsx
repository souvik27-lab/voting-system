import { Link } from "react-router-dom";
import { useGetPolls } from "../api/hooks";
import { PollCard } from "../components/PollCard";
import { Loader } from "../components/Loader";
import { Vote, TrendingUp } from "lucide-react";

export const Home = () => {
  const { data: polls, isLoading, error } = useGetPolls();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-red-400">
        Failed to load polls
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">

      <Vote className="w-14 h-14 text-[#3B82F6]" />

      <h1 className="text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
        Available Polls
      </h1>

      <p className="text-[#9DB4D1] mt-2">
        Browse and participate in polls.
      </p>

      {!polls || polls.length === 0 ? (
        <div className="mt-16 w-[520px] bg-white/10 backdrop-blur-2xl rounded-2xl p-12 text-center animate-soft-float">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h3 className="text-2xl font-semibold">No polls yet</h3>
          <p className="text-gray-300 mb-8">Be the first to create a poll!</p>

          <Link
            to="/create"
            className="px-10 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#A855F7]"
          >
            Create Your First Poll
          </Link>
        </div>
      ) : (
        <div className="mt-10">
          {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      )}
    </div>
  );
};

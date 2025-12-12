import { useParams, useNavigate } from "react-router-dom";
import { useGetPoll } from "../api/hooks";
import { Loader } from "../components/Loader";
import { TrendingUp, Users, ArrowLeft } from "lucide-react";

export const Results = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: poll, isLoading, error } = useGetPoll(id!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-24 text-white">
        <Loader />
      </div>
    );
  }

  if (error || !poll) {
    return (
      <div className="text-center py-20 text-white">
        <p className="text-red-400 text-lg font-semibold">Failed to load results</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const sortedOptions = [...poll.options].sort((a, b) => b.votes - a.votes);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-white">

      {/* GLASS WRAPPER */}
      <div className="
        bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.5)]
        overflow-hidden
      ">

        {/* HEADER */}
        <div className="
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          px-10 py-8 text-white
        ">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-10 h-10 text-white drop-shadow" />
            <h1 className="text-4xl font-extrabold drop-shadow">
              Results
            </h1>
          </div>

          <h2 className="text-2xl font-semibold text-white drop-shadow">
            {poll.title}
          </h2>
          <p className="text-blue-100 text-sm">{poll.description}</p>

          <div className="flex items-center gap-2 mt-4">
            <Users className="w-5 h-5 text-white/80" />
            <span className="text-blue-100 font-medium">
              Total Votes: {poll.totalVotes}
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="p-10">

          {poll.totalVotes === 0 ? (
            <div className="text-center py-14">
              <p className="text-gray-300 text-lg">No votes yet. Be the first to vote!</p>
              <button
                onClick={() => navigate(`/poll/${id}`)}
                className="
                  mt-5 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
                  text-white shadow-lg hover:opacity-90 transition
                "
              >
                Cast Your Vote
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {sortedOptions.map((option, index) => {
                const percentage =
                  poll.totalVotes > 0
                    ? ((option.votes / poll.totalVotes) * 100).toFixed(1)
                    : "0.0";

                return (
                  <div key={option.id} className="space-y-3">
                    {/* TEXT ROW */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">

                        {index === 0 && option.votes > 0 && (
                          <span
                            className="
                              px-3 py-1 rounded-full 
                              bg-gradient-to-r from-yellow-400 to-orange-500
                              text-black font-bold text-xs shadow
                            "
                          >
                            LEADING
                          </span>
                        )}

                        <span className="text-xl font-semibold text-white">
                          {option.text}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
                          {percentage}%
                        </span>
                        <span className="text-gray-400 ml-2">
                          ({option.votes} {option.votes === 1 ? "vote" : "votes"})
                        </span>
                      </div>
                    </div>

                    {/* BAR */}
                    <div className="relative h-10 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      <div
  className={`
    absolute top-0 left-0 h-full 
    bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
    shadow-[0_0_20px_rgba(99,102,241,0.6)]
    transition-all duration-1000 ease-out 
    flex items-center justify-end pr-4
    w-[${percentage}%]
  `}
>
  {parseFloat(percentage) > 12 && (
    <span className="text-white font-semibold drop-shadow">
      {percentage}%
    </span>
  )}
</div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* FOOTER BUTTONS */}
          <div className="mt-12 pt-6 border-t border-white/10 flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="
                flex items-center gap-2 px-6 py-3 rounded-xl
                bg-white/10 border border-white/20
                text-white hover:bg-white/20 transition font-semibold
              "
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Polls
            </button>

            <button
              onClick={() => navigate(`/poll/${id}`)}
              className="
                px-6 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
                text-white shadow-lg hover:opacity-90 transition
              "
            >
              Vote Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


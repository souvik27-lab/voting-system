import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPoll, useVotePoll, useDeletePoll } from "../api/hooks";
import { Loader } from "../components/Loader";
import { CheckCircle, BarChart3, Trash2 } from "lucide-react";

export const Poll = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: poll, isLoading, error } = useGetPoll(id!);
  const voteMutation = useVotePoll(id!);
  const deleteMutation = useDeletePoll(id!);

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = async (optionId: string) => {
    if (hasVoted || voteMutation.isPending) return;

    try {
      await voteMutation.mutateAsync(optionId);
      setHasVoted(true);
      setSelectedOptionId(optionId);

      setTimeout(() => {
        navigate(`/poll/${id}/results`);
      }, 1500);
    } catch (error) {
      console.error("Failed to vote:", error);
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this poll?"
    );
    if (!confirmDelete) return;

    try {
      await deleteMutation.mutateAsync();
      navigate("/");
    } catch (error) {
      console.error("Failed to delete poll:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader />
      </div>
    );
  }

  if (error || !poll) {
    return (
      <div className="text-center py-20 text-white">
        <p className="text-red-400">Failed to load poll.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white">

      {/* POLL CONTAINER */}
      <div className="
        bg-white/10 backdrop-blur-2xl 
        border border-white/10 shadow-2xl 
        rounded-2xl overflow-hidden
      ">

        {/* HEADER */}
        <div className="
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          px-10 py-7 flex items-center justify-between
        ">
          <div>
            <h1 className="text-3xl font-extrabold drop-shadow">
              {poll.title}
            </h1>
            <p className="text-blue-100 text-sm">{poll.description}</p>
          </div>

          {/* DELETE BUTTON */}
          <button
            type="button"
            onClick={handleDelete}
            aria-label="Delete Poll"
            disabled={deleteMutation.isPending}
            className="
              p-3 rounded-lg 
              bg-white/20 backdrop-blur-md
              text-red-200 border border-red-300/20
              hover:bg-red-500/20 hover:text-red-100
              transition disabled:opacity-40
            "
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-10">

          {/* SUCCESS MESSAGE */}
          {hasVoted ? (
            <div className="
              bg-green-500/10 border border-green-400/30 
              p-6 rounded-xl text-center
            ">
              <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-green-300">
                Vote Recorded!
              </h3>
              <p className="text-green-200 text-sm">
                Redirecting to results...
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-6 text-white">
                Choose your option:
              </h2>

              {/* OPTIONS LIST */}
              <div className="space-y-5 mt-6">

                {poll.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleVote(option.id)}
                    disabled={voteMutation.isPending || hasVoted}
                    className="
                      w-full py-4 px-6 rounded-xl
                      bg-white/5 backdrop-blur-xl
                      border border-white/10
                      text-gray-200 text-lg font-medium 

                      flex items-center justify-between
                      transition-all duration-300

                      hover:border-[#60A5FA] hover:bg-[#3B82F6]/10
                      hover:shadow-[0_0_20px_rgba(80,120,255,0.4)]
                      hover:scale-[1.02] hover:text-white

                      disabled:opacity-40 disabled:cursor-not-allowed
                      group
                    "
                  >
                    <span className="group-hover:text-white transition-colors duration-300">
                      {option.text}
                    </span>

                    {/* SPINNER */}
                    {voteMutation.isPending &&
                      selectedOptionId === option.id && (
                        <div className="
                          w-6 h-6 border-2 
                          border-[#60A5FA] border-t-transparent 
                          rounded-full animate-spin
                        "></div>
                      )}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ERROR MESSAGE */}
          {voteMutation.isError && (
            <p className="text-red-400 text-sm mt-4">
              Failed to submit vote. Try again.
            </p>
          )}

          {/* FOOTER */}
          <div className="
            mt-10 pt-6 border-t border-white/10 
            flex justify-between
          ">
            <button
              onClick={() => navigate(`/poll/${id}/results`)}
              className="
                flex items-center gap-2 text-[#60A5FA] 
                hover:text-white transition
              "
            >
              <BarChart3 className="w-5 h-5" />
              View Results
            </button>

            {deleteMutation.isError && (
              <p className="text-red-400 text-sm">
                Failed to delete poll.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};



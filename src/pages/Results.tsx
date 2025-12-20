// import { useParams, useNavigate } from "react-router-dom";
// import { useGetPoll } from "../api/hooks";
// import { Loader } from "../components/Loader";
// import { TrendingUp, Users, ArrowLeft } from "lucide-react";

// export const Results = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const { data: poll, isLoading, error } = useGetPoll(id!);

//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center text-white">
//         <Loader />
//       </div>
//     );
//   }

//   if (error || !poll) {
//     return (
//       <div className="h-full flex flex-col items-center justify-center text-white">
//         <p className="text-red-400 text-lg font-semibold">
//           Failed to load results
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 px-6 py-3 rounded-xl
//             bg-gradient-to-r from-blue-600 to-purple-600
//             hover:opacity-90 transition"
//         >
//           Back to Home
//         </button>
//       </div>
//     );
//   }

//   const sortedOptions = [...poll.options].sort(
//     (a, b) => b.votes - a.votes
//   );

//   return (
//     <div className="min-h-full flex items-center justify-center px-6">

//       {/* RESULT CARD */}
//       <div
//         className="
//           w-full max-w-2xl
//           bg-white/10 backdrop-blur-2xl
//           rounded-3xl border border-white/10
//           shadow-[0_0_35px_rgba(0,0,0,0.45)]
//           overflow-hidden
//           animate-fadeInSlow
//         "
//       >
//         {/* HEADER */}
//         <div className="
//           bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//           px-8 py-6
//         ">
//           <div className="flex items-center gap-3 mb-2">
//             <TrendingUp className="w-8 h-8" />
//             <h1 className="text-3xl font-extrabold">Results</h1>
//           </div>

//           <h2 className="text-xl font-semibold">{poll.title}</h2>

//           <div className="flex items-center gap-2 mt-3 text-sm">
//             <Users className="w-4 h-4 opacity-80" />
//             Total Votes: {poll.totalVotes}
//           </div>
//         </div>

//         {/* BODY */}
//         <div className="p-8 space-y-8">

//           {poll.totalVotes === 0 ? (
//             <div className="text-center py-10">
//               <p className="text-gray-300">
//                 No votes yet. Be the first to vote!
//               </p>
//               <button
//                 onClick={() => navigate(`/poll/${id}`)}
//                 className="mt-5 px-6 py-3 rounded-xl
//                   bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                   hover:opacity-90 transition"
//               >
//                 Cast Your Vote
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {sortedOptions.map((option, index) => {
//                 const percentage =
//                   poll.totalVotes > 0
//                     ? ((option.votes / poll.totalVotes) * 100).toFixed(1)
//                     : "0.0";

//                 return (
//                   <div key={option.id} className="space-y-2">

//                     {/* LABEL ROW */}
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-3">
//                         {index === 0 && option.votes > 0 && (
//                           <span className="
//                             px-3 py-1 text-xs rounded-full
//                             bg-yellow-400 text-black font-bold
//                           ">
//                             LEADING
//                           </span>
//                         )}
//                         <span className="font-semibold">
//                           {option.text}
//                         </span>
//                       </div>

//                       <span className="font-bold text-[#8B5CF6]">
//                         {percentage}%
//                         <span className="text-gray-400 text-sm ml-1">
//                           ({option.votes})
//                         </span>
//                       </span>
//                     </div>

//                     {/* PROGRESS BAR */}
//                     <div className="h-4 bg-white/10 rounded-full overflow-hidden">
//                       <div
//                         className="
//                           h-full rounded-full
//                           bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                           transition-all duration-1000 ease-out
//                         "
//                         style={{ width: `${percentage}%` }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* FOOTER */}
//           <div className="pt-6 border-t border-white/10 flex gap-4">
//             <button
//               onClick={() => navigate("/")}
//               className="
//                 flex items-center gap-2 px-6 py-3 rounded-xl
//                 bg-white/10 border border-white/20
//                 hover:bg-white/20 transition
//               "
//             >
//               <ArrowLeft className="w-5 h-5" />
//               Back
//             </button>

//             <button
//               onClick={() => navigate(`/poll/${id}`)}
//               className="
//                 px-6 py-3 rounded-xl font-semibold
//                 bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                 hover:opacity-90 transition
//               "
//             >
//               Vote Again
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


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
      <div className="h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error || !poll) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-white">
        <p className="text-red-400 font-semibold">Failed to load results</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Back
        </button>
      </div>
    );
  }

  const sortedOptions = [...poll.options].sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-full flex items-center justify-center px-4">

      <div className="
        w-full max-w-lg
        bg-white/10 backdrop-blur-2xl
        rounded-3xl border border-white/10
        shadow-[0_0_35px_rgba(0,0,0,0.45)]
        animate-fadeInSlow
      ">
        {/* HEADER */}
        <div className="
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          px-6 py-5
        ">
          <div className="flex items-center gap-3">
            <TrendingUp />
            <h1 className="text-2xl font-extrabold">Results</h1>
          </div>

          <p className="mt-2 text-sm">{poll.title}</p>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <Users size={16} /> {poll.totalVotes} votes
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6">
          {sortedOptions.map((opt) => {
            const percent = ((opt.votes / poll.totalVotes) * 100).toFixed(1);

            return (
              <div key={opt.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{opt.text}</span>
                  <span>{percent}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#A855F7] rounded-full transition-all duration-1000"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <button
              onClick={() => navigate(`/poll/${id}`)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#A855F7]"
            >
              Vote Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

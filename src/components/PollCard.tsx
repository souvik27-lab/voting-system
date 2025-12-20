// import { Link } from "react-router-dom";
// import { BarChart3, Users } from "lucide-react";
// import { Poll } from "../api";

// interface PollCardProps {
//   poll: Poll;
// }

// export const PollCard = ({ poll }: PollCardProps) => {
//   return (
//     <div
//       className="
//         w-[520px] 
//         bg-white/10 backdrop-blur-xl 
//         border border-white/10
//         rounded-2xl p-7
//         shadow-[0_0_25px_rgba(0,0,0,0.5)]
//         hover:shadow-[0_0_40px_rgba(87,97,255,0.7)]
//         hover:scale-[1.03]
//         transition-all duration-300
//       "
//     >
//       {/* Title + Icon */}
//       <div className="flex items-start justify-between mb-5">
//         <h3 className="text-2xl font-extrabold text-white">
//           {poll.title}
//         </h3>

//         <BarChart3 className="w-6 h-6 text-[#60A5FA]" />
//       </div>

//       {/* Description */}
//       <p className="text-gray-300 mb-6 text-sm leading-relaxed">
//         {poll.description}
//       </p>

//       {/* Votes + View Poll */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2 text-gray-300 text-sm">
//           <Users className="w-4 h-4 text-[#A855F7]" />
//           <span className="text-gray-200">
//             {poll.totalVotes}{" "}
//             {poll.totalVotes === 1 ? "vote" : "votes"}
//           </span>
//         </div>

//         <Link
//           to={`/poll/${poll.id}`}
//           className="
//             px-6 py-2 rounded-xl font-semibold text-white
//             bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//             shadow hover:opacity-90 transition
//           "
//         >
//           View Poll
//         </Link>
//       </div>

//       {/* Footer */}
//       <div className="mt-6 pt-4 border-t border-white/10">
//         <p className="text-gray-400 text-xs">
//           {poll.options.length} options
//         </p>
//       </div>
//     </div>
//   );
// };



import { Link } from "react-router-dom";
import { BarChart2, Users } from "lucide-react";

export const PollCard = ({ poll }: any) => {
  return (
    <div
      className="
        w-full
        bg-white/10 backdrop-blur-2xl
        rounded-2xl p-6
        border border-white/10

        hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]
        transition-all duration-500
      "
    >
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
        {poll.title}
      </h2>

      {/* META */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-300 mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-purple-400" />
          {poll.totalVotes} votes
        </div>

        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-blue-400" />
          {poll.options.length} options
        </div>
      </div>

      {/* ACTION */}
      <div className="flex justify-end">
        <Link
          to={`/poll/${poll.id}`}
          className="
            px-5 py-2 rounded-lg text-sm font-semibold
            bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
            hover:from-[#A855F7] hover:to-[#3B82F6]
            active:scale-95
            transition-all
          "
        >
          View Poll
        </Link>
      </div>
    </div>
  );
};

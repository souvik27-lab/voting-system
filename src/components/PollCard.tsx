// import { Link } from 'react-router-dom';
// import { BarChart3, Users } from 'lucide-react';
// import { Poll } from '../api';

// interface PollCardProps {
//   poll: Poll;
// }

// export const PollCard = ({ poll }: PollCardProps) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-gray-900 flex-1">{poll.title}</h3>
//           <BarChart3 className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
//         </div>

//         <p className="text-gray-600 mb-4 line-clamp-2">{poll.description}</p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center text-gray-500 text-sm">
//             <Users className="w-4 h-4 mr-1" />
//             <span>{poll.totalVotes} {poll.totalVotes === 1 ? 'vote' : 'votes'}</span>
//           </div>

//           <Link
//             to={`/poll/${poll.id}`}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
//           >
//             View Poll
//           </Link>
//         </div>
//       </div>

//       <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
//         {poll.options.length} options
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import { BarChart3, Users } from "lucide-react";
import { Poll } from "../api";

interface PollCardProps {
  poll: Poll;
}

export const PollCard = ({ poll }: PollCardProps) => {
  return (
    <div
      className="
        w-[520px] 
        bg-white/10 backdrop-blur-xl 
        border border-white/10
        rounded-2xl p-7
        shadow-[0_0_25px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_40px_rgba(87,97,255,0.7)]
        hover:scale-[1.03]
        transition-all duration-300
      "
    >
      {/* Title + Icon */}
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-2xl font-extrabold text-white">
          {poll.title}
        </h3>

        <BarChart3 className="w-6 h-6 text-[#60A5FA]" />
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        {poll.description}
      </p>

      {/* Votes + View Poll */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <Users className="w-4 h-4 text-[#A855F7]" />
          <span className="text-gray-200">
            {poll.totalVotes}{" "}
            {poll.totalVotes === 1 ? "vote" : "votes"}
          </span>
        </div>

        <Link
          to={`/poll/${poll.id}`}
          className="
            px-6 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
            shadow hover:opacity-90 transition
          "
        >
          View Poll
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-gray-400 text-xs">
          {poll.options.length} options
        </p>
      </div>
    </div>
  );
};


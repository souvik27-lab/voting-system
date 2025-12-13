// import { Link } from 'react-router-dom';
// import { useGetPolls } from '../api/hooks';
// import { PollCard } from '../components/PollCard';
// import { Loader } from '../components/Loader';
// import { Vote, TrendingUp } from 'lucide-react';

// export const Home = () => {
//   const { data: polls, isLoading, error } = useGetPolls();

//   /* ===========================
//         LOADING STATE
//   ============================ */
//   if (isLoading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <Loader />
//       </div>
//     );
//   }

//   /* ===========================
//         ERROR STATE
//   ============================ */
//   if (error) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <div className="
//           w-[460px]
//           bg-white/10 backdrop-blur-2xl
//           border border-red-500/40
//           shadow-xl shadow-red-600/30
//           rounded-2xl p-10 text-center
//           animate-fadeInSlow
//         ">
//           <p className="text-red-300 text-2xl font-semibold">
//             Failed to load polls
//           </p>

//           <p className="text-red-400 text-sm mt-3">
//             {(error as Error).message}
//           </p>

//           <button
//             onClick={() => window.location.reload()}
//             className="
//               mt-6 px-8 py-2 rounded-lg
//               bg-gradient-to-r from-red-500 to-red-700
//               text-white font-medium
//               hover:scale-105
//               transition-all duration-300
//             "
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   /* ===========================
//         MAIN CONTENT
//   ============================ */
//   return (
//     <div className="w-full flex flex-col items-center mt-24 px-4">

//       {/* ICON */}
//       <Vote className="w-14 h-14 text-[#3B82F6] drop-shadow-lg animate-fadeInSlow" />

//       {/* HEADING */}
//       <h1 className="
//         text-6xl font-extrabold mt-4 text-center
//         bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//         bg-clip-text text-transparent
//         animate-fadeInSlow
//       ">
//         Available Polls
//       </h1>

//       {/* SUBTEXT */}
//       <p className="text-lg text-[#9DB4D1] mt-2 text-center max-w-2xl animate-fadeInSlow">
//         Browse and participate in polls. Your voice matters!
//       </p>

//       {/* ================= EMPTY STATE ================= */}
//       {!polls || polls.length === 0 ? (
//         <div
//           className="
//             w-[520px]
//             bg-white/10 backdrop-blur-2xl
//             rounded-2xl border border-white/10
//             p-12 text-center mt-20

//             animate-fadeInSlow
//             animate-soft-float

//             hover:-translate-y-1
//             hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
//             transition-all duration-500
//           "
//         >
//           <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-6" />

//           <h3 className="text-2xl font-semibold text-white mb-2">
//             No polls yet
//           </h3>

//           <p className="text-gray-300 mb-8">
//             Be the first to create a poll!
//           </p>

//           <Link
//             to="/create"
//             className="
//               inline-block px-10 py-3 rounded-lg font-semibold
//               bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//               text-white shadow-lg
//               hover:scale-105
//               transition-all duration-300
//             "
//           >
//             Create Your First Poll
//           </Link>
//         </div>
//       ) : (
//         <div className="w-full flex justify-center mt-16 animate-fadeInSlow">
//           <div className="grid grid-cols-1 gap-10">
//             {polls.map((poll) => (
//               <PollCard key={poll.id} poll={poll} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// import { Link } from "react-router-dom";
// import { useGetPolls } from "../api/hooks";
// import { PollCard } from "../components/PollCard";
// import { Loader } from "../components/Loader";
// import { Vote, TrendingUp } from "lucide-react";

// export const Home = () => {
//   const { data: polls, isLoading, error } = useGetPolls();

//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center">
//         <Loader />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="h-full flex items-center justify-center text-red-400">
//         Failed to load polls
//       </div>
//     );
//   }

//   return (
//     <div className="h-full flex flex-col items-center justify-center">

//       <Vote className="w-14 h-14 text-[#3B82F6]" />

//       <h1 className="text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
//         Available Polls
//       </h1>

//       <p className="text-[#9DB4D1] mt-2">
//         Browse and participate in polls.
//       </p>

//       {!polls || polls.length === 0 ? (
//         <div className="mt-16 w-[520px] bg-white/10 backdrop-blur-2xl rounded-2xl p-12 text-center animate-soft-float">
//           <TrendingUp className="w-16 h-16 mx-auto mb-6 text-gray-300" />
//           <h3 className="text-2xl font-semibold">No polls yet</h3>
//           <p className="text-gray-300 mb-8">Be the first to create a poll!</p>

//           <Link
//             to="/create"
//             className="px-10 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#A855F7]"
//           >
//             Create Your First Poll
//           </Link>
//         </div>
//       ) : (
//         <div className="mt-10">
//           {polls.map((poll) => (
//             <PollCard key={poll.id} poll={poll} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


import { Link } from "react-router-dom";
import { useGetPolls } from "../api/hooks";
import { PollCard } from "../components/PollCard";
import { Loader } from "../components/Loader";
import { Vote, TrendingUp } from "lucide-react";

export const Home = () => {
  const { data: polls, isLoading, error } = useGetPolls();

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex justify-center items-center text-red-400">
        Failed to load polls
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">

      <Vote className="w-14 h-14 text-[#3B82F6] animate-fadeInSlow" />

      <h1 className="text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent animate-fadeInSlow">
        Available Polls
      </h1>

      <p className="text-[#9DB4D1] mt-2 animate-fadeInSlow">
        Browse and participate in polls. Your voice matters!
      </p>

      {!polls || polls.length === 0 ? (
        <div
          className="
            mt-16 w-[520px] p-12 rounded-2xl bg-white/10 backdrop-blur-2xl
            border border-white/10 text-center
            animate-fadeInSlow animate-soft-float
          "
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-gray-300" />

          <h3 className="text-2xl font-semibold text-white mb-2">
            No polls yet
          </h3>

          <p className="text-gray-300 mb-6">
            Be the first to create a poll!
          </p>

          <Link
            to="/create"
            className="px-10 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#A855F7] text-white"
          >
            Create Your First Poll
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-8">
          {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      )}
    </div>
  );
};

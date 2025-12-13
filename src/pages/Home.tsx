// import { useGetPolls } from '../api/hooks';
// import { PollCard } from '../components/PollCard';
// import { Loader } from '../components/Loader';
// import { Vote, TrendingUp } from 'lucide-react';

// export const Home = () => {
//   const { data: polls, isLoading, error } = useGetPolls();

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center py-24">
//         <Loader />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center py-24">
//         <div
//   className="
//     bg-white/10 backdrop-blur-xl 
//     border border-red-500/30 
//     shadow-lg shadow-red-500/20 
//     rounded-2xl p-8 text-center 
//     animate-fadeIn
//   "
// >
//   <p className="text-red-300 text-xl font-semibold drop-shadow">
//     Failed to load polls
//   </p>

//   <p className="text-red-400 text-sm mt-2">
//     {(error as Error).message}
//   </p>

//   <button
//     onClick={() => window.location.reload()}
//     className="
//       mt-5 px-6 py-2 rounded-lg 
//       bg-gradient-to-r from-red-500 to-red-700 
//       text-white font-medium
//       shadow-md hover:shadow-red-500/40
//       transition-all duration-300 hover:scale-105
//     "
//   >
//     Retry
//   </button>
// </div>

//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex flex-col justify-center items-center mt-24 px-4">

//       {/* ICON */}
//       <Vote className="w-14 h-14 text-[#3B82F6] drop-shadow-lg" />

//       {/* HEADING */}
//       <h1
//         className="text-6xl font-extrabold mt-4 text-center
//         bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//         bg-clip-text text-transparent drop-shadow-xl"
//       >
//         Available Polls
//       </h1>

//       {/* SUBTEXT */}
//       <p className="text-lg text-[#9DB4D1] mt-2 text-center max-w-2xl">
//         Browse and participate in polls. Your voice matters!
//       </p>

//       {/* POLLS */}
//       {!polls || polls.length === 0 ? (
//         <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-xl p-12 text-center mt-16 border border-white/10 w-[400px]">
//           <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold text-white mb-2">No polls yet</h3>
//           <p className="text-gray-400 mb-6">Be the first to create a poll!</p>

//           <a
//             href="/create"
//             className="inline-block px-6 py-3 rounded-lg font-semibold
//             bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//             text-white shadow-md hover:opacity-90 transition"
//           >
//             Create Your First Poll
//           </a>
//         </div>
//       ) : (
//         // ⭐ FIXED CENTERED POLL LIST
//         <div className="w-full flex justify-center mt-16">
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


import { Link } from 'react-router-dom';
import { useGetPolls } from '../api/hooks';
import { PollCard } from '../components/PollCard';
import { Loader } from '../components/Loader';
import { Vote, TrendingUp } from 'lucide-react';

export const Home = () => {
  const { data: polls, isLoading, error } = useGetPolls();

  /* ===========================
        LOADING STATE
  ============================ */
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  /* ===========================
        ERROR STATE
  ============================ */
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="
            w-[460px]
            bg-white/10 backdrop-blur-2xl
            border border-red-500/40
            shadow-xl shadow-red-600/30
            rounded-2xl p-10 text-center
            animate-fadeInSlow
          "
        >
          <p className="text-red-300 text-2xl font-semibold">
            Failed to load polls
          </p>

          <p className="text-red-400 text-sm mt-3">
            {(error as Error).message}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="
              mt-6 px-8 py-2 rounded-lg
              bg-gradient-to-r from-red-500 to-red-700
              text-white font-medium
              hover:scale-105
              transition-all duration-300
            "
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  /* ===========================
        MAIN CONTENT
  ============================ */
  return (
    <div className="w-full flex flex-col items-center mt-24 px-4">

      {/* ICON */}
      <Vote className="w-14 h-14 text-[#3B82F6] drop-shadow-lg animate-fadeInSlow" />

      {/* HEADING */}
      <h1
        className="
          text-6xl font-extrabold mt-4 text-center
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          bg-clip-text text-transparent
          animate-fadeInSlow
        "
      >
        Available Polls
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg text-[#9DB4D1] mt-2 text-center max-w-2xl animate-fadeInSlow">
        Browse and participate in polls. Your voice matters!
      </p>

      {/* POLL LIST / EMPTY STATE */}
      {!polls || polls.length === 0 ? (
        <div
          className="
            w-[520px]
            bg-white/10 backdrop-blur-2xl
            rounded-2xl shadow-xl border border-white/10
            p-12 text-center mt-20
            animate-fadeInSlow
          "
        >
          <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-6 animate-pulse" />

          <h3 className="text-2xl font-semibold text-white mb-2">
            No polls yet
          </h3>

          <p className="text-gray-300 mb-8">
            Be the first to create a poll!
          </p>

          {/* ✅ FIXED NAVIGATION */}
          <Link
            to="/create"
            className="
              inline-block px-10 py-3 rounded-lg font-semibold
              bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
              text-white shadow-lg
              hover:scale-105
              transition-all duration-300
            "
          >
            Create Your First Poll
          </Link>
        </div>
      ) : (
        <div className="w-full flex justify-center mt-16 animate-fadeInSlow">
          <div className="grid grid-cols-1 gap-10">
            {polls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

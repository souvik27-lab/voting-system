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

//       {/* ICON */}
//       <Vote className="w-14 h-14 text-[#3B82F6] animate-icon-glow" />

//       {/* TITLE */}
//       <h1 className="text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
//         Available Polls
//       </h1>

//       {/* SUBTEXT */}
//       <p className="text-[#9DB4D1] mt-2">
//         Browse and participate in polls.
//       </p>

//       {/* EMPTY STATE */}
//       {!polls || polls.length === 0 ? (
//         <div
//           className="
//             mt-16 w-[520px]
//             bg-white/10 backdrop-blur-2xl
//             rounded-2xl p-12 text-center

//             animate-soft-float
//             hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
//             transition-all duration-500
//           "
//         >
//           {/* ICON */}
//           <TrendingUp
//             className="
//               w-16 h-16 mx-auto mb-6 text-gray-300
//               animate-icon-glow
//             "
//           />

//           <h3 className="text-2xl font-semibold text-white">
//             No polls yet
//           </h3>

//           <p className="text-gray-300 mb-8">
//             Be the first to create a poll!
//           </p>

//           {/* BUTTON */}
//           <Link
//             to="/create"
//             className="
//               inline-block px-10 py-3 rounded-lg font-semibold text-white
//               bg-gradient-to-r from-[#3B82F6] to-[#A855F7]

//               hover:from-[#A855F7] hover:to-[#3B82F6]
//               active:scale-95
//               active:from-[#2563EB] active:to-[#7C3AED]

//               shadow-lg
//               transition-all duration-300
//             "
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
//     <div className="h-full flex flex-col items-center justify-center px-4 text-center">

//       {/* ICON */}
//       <Vote className="w-12 md:w-14 h-12 md:h-14 text-[#3B82F6] animate-icon-glow" />

//       {/* TITLE */}
//       <h1 className="
//         text-4xl md:text-6xl
//         font-extrabold mt-4
//         bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
//         bg-clip-text text-transparent
//       ">
//         Available Polls
//       </h1>

//       {/* SUBTEXT */}
//       <p className="text-[#9DB4D1] mt-2 text-sm md:text-base">
//         Browse and participate in polls.
//       </p>

//       {/* EMPTY STATE */}
//       {!polls || polls.length === 0 ? (
//         <div
//           className="
//             mt-12 w-full max-w-md
//             bg-white/10 backdrop-blur-2xl
//             rounded-2xl p-8 md:p-12
//             animate-soft-float
//             hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
//             transition-all duration-500
//           "
//         >
//           <TrendingUp className="w-14 h-14 mx-auto mb-5 text-gray-300 animate-icon-glow" />

//           <h3 className="text-xl md:text-2xl font-semibold text-white">
//             No polls yet
//           </h3>

//           <p className="text-gray-300 mb-6 text-sm md:text-base">
//             Be the first to create a poll!
//           </p>

//           <Link
//             to="/create"
//             className="
//               inline-block px-8 md:px-10 py-3
//               rounded-lg font-semibold text-white
//               bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//               hover:from-[#A855F7] hover:to-[#3B82F6]
//               active:scale-95
//               transition-all duration-300
//             "
//           >
//             Create Your First Poll
//           </Link>
//         </div>
//       ) : (
//         <div className="mt-10 w-full max-w-3xl">
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

      {/* ICON */}
      <Vote className="w-14 h-14 text-[#3B82F6] animate-icon-glow" />

      {/* TITLE */}
      <h1 className="text-6xl font-extrabold mt-4 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
        Available Polls
      </h1>

      {/* SUBTEXT */}
      <p className="text-[#9DB4D1] mt-2">
        Browse and participate in polls.
      </p>

      {/* EMPTY STATE */}
      {!polls || polls.length === 0 ? (
        <div
          className="
            mt-16 w-[520px]
            bg-white/10 backdrop-blur-2xl
            rounded-2xl p-12 text-center

            animate-soft-float
            hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
            transition-all duration-500
          "
        >
          <TrendingUp
            className="
              w-16 h-16 mx-auto mb-6 text-gray-300
              animate-icon-glow
            "
          />

          <h3 className="text-2xl font-semibold text-white">
            No polls yet
          </h3>

          <p className="text-gray-300 mb-8">
            Be the first to create a poll!
          </p>

          <Link
            to="/create"
            className="
              inline-block px-10 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-[#3B82F6] to-[#A855F7]

              hover:from-[#A855F7] hover:to-[#3B82F6]
              active:scale-95
              active:from-[#2563EB] active:to-[#7C3AED]

              shadow-lg
              transition-all duration-300
            "
          >
            Create Your First Poll
          </Link>
        </div>
      ) : (
        /* 🔧 ONLY CHANGE IS HERE */
        <div className="mt-10 w-full flex justify-center px-4">
          <div className="w-full max-w-2xl flex flex-col gap-6">
            {polls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// import { Outlet, Link, useLocation } from "react-router-dom";
// import { PlusCircle, Home } from "lucide-react";

// function App() {
//   const location = useLocation();

//   return (
//     <div className="h-screen flex overflow-hidden bg-gradient-to-br from-black via-[#040d22] to-[#0A1A45] text-white">

//       {/* SIDE NAV */}
//       <aside className="w-96 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-6">

//         {/* LOGO */}
//         <div className="flex flex-col mb-10">
//           <div className="flex items-center gap-3 mb-3">
//             <img
//               src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png"
//               className="w-14 h-14 rounded-xl"
//               alt="logo"
//             />

//             <h1 className="text-5xl font-extrabold tracking-wide">
//               <span className="text-[#3B82F6]">V</span>ote
//               <span className="text-[#A855F7]">H</span>ub
//             </h1>
//           </div>

//           <div className="h-px bg-white/20" />
//         </div>

//         {/* NAV */}
//         <nav className="flex flex-col gap-4">
//           <Link
//             to="/"
//             className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium transition
//               ${
//                 location.pathname === "/"
//                   ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
//                   : "bg-[#0f1525] hover:bg-[#1a2440]"
//               }`}
//           >
//             <Home size={20} /> Home
//           </Link>

//           <Link
//             to="/create"
//             className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium transition
//               ${
//                 location.pathname === "/create"
//                   ? "bg-gradient-to-r from-[#A855F7] to-[#3B82F6]"
//                   : "bg-[#0f1525] hover:bg-[#1a2440]"
//               }`}
//           >
//             <PlusCircle size={20} /> Create Poll
//           </Link>
//         </nav>

//         {/* FOOTER */}
//         <div className="mt-auto text-center text-sm text-gray-400">
//           © 2025 Voting System  
//           <div className="text-[#A855F7]">AWS DynamoDB</div>
//         </div>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 h-full overflow-hidden p-10">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default App;


import { Outlet, Link, useLocation } from "react-router-dom";
import { PlusCircle, Home } from "lucide-react";

function App() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-black via-[#040d22] to-[#0A1A45] text-white">

      {/* SIDEBAR */}
      <aside className="
        w-full md:w-96
        h-auto md:h-full
        bg-black/40 backdrop-blur-xl
        border-b md:border-b-0 md:border-r border-white/10
        flex flex-col p-4 md:p-6
      ">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png"
            className="w-12 h-12 rounded-xl"
            alt="logo"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-[#3B82F6]">V</span>ote
            <span className="text-[#A855F7]">H</span>ub
          </h1>
        </div>

        {/* NAV */}
        <nav className="flex md:flex-col gap-3">
          <Link
            to="/"
            className={`flex-1 md:flex-none flex items-center gap-2 px-4 py-2 rounded-xl text-sm md:text-lg font-medium transition
              ${
                location.pathname === "/"
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
                  : "bg-[#0f1525] hover:bg-[#1a2440]"
              }`}
          >
            <Home size={18} /> Home
          </Link>

          <Link
            to="/create"
            className={`flex-1 md:flex-none flex items-center gap-2 px-4 py-2 rounded-xl text-sm md:text-lg font-medium transition
              ${
                location.pathname === "/create"
                  ? "bg-gradient-to-r from-[#A855F7] to-[#3B82F6]"
                  : "bg-[#0f1525] hover:bg-[#1a2440]"
              }`}
          >
            <PlusCircle size={18} /> Create Poll
          </Link>
        </nav>

        {/* FOOTER */}
        <div className="hidden md:block mt-auto text-center text-sm text-gray-400">
          © 2025 Voting System  
          <div className="text-[#A855F7]">AWS DynamoDB</div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-auto p-4 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;


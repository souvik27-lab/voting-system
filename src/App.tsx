// import { Outlet, Link, useLocation } from "react-router-dom";
// import { PlusCircle, Home } from "lucide-react";

// function App() {
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-black via-[#040d22] to-[#0A1A45] text-white">

//       {/* SIDE NAV */}
//       <aside className="w-96 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-6">

//         {/* LOGO + TITLE */}
//         <div className="flex flex-col mb-10">
//           <div className="flex items-center gap-3 mb-3">
            
//             {/* LOGO */}
//             <div className="w-16 h-16 flex items-center justify-center">
//               <img
//                 src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png"
//                 alt="logo"
//                 className="w-14 h-14 rounded-xl"
//               />
//             </div>

//             {/* VOTEHUB TEXT */}
//             <h1 className="text-5xl font-extrabold tracking-wide ml-3 flex items-center gap-1">
//               <span className="text-[#3B82F6]">V</span>
//               <span className="text-white">ote</span>
//               <span className="text-[#A855F7]">H</span>
//               <span className="text-white">ub</span>
//             </h1>
//           </div>

//           {/* SEPARATOR */}
//           <div className="w-full h-px bg-white/20 rounded-full"></div>
//         </div>

//         {/* NAV BUTTONS */}
//         <nav className="flex flex-col gap-4 mt-6">

  
//  {/* HOME BUTTON */}
// <Link
//   to="/"
//   className={`
//     flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium
//     relative overflow-hidden transition-all duration-900 group

//     ${location.pathname === "/"
//       ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-xl scale-[1.03]"
//       : "bg-[#0f1525] text-gray-300 hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#60A5FA] hover:text-white"
//     }
//   `}
// >
//   {/* Shine Animation (Slow) */}
//   <span
//     className="
//       absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
//       opacity-0 group-hover:opacity-100
//       -translate-x-full group-hover:translate-x-full
//       transition-all duration-[1200ms]
//     "
//   />

//   <Home size={20} className="drop-shadow" />
//   Home
// </Link>


// {/* CREATE POLL BUTTON */}
// <Link
//   to="/create"
//   className={`
//     flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium
//     relative overflow-hidden transition-all duration-900 group

//     ${location.pathname === "/create"
//       ? "bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6] text-white shadow-xl scale-[1.03]"
//       : "bg-[#0f1525] text-gray-300 hover:bg-gradient-to-r hover:from-[#A855F7] hover:via-[#8B5CF6] hover:to-[#3B82F6] hover:text-white"
//     }
//   `}
// >
//   {/* Shine Animation (Slow) */}
//   <span
//     className="
//       absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
//       opacity-0 group-hover:opacity-100
//       -translate-x-full group-hover:translate-x-full
//       transition-all duration-[1200ms]
//     "
//   />

//   <PlusCircle size={20} className="drop-shadow" />
//   Create Poll
// </Link>

// </nav>

//         {/* FOOTER */}
//       <div className="mt-auto text-center pb-6 select-none flex flex-col items-center">

//   {/* AWS SMALL LOGO */}
//   <img
//     src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png"
//     className="w-8 h-8 opacity-80 mb-2"
//     alt="AWS Logo"
//   />

//   {/* FOOTER TEXT */}
//   <p className="text-gray-300 text-sm font-semibold tracking-wide">
//     © 2025 Voting System
//   </p>

//   <p className="text-gray-400 text-xs mt-1">
//     Powered by <span className="text-[#A855F7] font-semibold">AWS DynamoDB</span>.
//   </p>

// </div>
//       </aside>

//       {/* MAIN CONTENT (ONLY OUTLET) */}
//       <main className="flex-1 p-10 overflow-auto">
        
//         {/* OUTLET WILL RENDER HOME / CREATE POLL / POLL VIEW */}
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
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-black via-[#040d22] to-[#0A1A45] text-white">

      {/* SIDE NAV */}
      <aside className="w-96 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-6">

        {/* LOGO */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png"
              className="w-14 h-14 rounded-xl"
              alt="logo"
            />

            <h1 className="text-5xl font-extrabold tracking-wide">
              <span className="text-[#3B82F6]">V</span>ote
              <span className="text-[#A855F7]">H</span>ub
            </h1>
          </div>

          <div className="h-px bg-white/20" />
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium transition
              ${
                location.pathname === "/"
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
                  : "bg-[#0f1525] hover:bg-[#1a2440]"
              }`}
          >
            <Home size={20} /> Home
          </Link>

          <Link
            to="/create"
            className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-medium transition
              ${
                location.pathname === "/create"
                  ? "bg-gradient-to-r from-[#A855F7] to-[#3B82F6]"
                  : "bg-[#0f1525] hover:bg-[#1a2440]"
              }`}
          >
            <PlusCircle size={20} /> Create Poll
          </Link>
        </nav>

        {/* FOOTER */}
        <div className="mt-auto text-center text-sm text-gray-400">
          © 2025 Voting System  
          <div className="text-[#A855F7]">AWS DynamoDB</div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-full overflow-hidden p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;



// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCreatePoll } from "../api/hooks";
// import { PlusCircle, X, CheckCircle } from "lucide-react";

// export const CreatePoll = () => {
//   const navigate = useNavigate();
//   const createPollMutation = useCreatePoll();

//   const [title, setTitle] = useState("");
//   const [options, setOptions] = useState(["", ""]);

//   const addOption = () => {
//     setOptions([...options, ""]);
//   };

//   const removeOption = (index: number) => {
//     if (options.length > 2) {
//       setOptions(options.filter((_, i) => i !== index));
//     }
//   };

//   const updateOption = (index: number, value: string) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const filteredOptions = options.filter((opt) => opt.trim() !== "");
//     if (!title.trim()) {
//       alert("Please enter a question");
//       return;
//     }
//     if (filteredOptions.length < 2) {
//       alert("Please provide at least 2 options");
//       return;
//     }

//     try {
//       const poll = await createPollMutation.mutateAsync({
//         title: title.trim(),
//         description: "",
//         options: filteredOptions,
//       });

//       navigate(`/poll/${poll.id}`);
//     } catch (error) {
//       console.error("Failed to create poll:", error);
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen px-6">

//       {/* SOFT BACKGROUND GLOW */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-24 left-32 w-40 h-40 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-24 right-32 w-52 h-52 bg-[#A855F7]/20 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* MAIN CARD */}
//       <div
//         className="
//           w-full max-w-[860px]
//           bg-white/5 backdrop-blur-2xl
//           border border-white/10
//           rounded-3xl p-12
//           shadow-[0_0_35px_rgba(0,0,0,0.45)]
//           animate-fadeInSlow
//         "
//       >
//         {/* TITLE */}
//         <h1
//           className="
//             text-5xl font-extrabold text-center
//             bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//             bg-clip-text text-transparent
//           "
//         >
//           Create New Poll
//         </h1>

//         <p className="text-center text-gray-300 mt-2">
//           Ask a question and let people vote!
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-12 space-y-8">

//           {/* QUESTION */}
//           <div>
//             <label className="text-white font-semibold">
//               Poll Question
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your question..."
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="
//                 w-full mt-2 px-5 py-4 rounded-xl
//                 bg-white/10 text-white
//                 border border-white/20
//                 focus:border-[#60A5FA]
//                 placeholder-gray-400
//                 outline-none transition-all
//               "
//             />
//           </div>

//           {/* OPTIONS */}
//           <div>
//             <div className="flex items-center justify-between">
//               <label className="text-white font-semibold">
//                 Options (minimum 2)
//               </label>

//               <button
//                 type="button"
//                 onClick={addOption}
//                 className="
//                   flex items-center gap-2 px-4 py-2
//                   rounded-lg text-sm
//                   bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
//                   text-white shadow
//                   hover:opacity-90 transition
//                 "
//               >
//                 <PlusCircle className="w-4 h-4" />
//                 Add Option
//               </button>
//             </div>

//             <div className="space-y-4 mt-4">
//               {options.map((option, index) => (
//                 <div key={index} className="flex gap-3">
//                   <input
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       updateOption(index, e.target.value)
//                     }
//                     className="
//                       flex-1 px-5 py-4 rounded-xl
//                       bg-white/10 text-white
//                       border border-white/20
//                       focus:border-[#60A5FA]
//                       placeholder-gray-400
//                       outline-none transition-all
//                     "
//                   />

//                   {options.length > 2 && (
//                     <button
//                       type="button"
//                       onClick={() => removeOption(index)}
//                       aria-label="Remove option"
//                       className="
//                         px-3 py-2 rounded-xl
//                         bg-red-500/20 text-red-300
//                         border border-red-500/40
//                         hover:bg-red-500/30
//                         transition
//                       "
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ACTION BUTTONS */}
//           <div className="flex gap-4 pt-4">
//             <button
//               type="submit"
//               disabled={createPollMutation.isPending}
//               className="
//                 flex-1 flex items-center justify-center gap-3
//                 py-4 rounded-xl font-bold text-lg
//                 bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                 text-white shadow-xl
//                 hover:opacity-90 transition
//               "
//             >
//               {createPollMutation.isPending ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Creating...
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle className="w-5 h-5" />
//                   Create Poll
//                 </>
//               )}
//             </button>

//             <button
//               type="button"
//               onClick={() => navigate("/")}
//               className="
//                 px-8 py-4 rounded-xl font-semibold
//                 text-white bg-white/10
//                 border border-white/20
//                 hover:bg-white/20 transition
//               "
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };





// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCreatePoll } from "../api/hooks";
// import { PlusCircle, X, CheckCircle } from "lucide-react";

// export const CreatePoll = () => {
//   const navigate = useNavigate();
//   const createPollMutation = useCreatePoll();

//   const [title, setTitle] = useState("");
//   const [options, setOptions] = useState(["", ""]);

//   const addOption = () => setOptions([...options, ""]);

//   const removeOption = (index: number) => {
//     if (options.length > 2) {
//       setOptions(options.filter((_, i) => i !== index));
//     }
//   };

//   const updateOption = (index: number, value: string) => {
//     const updated = [...options];
//     updated[index] = value;
//     setOptions(updated);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const validOptions = options.filter((o) => o.trim() !== "");
//     if (!title.trim() || validOptions.length < 2) return;

//     const poll = await createPollMutation.mutateAsync({
//       title: title.trim(),
//       description: "",
//       options: validOptions,
//     });

//     navigate(`/poll/${poll.id}`);
//   };

//   return (
//     <div className="flex justify-center pt-20 pb-32">

//       {/* MAIN CARD */}
//       <div
//         className="
//           w-[850px] bg-white/5 backdrop-blur-2xl
//           border border-white/10 rounded-3xl p-12

//           animate-card-entry
//           hover:shadow-[0_0_45px_rgba(139,92,246,0.25)]
//           transition-all duration-500
//         "
//       >
//         {/* TITLE */}
//         <h1 className="
//           text-5xl font-extrabold text-center
//           bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//           bg-clip-text text-transparent
//         ">
//           Create New Poll
//         </h1>

//         <p className="text-center text-gray-300 mt-2">
//           Ask a question and let people vote!
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-12 space-y-8">

//           {/* QUESTION */}
//           <div className="animate-input-pop">
//             <label className="font-semibold">Poll Question</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter your question..."
//               className="
//                 w-full mt-2 px-5 py-4 rounded-xl
//                 bg-white/10 text-white border border-white/20
//                 focus:border-[#60A5FA] focus:shadow-[0_0_12px_rgba(96,165,250,0.4)]
//                 outline-none transition-all duration-300
//               "
//             />
//           </div>

//           {/* OPTIONS */}
//           <div className="space-y-4 animate-input-pop">
//             <div className="flex justify-between items-center">
//               <label className="font-semibold">Options (minimum 2)</label>

//               <button
//                 type="button"
//                 onClick={addOption}
//                 className="
//                   flex items-center gap-2 px-4 py-2 rounded-lg text-sm
//                   bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
//                   hover:scale-105 transition-all
//                 "
//               >
//                 <PlusCircle size={16} /> Add Option
//               </button>
//             </div>

//             {options.map((opt, i) => (
//               <div key={i} className="flex gap-3">
//                 <input
//                   value={opt}
//                   onChange={(e) => updateOption(i, e.target.value)}
//                   placeholder={`Option ${i + 1}`}
//                   className="
//                     flex-1 px-5 py-4 rounded-xl
//                     bg-white/10 border border-white/20
//                     focus:border-[#60A5FA]
//                     outline-none transition-all
//                   "
//                 />

//                 {options.length > 2 && (
//                   <button
//                     type="button"
//                     onClick={() => removeOption(i)}
//                     className="
//                       px-3 rounded-xl
//                       bg-red-500/20 border border-red-500/40
//                       hover:bg-red-500/30 transition
//                     "
//                   >
//                     <X />
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* BUTTONS */}
//           <div className="flex gap-4 pt-4 animate-input-pop">

//             {/* CREATE */}
//             <button
//               type="submit"
//               disabled={createPollMutation.isPending}
//               className="
//                 flex-1 py-4 rounded-xl font-bold
//                 bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                 hover:from-[#A855F7] hover:to-[#3B82F6]
//                 active:scale-95 transition-all duration-300
//               "
//             >
//               {createPollMutation.isPending ? "Creating..." : "Create Poll"}
//             </button>

//             {/* CANCEL */}
//             <button
//               type="button"
//               onClick={() => navigate("/")}
//               className="
//                 px-8 py-4 rounded-xl
//                 bg-white/10 border border-white/20
//                 hover:bg-white/20 transition
//               "
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };









import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePoll } from "../api/hooks";
import { PlusCircle, X, CheckCircle } from "lucide-react";

export const CreatePoll = () => {
  const navigate = useNavigate();
  const createPollMutation = useCreatePoll();

  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => setOptions([...options, ""]);

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validOptions = options.filter((o) => o.trim() !== "");
    if (!title.trim() || validOptions.length < 2) return;

    const poll = await createPollMutation.mutateAsync({
      title: title.trim(),
      description: "",
      options: validOptions,
    });

    navigate(`/poll/${poll.id}`);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">

      {/* MAIN CARD */}
      <div
        className="
          w-[720px]
          bg-white/5 backdrop-blur-2xl
          border border-white/10 rounded-3xl
          p-10

          animate-card-entry
          hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
          transition-all duration-500
        "
      >
        {/* TITLE */}
        <h1 className="
          text-4xl font-extrabold text-center
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          bg-clip-text text-transparent
        ">
          Create New Poll
        </h1>

        <p className="text-center text-gray-300 mt-2 text-sm">
          Ask a question and let people vote!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-7">

          {/* QUESTION */}
          <div className="animate-input-pop">
            <label className="font-semibold text-sm">Poll Question</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your question..."
              className="
                w-full mt-2 px-5 py-3 rounded-xl
                bg-white/10 text-white border border-white/20
                focus:border-[#60A5FA]
                focus:shadow-[0_0_12px_rgba(96,165,250,0.4)]
                outline-none transition-all
              "
            />
          </div>

          {/* OPTIONS */}
          <div className="space-y-4 animate-input-pop">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-sm">
                Options (minimum 2)
              </label>

              <button
                type="button"
                onClick={addOption}
                className="
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                  bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                  hover:scale-105 transition
                "
              >
                <PlusCircle size={16} /> Add Option
              </button>
            </div>

            {options.map((opt, i) => (
              <div key={i} className="flex gap-3">
                <input
                  value={opt}
                  onChange={(e) => updateOption(i, e.target.value)}
                  placeholder={`Option ${i + 1}`}
                  className="
                    flex-1 px-5 py-3 rounded-xl
                    bg-white/10 border border-white/20
                    focus:border-[#60A5FA]
                    outline-none transition
                  "
                />

                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(i)}
                    className="
                      px-3 rounded-xl
                      bg-red-500/20 border border-red-500/40
                      hover:bg-red-500/30 transition
                    "
                  >
                    <X />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-3 animate-input-pop">

            <button
              type="submit"
              disabled={createPollMutation.isPending}
              className="
                flex-1 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
                hover:from-[#A855F7] hover:to-[#3B82F6]
                active:scale-95 transition-all
              "
            >
              {createPollMutation.isPending ? "Creating..." : "Create Poll"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                px-7 py-3 rounded-xl
                bg-white/10 border border-white/20
                hover:bg-white/20 transition
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

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
//     <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">

//       {/* MAIN CARD */}
//       <div
//         className="
//           w-[720px]
//           bg-white/5 backdrop-blur-2xl
//           border border-white/10 rounded-3xl
//           p-10

//           animate-card-entry
//           hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
//           transition-all duration-500
//         "
//       >
//         {/* TITLE */}
//         <h1 className="
//           text-4xl font-extrabold text-center
//           bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//           bg-clip-text text-transparent
//         ">
//           Create New Poll
//         </h1>

//         <p className="text-center text-gray-300 mt-2 text-sm">
//           Ask a question and let people vote!
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-10 space-y-7">

//           {/* QUESTION */}
//           <div className="animate-input-pop">
//             <label className="font-semibold text-sm">Poll Question</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter your question..."
//               className="
//                 w-full mt-2 px-5 py-3 rounded-xl
//                 bg-white/10 text-white border border-white/20
//                 focus:border-[#60A5FA]
//                 focus:shadow-[0_0_12px_rgba(96,165,250,0.4)]
//                 outline-none transition-all
//               "
//             />
//           </div>

//           {/* OPTIONS */}
//           <div className="space-y-4 animate-input-pop">
//             <div className="flex justify-between items-center">
//               <label className="font-semibold text-sm">
//                 Options (minimum 2)
//               </label>

//               <button
//                 type="button"
//                 onClick={addOption}
//                 className="
//                   flex items-center gap-2 px-4 py-2 rounded-lg text-sm
//                   bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
//                   hover:scale-105 transition
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
//                     flex-1 px-5 py-3 rounded-xl
//                     bg-white/10 border border-white/20
//                     focus:border-[#60A5FA]
//                     outline-none transition
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
//           <div className="flex gap-4 pt-3 animate-input-pop">

//             <button
//               type="submit"
//               disabled={createPollMutation.isPending}
//               className="
//                 flex-1 py-3 rounded-xl font-semibold
//                 bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                 hover:from-[#A855F7] hover:to-[#3B82F6]
//                 active:scale-95 transition-all
//               "
//             >
//               {createPollMutation.isPending ? "Creating..." : "Create Poll"}
//             </button>

//             <button
//               type="button"
//               onClick={() => navigate("/")}
//               className="
//                 px-7 py-3 rounded-xl
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
import { PlusCircle, X } from "lucide-react";

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
    <div className="min-h-full flex items-center justify-center px-4">

      <div
        className="
          w-full max-w-xl
          bg-white/5 backdrop-blur-2xl
          border border-white/10 rounded-3xl
          p-6 md:p-10
          animate-card-entry
          hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
          transition-all duration-500
        "
      >
        <h1 className="
          text-3xl md:text-4xl font-extrabold text-center
          bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
          bg-clip-text text-transparent
        ">
          Create New Poll
        </h1>

        <p className="text-center text-gray-300 mt-2 text-sm">
          Ask a question and let people vote!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* QUESTION */}
          <div className="animate-input-pop">
            <label className="font-semibold text-sm">Poll Question</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your question..."
              className="
                w-full mt-2 px-4 py-3 rounded-xl
                bg-white/10 border border-white/20
                focus:border-[#60A5FA]
                outline-none transition
              "
            />
          </div>

          {/* OPTIONS */}
          <div className="space-y-4 animate-input-pop">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-sm">
                Options (min 2)
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
                <PlusCircle size={16} /> Add
              </button>
            </div>

            {options.map((opt, i) => (
              <div key={i} className="flex gap-3">
                <input
                  value={opt}
                  onChange={(e) => updateOption(i, e.target.value)}
                  placeholder={`Option ${i + 1}`}
                  className="
                    flex-1 px-4 py-3 rounded-xl
                    bg-white/10 border border-white/20
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
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={createPollMutation.isPending}
              className="
                flex-1 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
                hover:from-[#A855F7] hover:to-[#3B82F6]
                active:scale-95 transition
              "
            >
              {createPollMutation.isPending ? "Creating..." : "Create Poll"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                px-6 py-3 rounded-xl
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

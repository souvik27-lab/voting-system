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
//     <div className="relative flex justify-center pt-20 pb-32">

//       {/* FLOATING GLOW PARTICLES */}
//       <div className="absolute -z-10 inset-0 overflow-hidden">
//         <div className="animate-pulse bg-[#3B82F6]/20 w-40 h-40 rounded-full blur-3xl absolute top-10 left-32"></div>
//         <div className="animate-pulse bg-[#A855F7]/20 w-52 h-52 rounded-full blur-3xl absolute bottom-10 right-32"></div>
//       </div>

//       {/* MAIN CONTAINER WITH ANIMATION */}
//       <div
//         className="
//           w-[850px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl 
//           shadow-[0_0_30px_rgba(0,0,0,0.4)] p-12
//           opacity-0 translate-y-10
//           animate-[fadeIn_0.9s_ease-out_forwards]
//           hover:shadow-[0_0_45px_rgba(96,165,250,0.45)]
//           hover:border-[#60A5FA]/40
//           transition-all duration-500
//         "
//       >
//         {/* TITLE */}
//         <h1
//           className="
//             text-5xl font-extrabold text-center
//             bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
//             bg-clip-text text-transparent
//             drop-shadow-xl
//           "
//         >
//           Create New Poll
//         </h1>

//         <p className="text-center text-gray-300 mt-2">
//           Ask a question and let people vote!
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-12 space-y-8">

//           {/* QUESTION INPUT */}
//           <div>
//             <label className="text-white font-semibold">Poll Question</label>
//             <input
//               type="text"
//               placeholder="Enter your question..."
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="
//                 w-full mt-2 px-5 py-4 rounded-xl bg-white/10 text-white
//                 border border-white/20 focus:border-[#60A5FA]
//                 placeholder-gray-400 outline-none transition-all
//               "
//             />
//           </div>

//           {/* OPTIONS */}
//           <div>
//             <div className="flex items-center justify-between">
//               <label className="text-white font-semibold">
//                 Options (minimum 2)
//               </label>

//               {/* ADD OPTION BUTTON */}
//               <button
//                 type="button"
//                 onClick={addOption}
//                 className="
//                   flex items-center gap-2 px-4 py-2 rounded-lg text-sm 
//                   bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white
//                   shadow hover:opacity-90 transition
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
//                     onChange={(e) => updateOption(index, e.target.value)}
//                     className="
//                       flex-1 px-5 py-4 rounded-xl bg-white/10 text-white
//                       border border-white/20 focus:border-[#60A5FA]
//                       placeholder-gray-400 outline-none transition-all
//                     "
//                   />

//                   {options.length > 2 && (
//                     <button
//   type="button"
//   onClick={() => removeOption(index)}
//   aria-label="Remove option"
//   className="
//     px-3 py-2 rounded-xl bg-red-500/20 text-red-300
//     border border-red-500/40 hover:bg-red-500/30
//     transition
//   "
// >
//   <X className="w-5 h-5" />
// </button>

//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex gap-4 pt-4">

//             {/* CREATE POLL BUTTON WITH RIPPLE EFFECT */}
//             <button
//               type="submit"
//               disabled={createPollMutation.isPending}
//               className="
//                 flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold
//                 bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
//                 text-white text-lg shadow-xl relative overflow-hidden
//                 hover:opacity-90 transition

//                 before:absolute before:inset-0 before:bg-white/20 before:rounded-xl
//                 before:scale-0 hover:before:scale-100 
//                 before:transition-transform before:duration-500
//               "
//             >
//               {createPollMutation.isPending ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Creating...
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle className="w-5 h-5" />
//                   Create Poll
//                 </>
//               )}
//             </button>

//             {/* CANCEL BUTTON */}
//             <button
//               type="button"
//               onClick={() => navigate("/")}
//               className="
//                 px-8 py-4 rounded-xl font-semibold text-white
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

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const filteredOptions = options.filter((opt) => opt.trim() !== "");
    if (!title.trim()) {
      alert("Please enter a question");
      return;
    }
    if (filteredOptions.length < 2) {
      alert("Please provide at least 2 options");
      return;
    }

    try {
      const poll = await createPollMutation.mutateAsync({
        title: title.trim(),
        description: "",
        options: filteredOptions,
      });

      navigate(`/poll/${poll.id}`);
    } catch (error) {
      console.error("Failed to create poll:", error);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen px-6">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-32 w-40 h-40 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-32 w-52 h-52 bg-[#A855F7]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* MAIN CARD */}
      <div
        className="
          w-full max-w-[860px]
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          rounded-3xl p-12
          shadow-[0_0_35px_rgba(0,0,0,0.45)]
          animate-fadeInSlow
        "
      >
        {/* TITLE */}
        <h1
          className="
            text-5xl font-extrabold text-center
            bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#3B82F6]
            bg-clip-text text-transparent
          "
        >
          Create New Poll
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Ask a question and let people vote!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">

          {/* QUESTION */}
          <div>
            <label className="text-white font-semibold">
              Poll Question
            </label>
            <input
              type="text"
              placeholder="Enter your question..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full mt-2 px-5 py-4 rounded-xl
                bg-white/10 text-white
                border border-white/20
                focus:border-[#60A5FA]
                placeholder-gray-400
                outline-none transition-all
              "
            />
          </div>

          {/* OPTIONS */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-white font-semibold">
                Options (minimum 2)
              </label>

              <button
                type="button"
                onClick={addOption}
                className="
                  flex items-center gap-2 px-4 py-2
                  rounded-lg text-sm
                  bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                  text-white shadow
                  hover:opacity-90 transition
                "
              >
                <PlusCircle className="w-4 h-4" />
                Add Option
              </button>
            </div>

            <div className="space-y-4 mt-4">
              {options.map((option, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) =>
                      updateOption(index, e.target.value)
                    }
                    className="
                      flex-1 px-5 py-4 rounded-xl
                      bg-white/10 text-white
                      border border-white/20
                      focus:border-[#60A5FA]
                      placeholder-gray-400
                      outline-none transition-all
                    "
                  />

                  {options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      aria-label="Remove option"
                      className="
                        px-3 py-2 rounded-xl
                        bg-red-500/20 text-red-300
                        border border-red-500/40
                        hover:bg-red-500/30
                        transition
                      "
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={createPollMutation.isPending}
              className="
                flex-1 flex items-center justify-center gap-3
                py-4 rounded-xl font-bold text-lg
                bg-gradient-to-r from-[#3B82F6] to-[#A855F7]
                text-white shadow-xl
                hover:opacity-90 transition
              "
            >
              {createPollMutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Create Poll
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                px-8 py-4 rounded-xl font-semibold
                text-white bg-white/10
                border border-white/20
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

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatInterface from "./chatbot/ChatInterface";
import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";


const AiAssistant = () => {
  const [hasChatStarted, setHasChatStarted] = useState<boolean>(false);

  const handleStartChat = () => {
    setHasChatStarted(true);
  };

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        <SidebarNavigation />
        
        <section className={'col-span-4 row-span-2 bg-white/80 backdrop-blur-xl rounded-3xl h-full md:h-[95dvh] mt-4 p-4 sm:p-8 shadow-2xl shadow-purple-500/10 border border-white/50'}>
           <AnimatePresence>
              { hasChatStarted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.5 } }} exit={{ opacity: 0 }}>
                  <ChatInterface />
                </motion.div>
              )}
            </AnimatePresence>


            <AnimatePresence>
              { !hasChatStarted && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} exit={{ opacity: 0, y: 0 }} className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-2xl shadow-purple-500/10 border border-black/10 relative flex flex-col items-center justify-center min-h-[200px] mt-10 max-w-[600px] mx-auto">
                   <div className=" absolute -top-[35px] left-[calc(50%-35px)] size-[70px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                   <p className="text-center mt-[55px] font-inter text-lg">Hello, Nice to see you here! By pressing the "Start chat" button you agree to have your personal data processed as described in our Privacy Policy</p>
                   <button onClick={handleStartChat} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold  hover:scale-105 transition-all ease-in-out duration-200 mt-5 px-4 py-2 rounded w-full">Start chat</button>
                </motion.div>
              )}
            </AnimatePresence>

        </section>
     </main>
    </div>
  );
}
 
export default AiAssistant;
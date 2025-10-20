import { motion } from "framer-motion";

const ChatInputField = () => {
  return (
    <form className="flex items-center p-4 border-t border-gray-200 absolute bottom-0 left-0 right-0 bg-white    ">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 p-2 border border-gray-300 rounded-lg"
      />
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Send
      </motion.button>
    </form>
  );
};

export default ChatInputField;

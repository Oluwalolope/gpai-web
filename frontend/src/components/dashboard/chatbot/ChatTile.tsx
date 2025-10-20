import { motion } from "framer-motion";

type ChatTileProps = {
    message: string;
    messenger: "user" | "bot";
};

const ChatTile = ({ message, messenger }: ChatTileProps) => {
    return (
        <motion.li layout='position' animate={{opacity: [0, 1], y: [-5, 0], transition: { duration: 0.25}}} className={`p-4 border border-[#E3E3E3] inline-block rounded-lg max-w-[70%] ${messenger === "user" ? "place-self-end bg-blue-500" : ""}`}>
            <p className={`text-${messenger === "user" ? "white" : "gray-800"} font-inter font-normal`}>{message}</p>
        </motion.li>
    );
}
 
export default ChatTile;
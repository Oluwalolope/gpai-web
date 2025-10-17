type ChatTileProps = {
    message: string;
    messenger: "user" | "bot";
};

const ChatTile = ({ message, messenger }: ChatTileProps) => {
    return (
        <div className={`p-4 border border-[#E3E3E3] inline-block rounded-lg max-w-[70%] ${messenger === "user" ? "place-self-end bg-blue-500" : ""}`}>
            <p className={`text-${messenger === "user" ? "white" : "gray-800"} font-inter font-normal`}>{message}</p>
        </div>
    );
}
 
export default ChatTile;
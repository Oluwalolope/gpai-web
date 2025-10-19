import chatbotAvatar from '../../../assets/chatbot-icon.svg';
import ChatInputField from "./ChatInputField";
import ChatTile from "./ChatTile";

const ChatInterface = () => {

    return (
        <div className="p-4 rounded-lg relative h-dvh md:h-[90dvh]">
            <div className="mb-4 border-b pb-2 flex items-center gap-4 ">
                <div className="flex flex-col items-center border border-[#E3E3E3] rounded-full p-3 relative">
                    <img src={chatbotAvatar} alt="Chatbot Avatar" className="size-8" />
                    <div className="absolute size-3 bottom-1 right-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                </div>
                <div>
                    <h3 className="text-xl font-medium font-poppins text-dark-text flex items-center">Libby</h3>
                    <p className="text-gray-600 capitalize font-poppins">study assistant</p>
                </div>
            </div>

            {/* Chat messages */}
            <div className="flex flex-col overflow-y-auto h-[60dvh] gap-y-2">
                <ChatTile messenger="bot" message="Welcome to Libby, your study assistant! I was made with ❤️. Type down a question!" />
                <ChatTile messenger="user" message="What topics can you help me with?" />
                <ChatTile messenger="bot" message="I can help you with a variety of topics including study tips, time management, subject-specific questions, and more! Just let me know what you need assistance with." />
                <ChatTile messenger="user" message="Can you help me with CGPA forecasting?" />
                <ChatTile messenger="bot" message="Absolutely! I can help you understand how your current grades will impact your CGPA and provide insights on what you need to achieve your target CGPA. Just provide me with your current grades and target CGPA!" />
            </div>

            <ChatInputField />
        </div>
    );
}
 
export default ChatInterface;
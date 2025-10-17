const ChatInputField = () => {
    return (
        <form className="flex items-center p-4 border-t border-gray-200 absolute bottom-0 left-0 right-0 bg-white    ">
            <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button className="ml-2 bg-[#003DF5] hover:bg-[#002BB5] text-white px-4 py-2 rounded-lg">Send</button>
        </form>
    );
}
 
export default ChatInputField;
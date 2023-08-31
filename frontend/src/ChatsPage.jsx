import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "e01fa763-a684-4cc4-9d3a-03b5273f7bf5", 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100% "}} />
        </div>
    )
}

export default ChatsPage;
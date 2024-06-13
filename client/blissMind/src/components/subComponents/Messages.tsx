import { MessageType } from "../Chat"

const myself = "user123"; // temp variable

const Message = ({ message }: { message: MessageType }) => {
    return (
        <span className={` relative ${message.senderId == myself ? " self-end " : "self-start"}`}>
            {/* <span className={` z-[-1] absolute -bottom-3 h-4 w-4 bg-black ${message.senderId == myself? "right-0": "left-0"}`}></span> */}
            <p className={`${message.senderId == myself ? "bg-cyan-100" : " bg-cyan-50"}  p-1 px-2 z-10 rounded-lg`}> {message.text} </p>
        </span>
    )
}

export default Message;
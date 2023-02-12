type MessageType = {
  body: string;
}

const Message = (props: MessageType) => {
  return (
    <div>
      <li>
        <div>Title</div>
        <div>This is a message</div>
      </li>
    </div>
  )
}

export default Message

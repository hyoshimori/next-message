import React from 'react'
import { useState } from "react";
import useMessages from "@/hooks/useMessages";
import styles from "./SendMessageBox.module.css";

const SendMessageBox = () => {
  const [message, setMessage] = useState("");
  const { postMessage } = useMessages();

  const onclickSend = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      const requestMessage = {
        id: "test",
        body: message,
        channelId: "1",
        createdAt: new Date(),
      }

      postMessage(requestMessage);
      setMessage("");
    };

  return(
    <div className={styles.body}>
      <div className={styles.header}></div>
      <textarea className={styles["message__box"]} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={onclickSend}>Send</button>
    </div>
  )
}

export default SendMessageBox

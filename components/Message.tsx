import { AppContext } from "@/pages/_app";
import { useContext } from "react";
import styles from "./message.module.css"

type Props = {
  body: string;
}

const Message = (props: Props) => {
  const { myself } = useContext(AppContext);
  return (
    <>
      <li className={styles.body}>
        {props.body}
        <div className={styles.left}>
          <div className={styles["profile__image"]}>
            <img src={myself.profileImageUrl}></img>
          </div>
        </div>
        <div>
          <div className={styles.header}>
            <span>{myself.name}</span>
            <span>{new Date().toDateString()}</span>
          </div>
          {props.body}
        </div>
      </li>
    </>
  )
}

export default Message

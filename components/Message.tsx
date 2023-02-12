import styles from "./message.module.css"

type Props = {
  body: string;
}

const Message = (props: Props) => {
  return (
    <>
      <li className={styles.body}>
        {props.body}
        <div className={styles.left}>
          <div className={styles["profile__image"]}>
            <img></img>
          </div>
        </div>
        <div>
          <div className={styles.header}>
            {/* <spab>{props.username}</spab> */}
            <span>{new Date().toDateString()}</span>
          </div>
          {props.body}
        </div>
      </li>
    </>
  )
}

export default Message

import MessageTimeline from '@/components/MessageTimeline';
import styles from '@/pages/channels/channelPage.module.css'
import SendMessageBox from "@/components/SendMessageBox";


const ChannelPage = () => {
  const ms = [
  {
  id: "1",
  body: "Hello channel",
  channelId: "1",
  createdAt: new Date(),
  },
  {
  id: "2",
  body: "Hello next",
  channelId: "2",
  createdAt: new Date(),
  },
  {
  id: "1",
  body: "Hello channel",
  channelId: "1",
  createdAt: new Date(),
  },
];

  return(
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline messages={ms}></MessageTimeline>
      {/* <div>SendMessages</div> */}
      <SendMessageBox></SendMessageBox>
    </div>
  )
}

export default ChannelPage;

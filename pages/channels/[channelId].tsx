import MessageTimeline from '@/components/MessageTimeline';
import styles from '@/pages/channels/channelPage.module.css'

const ChannelPage = () => {
  return(
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline></MessageTimeline>
      <div>SendMessages</div>
    </div>
  )
}

export default ChannelPage;

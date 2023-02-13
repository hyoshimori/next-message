import MessageTimeline from '@/components/MessageTimeline';
import styles from '@/pages/channels/channelPage.module.css'
import SendMessageBox from "@/components/SendMessageBox";
import useMessages from "@/hooks/useMessages";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ChannelPage = () => {

  const { query } = useRouter();

  const {messages, fetchmessage} = useMessages();

  useEffect(() => {
    fetchmessage(query.channelId as string);
  }, [query.channelId as string])
  // ↑useEffect depend on query.channelId. So add this to the rendering process
  // ↑This allows rerendering when the channel is swiched
  return(
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline messages={messages}></MessageTimeline>
      {/* <div>SendMessages</div> */}
      <SendMessageBox></SendMessageBox>
    </div>
  )
}

export default ChannelPage;

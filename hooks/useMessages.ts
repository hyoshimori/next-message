import { useState } from 'react'
import { useAxios } from './useAxios'
import * as MessageType from '@/types/Message';

const useMessages = () => {
  const { axios } = useAxios();
  const [messages, setMessages] = useState<MessageType.Message[]>([]);

  const fetchmessage = async (channelId: string) => {
    const response = await axios.get<MessageType.Message[]>("messages.json");
    // remove null
    const data = Object.values(response.data).filter((v) => v);
    // See if the message id is same as the id from the props
    const messagesForChennel = data.filter(m => {
      return m.channelId === channelId
    })
    setMessages(messagesForChennel);
  };

  const postMessage = async (m: MessageType.Message) => {
    try{
      const response = await axios.post<MessageType.Message>(
        "messages.json",
        JSON.stringify({...m})
      )
    } catch (e) {
      console.log('Error', e);
      return;
    }
    setMessages((prev) => {
      prev.push(m);
      return prev;
    })
  }

  return { fetchmessage, messages, postMessage}
}

export default useMessages

import React from 'react'
import { useAxios } from './useAxios'
import { useEffect, useState } from "react";
import { Channel } from "@/types/channel"

const useChannels = () => {
  const { axios } = useAxios()
  // this is same as const [ channels, setChannels ] = useState([] as Channels[]);
  const [ channels, setChannels ] = useState<Channel[]>([])
  useEffect(() => {
    const fetch = async() => {
      // Get data from fire base with axios
      const data = await axios.get("/channels.json")
      setChannels(data.data.filter((v: Channel) => v))
      // console.log("response: ", data.data[1].createdAt)
    }

    fetch();
  }, []);

  return { channels }
}

export default useChannels

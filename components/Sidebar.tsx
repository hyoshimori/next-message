import React from 'react'
import styles from "./SideBar.module.css"
import SidebarHeader from './SidebarHeader'
import Link from 'next/link';
import { useAxios } from '@/hooks/useAxios';
import { useEffect } from 'react';
import useChannels from '@/hooks/useChannels';

const Sidebar = () => {

  // get chaneels data from useChannels component
  const { channels } = useChannels();
  // const channels =[
  //   {id: 1, title: "channel 1"},
  //   {id: 2, title: "channel 2"}
  // ]

  // // api inside of useEffect
  // const { axios } = useAxios();
  // useEffect(() => {
  //   const fetch = async() => {
  //     const data = await axios.get("/channels.json")
  //     console.log("response: ", data.data[1].createdAt)
  //   }

  //   fetch();
  // }, []);

  return (
    <div className={styles.body}>
      <SidebarHeader title={"NextJS Slack"}/>
      <ul>
        {channels.map((channel)=> {
          return(
            <>
              <Link href={`/channels/${channel.id}`}>
                <span>
                  <h2 className={styles.channel__title}>{channel.id}: {channel.title}</h2>
                </span>
              </Link>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar

import React from 'react'
import styles from "./SideBar.module.css"
import SidebarHeader from './SidebarHeader'
import Link from 'next/link';

const Sidebar = () => {

  const channels =[
    {id: 1, title: "channel 1"},
    {id: 2, title: "channel 2"}
  ]

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

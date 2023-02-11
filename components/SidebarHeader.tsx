import React from 'react'
import styles from './SidebarHeader'

type Props = {
  title: string;
}

const SidebarHeader = (props: Props) => {
  return (
    <div className='style.title'>
      {props.title}
    </div>
  )
}

export default SidebarHeader

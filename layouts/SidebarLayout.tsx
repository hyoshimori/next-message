import {ReactNode} from 'react';

export default function Layout({children}: {children: ReactNode}){
  return(
    <div style={{display: "flex"}}>
      {/* <Sidebar></Sidebar> */}
      {children}
    </div>
  )
}

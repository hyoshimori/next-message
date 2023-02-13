// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../layouts/SidebarLayout";
import { createContext, useState } from 'react';
import { User } from "@/types/User"

export const AppContext = createContext(
  {} as {
    myself: User;
  }
)

export default function App({ Component, pageProps }: AppProps) {
  const [myself, setMe] = useState({
    id: '1',
    name: 'Hiro',
    profile: 'Hi :)',
    profileImageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80'
  });

  return(
    <Layout>
      <AppContext.Provider value={{ myself }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
    )
}

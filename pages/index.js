// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getProviders, getSession, useSession } from 'next-auth/react'

import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import Login from '../components/Login'
import Widgets from '../components/Widgets'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Home = ({ trendingResults, followResults, providers }) => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  if (!session) return <Login providers={providers} />

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mx-auto flex min-h-screen max-w-[1500px] bg-black">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {console.log(session)}

        {/* Modal */}
        {isOpen && <Modal />}

        {/* Widgets */}
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}

export default Home

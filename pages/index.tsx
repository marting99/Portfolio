import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Garcia</title>
      </Head>
      <main >
        <div>
          <p>home</p>
        </div>
      </main>
    </>
  )
}

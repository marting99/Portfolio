import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Playfair Display', serif;
    // background-color: #686D77;
    background-color:#68776B;
    margin: 0;
    color: white;
    padding: 0;
  }
`
export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Garcia Dev</title>
      </Head>
      <main >
      <GlobalStyles />
        <div>
          <h1>Martin Garcia</h1>
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import imgMe from '../public/me.jpg'
import { createGlobalStyle } from 'styled-components'
import {Nav} from '../components/nav/nav'
import { About } from '@/components/about/about'
import React, { useRef, useState } from 'react'
import Hero from '../components/header/header'
import { Card } from '@/components/card/card'
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Graphik', sans-serif;
    margin: 0;
    color: white;
    padding: 0;
  }
`
export default function Home() {

  const services = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reviews = useRef<HTMLDivElement>(null);
  const [isVisible,setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (e:React.MouseEvent<Element,MouseEvent>) => {
    setOpen(!open)
    const target = e.target as Element;
    if(target.innerHTML=='Projects')services.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='About')about.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='Reviews')reviews.current?.scrollIntoView({behavior: 'smooth'});

  };
  return (
    <>
      <Head>
        <title>Martin Garcia Dev</title>
        <link rel="icon" href={imgMe.src} />
      </Head>
      <main >
      <GlobalStyles />
      <Nav open={open} setOpen={()=>setOpen(!open)} pageName='Home' handleClick={handleClick}/>
      <Hero/>
      <Card imageSrc={imgMe.src}/>
      <About about={about} imgAlt={`image of me Martin Garcia`}></About>


      </main>
    </>
  )
}

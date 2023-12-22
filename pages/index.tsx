import Head from 'next/head';
import imgMe from '../public/me.jpg';
import prod from '../public/prod1.png'
import { createGlobalStyle } from 'styled-components';
import {Nav} from '../components/nav/nav';
import { About } from '@/components/about/about';
import { Project } from '@/components/projects/project';
import React, { useRef, useState,useEffect } from 'react';
import ProdPhone from 'public/prod1-phone.png';
import CatGore from 'public/catgorehair.png';
import CatGorePhone from 'public/catgorephone.png';
import Contact from '@/components/contact/contact';
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Graphik', sans-serif;
    margin: 0;
    padding: 0;
    max-width:100%;
    overflow-x:hidden;
    height:100%;
  }
`
export default function Home() {
  
  const project = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const reviews = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);


  const handleClick = (e:React.MouseEvent<Element,MouseEvent>) => {
    setOpen(!open)
    const target = e.target as Element;
    if(target.innerHTML=='Projects')project.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='About')about.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='Reviews')reviews.current?.scrollIntoView({behavior: 'smooth'});

  };
  
  return (
    <>
      <Head>
        <title>Martín Garcia Dev</title>
        <link rel="icon" href={imgMe.src} />
      </Head>
      <main >
      <GlobalStyles />
      <Nav open={open} setOpen={()=>setOpen(!open)} pageName='Home' handleClick={handleClick}/>
          <Project 
            projectName="Francisco Zermeño" 
            imageSrc={prod.src}
            mobileImg={ProdPhone.src} 
            role={'contract'}
            projectDesc="I worked with Mr.Zermeño to redesign and develop his website, making it mobile responsive, userfriendly, and including a custom blog built with a headless CMS."
            project={project}
            projectLink="https://zermeno.vercel.app/"
          />
          <Project 
            projectName="Cat Gore Hair" 
            imageSrc={CatGore.src}
            mobileImg={CatGorePhone.src} 
            role={'contract'} 
            projectLink="https://catgorehair.com/"
            projectDesc="I created a clean and user-friendly website for a hairstylist to showcase her services, customer reviews, and provide a booking form for clients. The website features a modern design with a focus on simplicity and ease of use for her clients."
          />
          
        <About about={about}></About>
        <Contact/>
      </main>
    </>
  )
}


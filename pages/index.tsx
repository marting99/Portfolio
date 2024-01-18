import Head from 'next/head';
import imgMe from '../public/me.webp';
import prod from '../public/prod1.webp';
import { createGlobalStyle } from 'styled-components';
import {Nav} from '../components/nav/nav';
import { About } from '@/components/about/about';
import { Project } from '@/components/projects/project';
import React, { useRef, useState,useEffect } from 'react';
import ProdPhone from 'public/prod1-phone.webp';
import CatGore from 'public/catgorehair.webp';
import CatGorePhone from 'public/catgorephone.webp';
import Smoakland from 'public/smoakland.webp';
import smkPhone from 'public/smoakland-phone.webp';
import bombastic from 'public/bombasticReading.webp';
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
            date={'(May 2022 - June 2022)'} 
            projectDesc="I worked with Mr.Zermeño to redesign and develop his website, making it mobile responsive, userfriendly, and including a custom blog built with a headless CMS."
            project={project}
            projectLink="https://xn--zermeo-0wa.info"
          />
          <Project 
            projectName="Cat Gore Hair" 
            imageSrc={CatGore.src}
            mobileImg={CatGorePhone.src} 
            role={'contract'}
            date={'(July 2022 - August 2022)'}  
            projectLink="https://catgorehair.com/"
            projectDesc="I created a clean and user-friendly website for a hairstylist to showcase her services, customer reviews, and provide a booking form for clients. The website features a modern design with a focus on simplicity and ease of use for her clients."
          />
          <Project 
            projectName="Smoakland" 
            imageSrc={Smoakland.src}
            mobileImg={smkPhone.src} 
            role={'Full Stack Developer '}
            date={'(Jan 2021 - May 2022)'} 
            projectLink="https://www.smoakland.com/dispensary-weed-delivery"
            projectDesc=" I collaborated closely with the marketing team to create a template for blogs and locations we deliver to using React and a headless CMS. This approach helped our marketing team to create and publish blogs easily."
          />
          <Project 
            projectName="Bombastic Reading" 
            imageSrc={bombastic.src} 
            role={'Chrome extension'}
            projectLink="https://chromewebstore.google.com/detail/bombastic-reading/mlpgmjfnkcndmkeoobelnbgnabfpggek?pli=1"
            projectDesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et impedit reprehenderit sit dolorem totam optio commodi velit corporis! Vitae vel quasi fuga iusto quis aliquid, libero iure veritatis saepe. Neque."
          />
          
        <About 
        about={about}
        img = {imgMe.src}
        imgAlt = "A picture of myself sitting down with a hawaiin shirt" 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et impedit reprehenderit sit dolorem totam optio commodi velit corporis! Vitae vel quasi fuga iusto quis aliquid, libero iure veritatis saepe. Neque."/>
        <Contact/>
      </main>
    </>
  )
}


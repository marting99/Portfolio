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
import {Contact} from '@/components/contact/contact';
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Graphik', sans-serif;
    margin: 0;
    padding: 0;
    max-width:100%;
    // background:black;
    overflow-x:hidden;
    height:100%;
  }
`
export default function Home() {
  
  const project = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact= useRef<HTMLDivElement>(null);
  const aboutDescription = "Hello! My name is Martin Garcia. I graduated from Cal State East Bay with a bachelor's degree in computer science. I enjoy building software that solves real-world problems. I am currently working on a passion project where users can track, log, and gain interesting insights into their car maintenance expenses. The current tech stack for this passion project is: React, Next.js, and Supabase. When I'm not grinding Leetcode or going down the rabbit hole of whether A.I. will replace junior software engineers. You can find me at the gym, playing chess, or working on my 1993 Mazda Miata. Below you can find some of my projects as well as my freelance work. Feel free to reach out! "
  const [open, setOpen] = useState(false);
  const [mobile,isMobile] = useState(false);


  const handleClick = (e:React.MouseEvent<Element,MouseEvent>) => {
    const target = e.target as Element;
    if(target.innerHTML=='Projects')project.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='About')about.current?.scrollIntoView({behavior: 'smooth'});
    if(target.innerHTML=='Contact')contact.current?.scrollIntoView({behavior: 'smooth'});

  };
  
  return (
    <>
      <Head>
        <title>Martín Garcia Dev</title>
        <link rel="icon" href={imgMe.src} />
      </Head>
      <main >
      <GlobalStyles />
      <Nav open={open} setOpen={()=>setOpen(!open)} pageName='Home' handleClick={handleClick} />
        <About 
        about={about}
        img = {imgMe.src}
        imgAlt = "A picture of myself sitting down with a hawaiin shirt" 
        description={aboutDescription}/>
          <Project
            projectName='Smoakland'
            imageSrc={Smoakland.src}
            mobileImg={smkPhone.src}
            role={"Full Stack Developer"}
            date='Jan 2021 - May 2022'
            projectDesc='I collaborated closely with the marketing team to create templates showcasing the delivery locations available to our users. I integrated these templates with a Content Management System (CMS) to streamline the content generation process for our marketing team, enabling them to produce content efficiently. The templates were designed to comply with SEO best practices, enhancing our website &apos;s visibility in search engine results.'
            project={project}
            projectLink='https://www.smoakland.com/dispensary-weed-delivery'
            /> 
          <Project 
            projectName="Francisco Zermeño" 
            imageSrc={prod.src}
            mobileImg={ProdPhone.src} 
            role={'contract'}
            date={'(May 2022 - June 2022)'} 
            projectDesc="I worked with Mr.Zermeño to redesign and develop his website, making it mobile responsive, userfriendly, and including a custom blog built with a headless CMS."
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
            projectName="Bombastic Reading" 
            imageSrc={bombastic.src} 
            role={'Chrome extension'}
            projectLink="https://chromewebstore.google.com/detail/bombastic-reading/mlpgmjfnkcndmkeoobelnbgnabfpggek?pli=1"
            projectDesc="Developed a Chrome extension that enhances the user's reading speed, particularly beneficial for quickly skimming through articles or blogs. The extension highlights a portion of the text by making it bold and increasing the font size. Implementation involved the use of a hashmap for quick reverting back to the original text."
          />
          <Contact contact={contact}/>
      </main>
    </>
  )
}


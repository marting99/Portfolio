import Head from 'next/head';
import imgMe from '../public/me.webp';
import prod from '../public/prod1.webp'
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
      {/* <About 
        about={about}
        img = {imgMe.src}
        imgAlt = "A picture of myself sitting down with a hawaiin shirt" 
        description="Hello, I&apos;m Martin, a forward-thinking tech enthusiast currently pursuing a bachelor&apos;s degree at Cal State University East Bay. My technology journey took an exciting turn when I developed a Google Chrome extension designed to change how users consume online content. This project not only showcased my creativity but also required navigating the intricacies of the Google Chrome store, a challenge that culminated in approval from the Google team. I thrive on crafting innovative solutions, pushing boundaries, and delivering meaningful experiences for users.As I continue my education and professional growth, I&apos;m committed to combining creativity and logic in the ever-evolving landscape of technology."/> */}
          <Project 
            projectName="Francisco Zermeño" 
            imageSrc={prod.src}
            mobileImg={ProdPhone.src} 
            role={'contract'}
            projectDesc="I worked with Mr.Zermeño to redesign and develop his website, making it mobile responsive, userfriendly, and including a custom blog built with a headless CMS."
            project={project}
            projectLink="https://xn--zermeo-0wa.info"
          />
          <Project 
            projectName="Cat Gore Hair" 
            imageSrc={CatGore.src}
            mobileImg={CatGorePhone.src} 
            role={'contract'} 
            projectLink="https://catgorehair.com/"
            projectDesc="I created a clean and user-friendly website for a hairstylist to showcase her services, customer reviews, and provide a booking form for clients. The website features a modern design with a focus on simplicity and ease of use for her clients."
          />
          <Project 
            projectName="Smoakland" 
            imageSrc={Smoakland.src}
            mobileImg={smkPhone.src} 
            role={'Full Stack Developer (Jan 2021 - May 2022)'} 
            projectLink="https://www.smoakland.com/news"
            projectDesc=" I collaborated closely with the marketing team to create a blog using React and a headless CMS. This approach helped our marketing team to create and publish blogs easily. By implementing this solution, we not only improved our website&apos;s SEO performance but also made it easier for non-technical employees to create unique blog content without my assistance."
          />
          
        <About 
        about={about}
        img = {imgMe.src}
        imgAlt = "A picture of myself sitting down with a hawaiin shirt" 
        description="Hello, I&apos;m Martin, a forward-thinking tech enthusiast currently pursuing a bachelor&apos;s degree at Cal State University East Bay. My technology journey took an exciting turn when I developed a Google Chrome extension designed to change how users consume online content. This project not only showcased my creativity but also required navigating the intricacies of the Google Chrome store, a challenge that culminated in approval from the Google team. I thrive on crafting innovative solutions, pushing boundaries, and delivering meaningful experiences for users.As I continue my education and professional growth, I&apos;m committed to combining creativity and logic in the ever-evolving landscape of technology."/>
        <Contact/>
      </main>
    </>
  )
}


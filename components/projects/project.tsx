import React, {RefObject,useRef, useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Iphone from '../../public/iphone.png';
import {ProjectWrapper} from './project-style';

type ProjectProps = {
    imageSrc:string;
    imageAlt?:string;
    projectName:string;
    role:string;
    date?:string;
    projectDesc:string;
    mobileImg?:string;
    projectLink:string;
    project?: RefObject<HTMLDivElement>|null;
    containerRef?: RefObject<HTMLDivElement>|null;

}

export const Project:React.FC<ProjectProps>=({imageSrc,imageAlt,projectName,role,date,projectDesc,mobileImg,project,projectLink})=>{
    const [isVisible,setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const callbackFunction: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      };
    
        useEffect(()=>{
        const observer =  new IntersectionObserver(callbackFunction)
        console.log(observer)
        console.log(containerRef.current)
        console.log(isVisible)
        if(containerRef.current){
          observer.observe(containerRef?.current)
          console.log(containerRef?.current)
        }
        // if we want to have it always transitioning if the div is in view then we remove observer.disconnect
        // we disconnect to stop the api calls
        if(isVisible) observer.disconnect()
        return ()=>{
            if(containerRef.current) observer.unobserve(containerRef?.current)
        }
        
      },[isVisible])
    return (
        <>
            <ProjectWrapper ref={project} isVisible={isVisible}>
                <div className="left" ref={containerRef} >
                    <div className="subtitle" >
                        <h3>PROJECT</h3>
                    </div>
                    <div className="title">
                        <h1>{projectName}</h1>
                        <h3>{role}</h3>
                        <h3>{date}</h3>
                    </div>
                    <div className="text">
                        {projectDesc}
                    </div>
                </div>
                

                    <div className="right">
                        
                            <div className="desktop">
                            <Link href={`${projectLink}`} passHref target={'_blank'}>
                                <div className="deskImg">
                                    <Image src={imageSrc} layout="fill" className="nextImg" alt={`${imageAlt}`} blurDataURL={imageSrc}></Image>
                                </div>
                                </Link>
                            </div>
                        
                        {mobileImg && <div className="phone">
                            <div className="phoneImg">
                                <Image src={Iphone.src} layout="fill" className="i-phone" alt={`${imageAlt}`} blurDataURL={Iphone.src}></Image>
                            </div>
                            <div className="prodImg">
                                <Image src={mobileImg} layout="fill" className="prod-phone" alt={`${imageAlt}`} blurDataURL={Iphone.src}></Image>

                            </div>
                        </div>}
                    </div>
                
            </ProjectWrapper>
        </>
    )
}
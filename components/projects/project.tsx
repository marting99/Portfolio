import React, {RefObject} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Iphone from '../../public/iphone.png';
import {ProjectWrapper} from './project-style';

type ProjectProps = {
    imageSrc:string;
    imageAlt?:string;
    projectName:string;
    role:string;
    projectDesc:string;
    mobileImg:string;
    project?: RefObject<HTMLDivElement>|null;

}

export const Project:React.FC<ProjectProps>=({imageSrc,imageAlt,projectName,role,projectDesc,mobileImg,project})=>{
    return (
        <>
            <ProjectWrapper ref={project}>
                <div className="left">
                    <div className="subtitle">
                        <h3>PROJECT</h3>
                    </div>
                    <div className="title">
                        <h1>{projectName}</h1>
                        <h3>{role}</h3>
                    </div>
                    <div className="text">
                        {projectDesc}
                    </div>
                </div>
                <div className="right">
                    <div className="desktop">
                        <div className="deskImg">
                            <Image src={imageSrc} layout="fill" className="nextImg" alt={`${imageAlt}`} blurDataURL={imageSrc}></Image>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="phoneImg">
                            <Image src={Iphone.src} layout="fill" className="i-phone" alt={`${imageAlt}`} blurDataURL={Iphone.src}></Image>
                        </div>
                        <div className="prodImg">
                            <Image src={mobileImg} layout="fill" className="prod-phone" alt={`${imageAlt}`} blurDataURL={Iphone.src}></Image>

                        </div>
                    </div>
                </div>
            </ProjectWrapper>
        </>
    )
}
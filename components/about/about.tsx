import React,{RefObject} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import imgMe from '../../public/me.jpg'
import {Card} from 'components/card/card'
import { CardWrapper } from '../card/card-style';

interface IDivPosition {
    about: RefObject<HTMLDivElement>|null;
}

const AboutWrapper = styled.div`
width:100%;
color:white;
display:flex;
justify-content:center;
align-items:center;
// background-color:#5c695f;
.content{
    width:100%;
    display:flex;
flex-direction:column;

    justify-content:space-around;
}
.top{
    margin-top:36px;
}
.top h2{
    font-size:50px;
    margin:10px;
    color:black;
    text-align:center;
}

`;

export const About:React.FC<IDivPosition>=({about})=>{

    return(
        <>
        <AboutWrapper ref={about}>
            <div className="content">
                <div className="top">
                    <h2>About Me</h2>
                </div>
                <div className="right">
                    <Card 
                    imageSrc={imgMe.src} 
                    imageAlt={`picture of me smiling`} 
                    name={`Martín`} 
                    jobTitle={'Junior Developer'} 
                    skills={['HTML & CSS', 'Javascript','React', 'Typescript','Python', 'GraphQL', 'Firebase']} 
                    bulletPoints={['I have a proven track record of successfully completing web development projects, showcasing my dedication and ability to deliver results.',
                    'I possess a versatile skill set in various programming languages and frameworks that allows me to develop visually appealing and user-friendly websites and applications.',
                    'With a passion for problem-solving, I provide innovative solutions that meet the unique needs of your business and your customers.']
                }/>
                </div>

            </div>
            
            
        </AboutWrapper>
        </>
    )
}
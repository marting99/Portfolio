import React,{RefObject} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import imgMe from '../../public/me.jpg'
import { CardWrapper } from '../card/card-style';

interface IDivPosition {
    about: RefObject<HTMLDivElement>|null;
}

const AboutWrapper = styled.div`
display:flex;
justify-content:space-between;
margin:0 50px;
padding: 100px 0px;
flex-direction:column;
padding: 50px 0px;
margin: 0px 50px;

.content{
    width:100%;
    display:flex;
    justify-content:space-around;
    padding:50px 0px;
}
.title{
    padding-left:50px;
}
 h2{
    font-size:50px;
    margin:10px;
    color:black;
}
  .image{
    width:375px;
    height:375px;
    border:2px solid #202E2C;
    z-index:1;
    overflow:hidden;
    position:relative;
    border-radius:12px;
  }
  .nextImg{
    object-fit:cover;
  }
  .left{
    width:45%;
    padding-left:50px;
  }
  .right{
    width:55%;
    padding: 0px 70px;
    color:#333;
    font-size:18px;
    line-height:40px;
  }
  .right p {
      margin:0px;
  }

`;

export const About:React.FC<IDivPosition>=({about})=>{

    return(
        <>
        <AboutWrapper ref={about}>
            <div className="content">
                <div className="left">
                
                <div >
                    <div className='image'>
                        <Image src={imgMe.src} layout="fill" className="nextImg" alt={`A picture of myself sitting down with a hawaiin shirt`} blurDataURL={imgMe.src}/>
                    </div>
                </div>
                </div>
                <div className="right">
                    <p>Hello, I&apos;m Martin, a forward-thinking tech enthusiast currently pursuing a bachelor&apos;s degree at Cal State University East Bay. My technology journey took an exciting turn when I developed a Google Chrome extension designed to change how users consume online content. This project not only showcased my creativity but also required navigating the intricacies of the Google Chrome store, a challenge that culminated in approval from the Google team. I thrive on crafting innovative solutions, pushing boundaries, and delivering meaningful experiences for users.As I continue my education and professional growth, I&apos;m committed to combining creativity and logic in the ever-evolving landscape of technology.</p>
                </div>

            </div>
            
            
        </AboutWrapper>
        </>
    )
}
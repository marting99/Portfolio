import React, {RefObject,useState} from 'react'
import { Main,LeftText,LeftText2,BottomText,RightImage } from './header-style';
import Link from 'next/link';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import hero from '/public/hero.svg';
import Image from 'next/image';
export default function Hero(){
    const [isHovering, setIsHovering] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
      }
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      }
    
      const handleClick = () => {
        navigator.clipboard.writeText('martingarcia9931@gmail.com');
        setIsCopied(!isCopied);
      }
    return (
        <>
            <Main>
                <div className="content">
                    <div className='text'>
                        <h1><LeftText>Welcome! My eagerness to learn and dedication to staying current with industry trends and tools are evident in my work.</LeftText><LeftText2> With me on your team, you can be confident that your project will receive the attention and expertise it deserves.</LeftText2></h1>
                    </div>
                    <div className="contact">
                        <BottomText>
                            <div className='email' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                                <span>{isCopied ? 'Email Copied' : (isHovering ? 'Copy Email?' : 'Get in Touch')}</span>
                            </div>
                            <div className="other-contact">
                                <div className="github">
                                    <Link href="https://github.com/marting99" target="_blank" passHref>
                                        <AiFillGithub style={{color:'white'}}/>
                                    </Link>
                                </div>
                                <div className="linked-in">
                                    <Link href="https://www.linkedin.com/in/martin-garcia-92a804202/" target={"_blank"} passHref>
                                        <AiFillLinkedin style={{color:'white'}}/>
                                    </Link>
                                </div>
                            </div>
                        </BottomText>
                    </div>
                </div>
                <RightImage>
                    <div className="hero-image">
                        <Image 
                        src={hero.src} layout="fill" className="nextImg" alt={`background image for my hero section`} blurDataURL={hero.src}/>
                    </div>
                </RightImage>
                
            </Main>
        </>
    )
}


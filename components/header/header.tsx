import React, {RefObject,useState} from 'react'
import { Main,BottomText } from './header-style';
import Link from 'next/link';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
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
                    <BottomText>
                        <div className='email' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                            <span>{isCopied ? 'Email Copied' : (isHovering ? 'Copy Email?' : 'Get in Touch')}</span>
                        </div>
                        <div className="other-contact">
                            <div className="github">
                                <Link href="https://github.com/marting99" target="_blank" passHref>
                                    <AiFillGithub style={{color:'black'}}/>
                                </Link>
                            </div>
                            <div className="linked-in">
                                <Link href="https://www.linkedin.com/in/martin-garcia-92a804202/" target={"_blank"} passHref>
                                    <AiFillLinkedin style={{color:'black'}}/>
                                </Link>
                            </div>
                        </div>
                    </BottomText>
            </Main>
        </>
    )
}


import React from 'react'
import { Main} from './contact-style';
import Link from 'next/link';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
export default function Contact(){
    return (
        <>
            <Main>
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
            </Main>
        </>
    )
}


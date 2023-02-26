import React, {RefObject} from 'react'
import { Main } from './header-style'
interface Props {
    children: React.ReactNode;
}
export default function Hero(props:Props){
    const {children} = props;
    return (
        <>
            <Main>
                {children}
                <div className="content">
                    <div className='text'>
                        <h1>Hello, my name is Martín! My eagerness to learn and dedication to staying current with industry trends and tools are evident in my work. With me on your team, you can be confident that your project will receive the attention and expertise it deserves.</h1>
                    </div>
                    <div className='email'>
                        <span>Get in touch</span>
                    </div>
                </div>
                
            </Main>
        </>
    )
}


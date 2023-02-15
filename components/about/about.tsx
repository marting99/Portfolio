import React,{RefObject} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import imgMe from '../../public/me.jpg'

interface IDivPosition {
    about: RefObject<HTMLDivElement>|null;
    imgAlt:string;
}

const Overlay = styled.div`
margin-top:100%;
width:100%;
color:white;
background-color:#5c695f;
display:flex;
justify-content:center;
.left{
    width:42%;
    height:80vh;
}
.img{
    width:100%;
    height:100%;
    position:relative;
}
.text{
    background-color:#5c695f;
    width:58%;
    
}
`;

export const About:React.FC<IDivPosition>=({imgAlt,about})=>{

    return(
        <>
        <Overlay ref={about}>

                <div className='left'>
                    <div className='img'>
                        <Image
                            src={imgMe.src}
                            layout="fill"
                            objectFit='cover'
                            blurDataURL={imgMe.src}
                            placeholder="blur"
                            alt={imgAlt}
                        />
                    </div>
                </div>
                <div className='text'>
                    <div className='right'>
                        <div className='title-content' >
                            <div  className='big-title'>
                                <h3>About Me</h3>
                            </div>
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad at dolores itaque laboriosam sed laudantium doloremque porro magnam, eius cupiditate fugiat veniam, sit, in provident alias. Necessitatibus, corporis neque.</p>
                        </div>
                    </div>
                </div>
        </Overlay>
        </>
    )
}
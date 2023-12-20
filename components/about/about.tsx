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
}
 h2{
    font-size:50px;
    margin:10px;
    color:black;
}
  .image{
    width:175px;
    height:175px;
    border-radius:50%;
    border:2px solid #202E2C;
    z-index:1;
    overflow:hidden;
    position:relative;
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
  }

`;

export const About:React.FC<IDivPosition>=({about})=>{

    return(
        <>
        <AboutWrapper ref={about}>
            <div className="content">
                <div className="left">
                <h2>About Me</h2>
                <div className="circle">
                    <div className='image'>
                        <Image src={imgMe.src} layout="fill" className="nextImg" alt={`A picture of myself sitting down with a hawaiin shirt`} blurDataURL={imgMe.src}/>
                    </div>
                </div>
                </div>
                <div className="right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, neque expedita officia corporis eaque perspiciatis architecto explicabo unde! Beatae officiis explicabo cumque quos facilis sunt ab corrupti facere architecto tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod reprehenderit illo maxime, perferendis doloribus nihil libero adipisci eos exercitationem repellat, veniam sunt et architecto deleniti sint temporibus vel. Quisquam.</p>
                </div>

            </div>
            
            
        </AboutWrapper>
        </>
    )
}
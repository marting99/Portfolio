import React, {RefObject} from 'react'
import styled from 'styled-components'

const Main=styled.div`
background-color:#202E2C;
padding: 0 10%;
height:80vh;
color:white;
margin:1%;
position:relative;
border-radius:8px;
display:flex;
justify-content:center;
flex-direction:column;
line-height:2;
.text{
    display: flex;
}
h1{
    font-size:32px;
    font-weight:400;
}
.c{
    width:max-content;
    font-size:28px;
}
span{
    border-bottom:2px solid;
}
.c:hover span {
    display: none;
    cursor:pointer;
  }
.c:hover:before {
    content:'Copy email?';
    cursor:pointer;
    border-bottom: 2px solid #557172;
    transform: translate(0%,100%);
  }
`;

export default function Hero(){
    return (
        <>
            <Main>
                <div className='text'>
                    <h1>Hello I&apos;m Martín! My eagerness to learn and commitment to staying up-to-date with the latest industry trends and tools is evident in my work. With me on your team, you can rest assured that your project is in good hands and will receive the attention and expertise it deserves.</h1>
                </div>
                <div className='c'>
                    <span>Get in touch</span>
                </div>
            </Main>
        </>
    )
}
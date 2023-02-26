import styled from 'styled-components'

interface CardProps {
    xAngle: number;
    yAngle: number;
    clicked:boolean;
  }
export const CardWrapper=styled.div`
    perspective: 1000px;
    width:100%;
    transition: transform 1s ease-in;
    transform-style: preserve-3d;
    display:flex;
    padding-left:2%;
    *{
      backface-visibility: hidden;
    }
`;
export const CardStyle=styled.div.attrs<CardProps>( props => ({
    style: {
      transform: `rotateX(${props.xAngle *-10}deg) rotateY(${props.yAngle*10}deg)`
    }
  }))<CardProps>`
    margin-top:1%;
    perspective: 1000px;
    height:87vh;
    .card{
      width:455px;
      position:relative;
      transition: transform 0.2s ease-out;
      transform-style: preserve-3d;
      transform:${props=> props.clicked?'rotateY(180deg)':''}
    }
    .face{
      height:auto;
      width:91%;
      color:#FFF;
      padding:20px;
      position:absolute;
      left:${props=>props.clicked?'10%':''};
      box-sizing: border-box;
      border: 10px solid #202E2C;
      box-shadow: 0px 0px 0px 2px rgb(255, 255, 255) inset;
      border-radius:12px;
      backface-visibility:hidden;
    }
    .front{
      display:flex;
      flex-direction:column;
      background-color:#202E2C;
    }
    .back {
      background-color:#202E2C;
      transform: rotateY(180deg);
      height:87vh;
    }
    *{
      backface-visibility: hidden;
    }
    :hover{
      cursor:pointer;
    }
    .jobTitle h2{
      max-width:70%;
      letter-spacing:3px;
      border-bottom:white 1px solid;
    }
    .circle{
      border-radius:50%;
      margin:auto;
    }
    .image{
      width:200px;
      height:200px;
      border-radius:50%;
      border:2px solid white;
      z-index:1;
      overflow:hidden;
      position:relative;
    }
    .nextImg{
      object-fit:cover;
    }
    .text{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      letter-spacing:3px;
    }
    .text h3{
      margin-bottom:0;
    }
    .text p{
      margin:1%;
    }
    .backText li{
      padding: 5% 0px;

    }

`
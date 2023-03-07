import styled from 'styled-components'

interface CardProps {
    xAngle: number;
    yAngle: number;
    clicked:boolean;
  }
export const CardWrapper=styled.div`
    perspective: 1000px;
    transition: transform 1s ease-in;
    transform-style: preserve-3d;
    display:flex;
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
    width:90%;
    .card{
      min-width:455px;
      min-height:87vh;
      position:relative;
      transition: transform 0.2s ease-out;
      transform-style: preserve-3d;
      transform:${props=> props.clicked?'rotateY(180deg)':''}
    }
    .face{
      height:auto;
      width:91%;
      color:#FFF;
      filter:drop-shadow(0px 10px 8px black);
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
    }
    *{
      backface-visibility: hidden;
    }
    :hover{
      cursor:pointer;
    }
    .hole{
      border-radius: 12px;
      display: flex;
      margin: auto;
      width: 47px;
      height: 12px;
      box-shadow: black 2px 3px 6px 2px inset;
      background-color: white;
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
      width:175px;
      height:175px;
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

    @media(max-width:780px){
      .card{
        min-width:350px;
      }
    }

`
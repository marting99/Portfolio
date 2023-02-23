import styled from 'styled-components'

interface CardProps {
    xAngle: number;
    yAngle: number;
    clicked:boolean;
  }

export const CardStyle=styled.div.attrs<CardProps>( props => ({
    style: {
      transform: `rotateX(${props.xAngle}deg) rotateY(${props.yAngle}deg)`
    }
  }))<CardProps>`
    
    perspective: 30em;
    margin:auto;
    width:463px;
    transition: transform 0.2s ease-in-out;
    transform-style: preserve-3d;
    .card{
      width:423px;
      height:500px;
      position:relative;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      transform:${props=> props.clicked?'rotateY(180deg)':''}
    }
    .face{
      width:100%;
      height:100%;
      color:#FFF;
      padding:20px;
      position:absolute;
      border-radius:12px;
      backface-visibility:hidden;
      box-shadow: 0px 7px 13px -1px #111;
    }
    .front{
      display:flex;
      flex-direction:column;
      justify-content:center;
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

    .circle{
      border-radius:50%;
      margin:auto;
    }
    .image{
      width:200px;
      height:200px;
      border-radius:50%;
      border:2px solid black;
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
    }

`
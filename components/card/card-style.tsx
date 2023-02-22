import styled from 'styled-components'

interface CardProps {
    xAngle: number;
    yAngle: number;
  }

export const CardStyle=styled.div.attrs<CardProps>( props => ({
    style: {
      transform: `rotateX(${props.xAngle}deg) rotateY(${props.yAngle}deg)`
    }
  }))<CardProps>`
    margin:auto;
    background-color:orange;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:12px;
    width:400px;
    padding:20px;
    position: relative;
    perspective: 1000px;
    transition: transform 0.2s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: 0px 7px 13px -1px #111;
    * {
        backface-visibility: hidden;
    }
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0) 100%
        );
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
    :hover{
        cursor:pointer;
    }
      &:hover:after {
        
        opacity: 1;
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
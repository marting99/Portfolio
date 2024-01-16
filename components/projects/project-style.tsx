import styled from 'styled-components';
interface ProjectWrapperProps {
    isVisible:boolean;
}
export const ProjectWrapper=styled.div<ProjectWrapperProps>`
display:flex;
justify-content:space-between;
margin:0 50px;
padding: 100px 0px;
border-bottom:1px solid #333;
.left{
    max-width:30%;
}
.subtitle{
    font-size:14px;
    opacity: 0;
    animation: drop 0.4s linear forwards;
    max-width:65%;
}
.title h1{
    font-size:55px;
    opacity: 0;
    animation: ${({ isVisible }) => isVisible?'drop 0.4s linear forwards 0.2s':''};
    line-height:65px;
}
.title h3{
    font-size:16px;
    opacity: 0;
    line-height:24px;
    font-weight:500;
    animation: ${({ isVisible }) => isVisible? 'drop 0.4s linear forwards 0.4s;':''}
    
}
.text{
    color:#333;
    font-size:20px;
    opacity: 0;
    line-height:30px;
    animation: ${({ isVisible }) => isVisible ? 'drop 0.4s linear forwards 0.6s':''};
}
.right{
    width:57.7%;
    height:465px;
    position:relative;
    display:flex;
    justify-content:center;

}
.desktop{
    border-radius:16px;
    border:5px solid black;
    width:100%;
    max-height:450px;
    max-width:700px;
    box-shadow:0px 13px 15px -15px black;
}
.deskImg{
    width:100%;
    height:100%;
    margin:0;
    border-radius:10px;
    position:relative;
    overflow:hidden;
}
.phone{
    position:absolute;
    width:175px;
    height:350px; 
    margin: 0 auto;
    bottom:-1.1vw;
    transform:translateX(-200%);
}
.phoneImg{
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
    overflow:hidden;
}
.nextImg{
    object-fit:cover;
  }
  .prodImg{
    position:absolute;
    width:137px;
    top:6%;
    left:11%;
    height:310px;
    border-radius:16px;
    box-shadow:0px 23px 25px -15px black;
  }
  .prod-phone{
    object-fit:fill;
    border-radius:16px;
    
  }
  @keyframes drop{
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50% {
        transform: translateY(0px);
        opacity: 1;
    }
    65% {
        transform: translateY(-17px);
        opacity: 1;
    }
    75% {
        transform: translateY(-22px);
        opacity: 1;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
  }
  @media(max-width:999px){
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
    padding:50px 0px;
    margin: 0 25px;
    .left{
        margin-bottom:5%;
        max-width:80%;
    }
    .desktop {
        height: 320px;
        max-width:550px;
    }
    .right{
        width:80%;
        height:350px;
    }
    .phone{
        display:none;
    }
  }
//   hide phone image from 1100 - 1200
  @media(min-width:1100px) and (max-width:1200px){
    .phone{
        display:none;
    }
  }

  @media(min-width:1000px) and (max-width:1100px){
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
    .right{
        width:73%;
    }
    .phone{
        display:none;
    }
    .left{
        width:100%;
        max-width:100%;
        margin-bottom:5%;

    }
    .text{
        max-width:100%;
    }
  }
  @media(min-width:1500px){

    .phone{
        transform:translateX(-214%);
    }
  }
  @media(min-width:2200px){
    .phone{
        bottom: -0.8vw;
        transform:translateX(-237%);
    }
  }
`;

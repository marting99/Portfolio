import styled from 'styled-components';

export const ProjectWrapper=styled.div`
display:flex;
justify-content:space-between;
margin:0 50px;
padding: 100px 0px;
border-bottom:1px solid #333;
.left{
    max-width:36%;
}
.subtitle{
    font-size:14px;
    opacity: 0;
    animation: drop 0.4s linear forwards;
    max-width:65%;
}
.title{
    // animation: drop 0.4s linear forwards 0.2s;
}
.title h1{
    font-size:55px;
    opacity: 0;
    animation: drop 0.4s linear forwards 0.2s;
    line-height:65px;
}
.title h3{
    font-size:16px;
    opacity: 0;
    line-height:24px;
    font-weight:500;
    animation: drop 0.4s linear forwards 0.4s;
    
}
.text{
    color:#333;
    font-size:20px;
    opacity: 0;
    line-height:30px;
    animation: drop 0.4s linear forwards 0.6s;
}
.right{
    width:57.7%;
    position:relative;
    display:flex;
    justify-content:center;

}
.desktop{
    border-radius:16px;
    border:5px solid black;
    width:100%;
    height:500px;
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
    transform:translateX(-214%);
}
.phoneImg{
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
    overflow:hidden;
}
.nextImg{
    object-fit:fill;
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
  @media(max-width:900px){
    flex-direction:column-reverse;
    padding:50px 0px;
    margin: 0 25px;
    .right{
        width:100%;
    }
    .desktop{
        height:225px;
    }
    .phone{
        display:none;
    }
    .left{
        width:100%;
        max-width:100%;

    }
    .text{
        max-width:100%;
    }
  }
//   @media(min-width:2200px){
//     .phone{
//         right:55em;
//     }
//   }
`;

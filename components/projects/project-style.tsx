import styled from 'styled-components';

export const ProjectWrapper=styled.div`
display:flex;
justify-content:space-evenly;
margin:0 22px;
padding: 100px 0px;
border-bottom:3px solid gray;
.left{
    max-width:36%;
}
.subtitle{
    font-size:14px;
    max-width:65%;
    // line-height:65px;
}
.title{
}
.title h1{
    font-size:55px;
    line-height:65px;
}
.title h3{
    font-size:16px;
    line-height:24px;
    font-weight:500;
    
}
.text{
    max-width:65%;
    color:#333;
    font-size:18px;
    line-height:30px;
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
    object-fit:cover;
  }
  .prodImg{
    position:absolute;
    width:137px;
    top:6%;
    left:11%;
    height:310px;
    box-shadow:0px 23px 25px -15px black;
  }
  .prod-phone{
    object-fit:cover;
    border-radius:16px;
    
  }
//   @media(min-width:1700px){
//     .phone{
//         right:75%;
//     }
//   }
//   @media(min-width:2200px){
//     .phone{
//         right:55em;
//     }
//   }
`;

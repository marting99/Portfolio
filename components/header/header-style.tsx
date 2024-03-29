import styled,{keyframes} from 'styled-components'

export const Main=styled.div`
padding: 4% 0;
width:100%;
.content{
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:0px 5%;
}
.text{
    display: flex;
}
h1{
    font-size:28px;
    font-weight:400;
}
.contact{
    display:flex;
    width:100%;
}
.email{
    width:max-content;
    font-size:28px;
    cursor:pointer;
}
.other-contact{
    display:flex;
    margin-left:5%;
    align-items:center;
    font-size:44px;
}
.other-contact .github{
    margin: 0px 10%;
}
.other-contact .linked-in{
    margin: 0px 10%;
}
.email span{
    border-bottom:2px solid;
    vertical-align:sub;
}
@media(max-width:900px){
    flex-direction:column-reverse;
    height:auto;
    align-items:center;
    // padding: 0px 40px;
    line-height:1.5;
    .content{
        width:80%;
        padding:0;
    }
    .other-contact{
        padding:10px 0;
        margin: 0;
        width:100%;
    }
    .other-contact .github{
        margin:0;
    }
}
`;

const slideInLeft = keyframes`
from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideInBottom = keyframes`
from {
    transform:translateY(100%);
    opacity:0;
}
to{
    transform:translateY(0);
    opactiy:1;
}
`;
const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const mobileSlide = keyframes`
from {
    transform: translateY(-30%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }

`

export const LeftText = styled.p`
    margin:0;
    animation: ${slideInLeft} 1s ease-in-out;
`;
export const LeftText2 = styled.p`
    margin:0;
    animation:${slideInLeft} 1.3s ease-in-out;
`;
export const BottomText = styled.div`
    margin:0;
    display:flex;
    justify-content:center;
    width:100%;
    animation:${slideInBottom} 1s ease-in-out;
    @media(max-width:900px){
        flex-direction:column;
    }
`;
export const RightImage = styled.div`
    margin:0;
    animation:${slideInRight} 1s ease-in-out;
    height:80vh;
    width:40%;
    .hero-image{
        width:100%;
        min-height:80vh;
        position:relative;
      }
      .nextImg{
        object-fit:contain;
      }

    @media(max-width:900px){
        height:auto;
        animation:${mobileSlide} 1s ease-in-out;
        width:80%;
        .hero-image{
            min-height:365px;
            width:100%;
        }
    }
    
`;
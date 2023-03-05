import styled from 'styled-components'



export const Main=styled.div`
background-color:#202E2C;
color:white;
display:flex;
justify-content:space-around;
line-height:2;
height:80vh;
padding: 4% 0;
width:100%;
.content{
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:40%;
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
}
.email{
    width:max-content;
    font-size:28px;
    cursor:pointer;
}
.hero-image{
    width:40%;
    min-height:80vh;
    position:relative;
  }
  .nextImg{
    object-fit:cover;
  }
.other-contact{
    display:flex;
    width:50%;
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
span{
    border-bottom:2px solid;
}
`;
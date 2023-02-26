import styled from 'styled-components'

export const Main=styled.div`
color:#202E2C;
margin:1%;
display:flex;
flex-direction:row;
line-height:2;
.content{
    display:flex;
    justify-content:center;
    flex-direction:column;
}
.text{
    display: flex;
}
h1{
    font-size:32px;
    font-weight:400;
}
.email{
    width:max-content;
    font-size:28px;
}
span{
    border-bottom:2px solid;
}
.email:hover span {
    display: none;
    cursor:pointer;
  }
.email:hover:before {
    content:'Copy email?';
    cursor:pointer;
    border-bottom: 2px solid #557172;
    transform: translate(0%,100%);
  }
`;
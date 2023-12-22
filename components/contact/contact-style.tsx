import styled,{keyframes} from 'styled-components'

export const Main=styled.div`
width:100%;
padding: 40px 0px;
.text{
    display: flex;
}
h1{
    font-size:28px;
    font-weight:400;
}

.other-contact{
    align-items:center;
    font-size:44px;
    display:flex;
    justify-content:center;
}
.github{
    padding-right:15px;
}
.linked-in{
    padding-left:15px;
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
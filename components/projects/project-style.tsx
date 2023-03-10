import styled from 'styled-components';

export const ProjectWrapper=styled.div`
display:flex;
justify-content:center;
width:100%;
padding: 2% 0;
.left{
    width:40%;
    display:flex;
    flex-direction:column;
}
.text{
    max-width:65%;
}
.right{
    width:50%;
    position:relative;
}
.desktop{
    display:flex;
    justify-content:center;
}
.deskImg{
    width:100%;
    height:60vh;
    border:5px solid black;
    border-radius:16px;
    position:relative;
    overflow:hidden;
}
.phone{
    position:relative;
    width:100%;
    max-width:414px; 
    margin: 0 auto;
}
.phoneImg{
    width:30%;
    height:50vh;
    position:relative;
    z-index:1;
    top:100px;
    left:-20%;
    overflow:hidden;
}
.nextImg{
    object-fit:cover;
  }
  .prodImg{
      object-fit:contain;
      position:absolute;
      top:76px;
      left:23px;
      width: calc(100% - 46px);
      height: calc(100% -76px);
  }
`;

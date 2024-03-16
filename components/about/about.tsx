import React,{RefObject} from 'react';
import Image from 'next/image';
import styled from 'styled-components';


interface IDivPosition {
    about: RefObject<HTMLDivElement>|null;
    img:string;
    imgAlt:string;
    description:string;
}

const AboutWrapper = styled.div`
display:flex;
justify-content:space-between;
padding: 100px 0px;
flex-direction:column;
padding: 50px 0px;
margin-right:50px;
margin-left:35px;
border-bottom:1px solid #333;
.content{
    width:100%;
    display:flex;
    justify-content:space-around;
    padding:50px 0px;
}
.title{
    padding-left:50px;
}
 h2{
    font-size:50px;
    margin:10px;
    color:black;
}
  .image{
    width:375px;
    height:375px;
    border:2px solid #202E2C;
    z-index:1;
    overflow:hidden;
    position:relative;
    border-radius:12px;
  }
  .nextImg{
    object-fit:cover;
  }
  .left{
    width:45%;
    padding-left:50px;
  }
  .right{
    width:55%;
    padding: 0px 70px;
    color:#333;
    font-size:18px;
    line-height:40px;
  }
  .right p {
      margin:0px;
  }
@media(max-width:750px){
    .left{
        width:66%;
    }
}
  @media(max-width:1100px){
    .right{
        width:100%;
        padding:0;

    }
    .image{
        width:250px;
        height:250px;
    }
    .left{
        padding-left:0;
        // width: 100%;
        margin-bottom:50px;
      }
    .content{
        
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin: 0 25px;
    }

}

`;

export const About:React.FC<IDivPosition>=({about,img,description,imgAlt})=>{

    return(
        <>
        <AboutWrapper ref={about}>
            <div className="content">
                <div className="left">
                    <div className='image'>
                        <Image src={img} layout="fill" className="nextImg" alt={imgAlt} blurDataURL={img}/>
                    </div>
                </div>
                <div className="right">
                    <p>{description}</p>
                </div>

            </div>
            
            
        </AboutWrapper>
        </>
    )
}
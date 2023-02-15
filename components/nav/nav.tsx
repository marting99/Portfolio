import react,{useEffect, useState} from 'react';
import styled from 'styled-components'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

type props = {
    pageName?:string;
    handleClick?:(e: React.MouseEvent<Element, MouseEvent>) => void;
    open?:boolean;
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#7c9381;
    .content{
        display:flex;
        justify-content:center;
    }
    .content .close{
        display:none;
    }
    .content .open{
        display:none;
    }
    .content div{
        margin:0px 10px;
    }
    .content div:hover{
        cursor:pointer;
    }
    @media(max-width:700px){
        display:none;
        button{
            display:none;
        }
    }
`;
const MobileNav = styled.div`
display:none;
    @media(max-width:700px){
        display:flex;
        .hide{
            transform: translateX(-100%);
            transition:all .5s ease-out;
        }
        ul{
            margin:0;
            padding:0;
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            align-items:center;
            list-style:none;
            position:fixed;
            background-color:black;
            height:100%;
            width:80%;
            overflow-x:hidden;
            z-index:1;
            top:0;
            left:0;
            position:absolute;
            
            right:25px;
            top:0;
        }
        .show{
            transform: translateX(-3%);
            transition:all .7s ease-out;
        }
        ul .link{
            margin:40px 0px;
        }
        button{
            display:flex;
            color:white;
            background-color: #68776B;
            border:none;
            font-size:32px;
        }
    }
`;
export const Nav:React.FC<props>=({handleClick,setOpen,open})=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <>
        <Navbar>
            <div className='logo' >
                <h1>Martin Garcia</h1>
            </div>
            <div className="content">
                <div className='' onClick={(e)=>handleClick?.(e)}>About</div>
                <div className=''  onClick={(e)=>handleClick?.(e)}>Projects</div>
                <div className='' onClick={(e)=>handleClick?.(e)}>Contact</div>
            </div>
        </Navbar>
        <MobileNav>
            <button onClick={()=>setIsOpen(!isOpen)}>
                <AiOutlineMenu/>
            </button>
                <ul className={`${isOpen?'show':'hide'}`} >
                    <div className='link' onClick={(e)=>handleClick?.(e)}>About</div>
                    <div className='link'  onClick={(e)=>handleClick?.(e)}>Projects</div>
                    <div className='link' onClick={(e)=>handleClick?.(e)}>Contact</div>
                    <div >
                        <button onClick={()=>setIsOpen(!isOpen)} className='closed'><AiOutlineClose/></button>
                    </div>
                </ul>
            
        </MobileNav>
        </>
    )
}
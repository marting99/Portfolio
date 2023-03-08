import React,{useEffect, useState} from 'react';
import styled from 'styled-components'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

type props = {
    pageName?:string;
    handleClick?:(event: React.MouseEvent<HTMLAnchorElement>) => void;
    open?:boolean;
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = styled.div`
    display:flex;
    top:0;
    position:sticky;
    height:60px;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    color:black;
    background-color:white;
    box-shadow: 0px 7px 13px -1px #111;
    padding:0 20px;
    h1{
        margin:0;
    }
    .content{
        display:flex;
        justify-content:center;
        font-size:24px;
    }
    .content .close{
        display:none;
    }
    .content .open{
        display:none;
    }
    .content a{
        margin:0px 10px;
    }
    .content a:hover{
        cursor:pointer;
    }
    @media(max-width:900px){
        display:none;
        button{
            display:none;
        }
    }
`;
const MobileNav = styled.div`
display:none;
    @media(max-width:900px){
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
                <h1>Martín Garcia</h1>
            </div>
            <div className="content">
                <a onClick={handleClick}>About</a>
                <a  onClick={handleClick}>Projects</a>
                <a onClick={handleClick}>Contact</a>
            </div>
        </Navbar>
        <MobileNav>
            <button onClick={()=>setIsOpen(!isOpen)}>
                <AiOutlineMenu/>
            </button>
                <ul className={`${isOpen?'show':'hide'}`} >
                    <a className='link' onClick={handleClick}>About</a>
                    <a className='link'  onClick={handleClick}>Projects</a>
                    <a className='link' onClick={handleClick}>Contact</a>
                    <div >
                        <button onClick={()=>setIsOpen(!isOpen)} className='closed'><AiOutlineClose/></button>
                    </div>
                </ul>
            
        </MobileNav>
        </>
    )
}
import React,{useEffect, useState} from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {MobileNav,Navbar} from './nav-style'

type props = {
    pageName?:string;
    handleClick?:(event: React.MouseEvent<HTMLAnchorElement>) => void;
    open?:boolean;
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>
}

export const Nav:React.FC<props>=({handleClick,setOpen,open})=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <>
        <Navbar>
            <div className='logo' >
                <h1>Martín Garcia</h1>
            </div>
            <div className="content">
                <a  onClick={handleClick}>Projects</a>
                <a onClick={handleClick}>About</a>

            </div>
        </Navbar>
        <MobileNav>
            <button onClick={()=>setIsOpen(!isOpen)}>
                <AiOutlineMenu/>
            </button>
                <ul className={`${isOpen?'show':'hide'}`} >
                    <a className='link' onClick={handleClick}>About</a>
                    <a className='link'  onClick={handleClick}>Projects</a>
                    
                    <div >
                        <button onClick={()=>setIsOpen(!isOpen)} className='closed'><AiOutlineClose/></button>
                    </div>
                </ul>
            
        </MobileNav>
        </>
    )
}
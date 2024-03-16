import React,{useEffect, useState} from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {MobileNav,Navbar} from './nav-style'

type props = {
    pageName?:string;
    handleClick?:(event: React.MouseEvent<HTMLAnchorElement>) => void;
    open?:boolean;
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>;

}

export const Nav:React.FC<props>=({handleClick,setOpen,open})=>{
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
            <button onClick={()=>setOpen?.(!open)}>
                <AiOutlineMenu/>
            </button>
            <div className="title">
                <h2>Martín Garcia</h2>
            </div>
                <ul className={`${open?'show':'hide'}`} >
                    <button onClick={()=>setOpen?.(!open)} className='closed'><AiOutlineClose/></button>
                    <a className='link' onClick={(event)=>{handleClick && handleClick(event); setOpen && setOpen?.(!open)}} >About</a>
                    <a className='link'  onClick={(event)=>{handleClick && handleClick(event); setOpen && setOpen?.(!open)}}>Projects</a>
                    <a className='link' onClick={(event)=>{handleClick && handleClick(event); setOpen && setOpen?.(!open)}}>Contact</a>
                    
                    
                </ul>
        </MobileNav>
        </>
    )
}
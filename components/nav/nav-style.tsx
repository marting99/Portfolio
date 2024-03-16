import styled from "styled-components";

export const Navbar = styled.div`
    display:flex;
    top:0;
    position:sticky;
    height:60px;
    z-index:10;
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
export const MobileNav = styled.div`
    display:none;
    
    @media(max-width:900px){
        display:flex;
        overflow:auto;
        color:white;
        background-color:black;
        position:fixed;
        width:100%;
        height:55px;
        z-index:10;
        .title{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .hide{
            transform: translateX(-100%);
            transition:all .5s ease-out;
        }
        ul{
            font-size:25px;
            margin:0;
            padding:0;
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            align-items:center;
            list-style:none;
            background-color:black;
            height:100%;
            width:80%;
            overflow-x:hidden;
            z-index:10;
            left:0;
            position:fixed;
            right:25px;
            top:0;
        }
        ul a:hover{
            cursor:pointer;
        }
        .show{
            transform: translateX(-3%);
            transition:all .7s ease-out;
        }
        .closed{
            background-color:black;
            color:white;
            position: absolute;
            top:10px;
            right:10px;
        }
        ul .link{
            margin:40px 0px;
        }
        button{
            display:flex;
            color:white;
            border:none;
            background-color:black;
            font-size:32px;
            padding:0 0 0 12px;
            align-items:center;
        }
        button:hover{
            cursor:pointer;
        }
    }
`;
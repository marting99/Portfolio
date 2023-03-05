import {useState} from 'react'
import Image from 'next/image'
import {CardStyle} from './card-style';
import {CardWrapper} from './card-style'

type cardProps = {
    imageSrc:string;
    imageAlt?:string;
    name?:string;
    jobTitle?:string;
    skills?:string[];
    bulletPoints?:string[];
}


export const Card:React.FC<cardProps>=({imageSrc,skills,jobTitle,imageAlt,bulletPoints,name})=>{

    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [clicked,setClicked] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setTilt({ x, y });

    };
    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
      };
    return(
        <CardWrapper>
            <CardStyle xAngle={tilt.x} yAngle={tilt.y} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} clicked={clicked} onClick={()=>setClicked(!clicked)}>

                <>
                <div className="card" >
                    <div className="face front">
                        <div className="hole"/>
                        <div className="jobTitle">
                            <h2>{jobTitle}</h2>
                        </div>
                        <div className="circle">
                            <div className='image'>
                                <Image src={imageSrc} layout="fill" className="nextImg" alt={`${imageAlt}`} blurDataURL={imageSrc}/>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Skills</h3>
                            <div className="list">
                            {skills?.map(skill=>
                                <li>{skill}</li>
                            )}
                            </div>
                            
                        </div>

                    </div>
                    <div className="face back">
                    <div className="hole"/>
                        <div className="backText">
                            <h2>Overview</h2>
                            {bulletPoints?.map(item=>
                                <li>{item}</li>
                            )}
                        </div>
                    </div>
                </div>
                
            </>
            </CardStyle>
        </CardWrapper>
    )
}
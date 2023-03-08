import {useState,useEffect} from 'react'
import Image from 'next/image'
import {CardStyle,CardWrapper, MobileCard} from './card-style';
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
    // since we are using window this is recommended by nextjs
    const isBrowser = () => typeof window !== 'undefined';

    const [width, setWidth] = useState<number>(0);
    
    if(isBrowser()){
        const handleWindowSizeChange=function():void {
            setWidth(window.innerWidth);
        }
        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);
    }
    const isMobile = width <= 900;
    

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

        <>
            {!isMobile ? (
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
            ):(
                <MobileCard>
                        <div className="left">
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
                        <div className="right">
                            <div className="overview">
                                <h2>Overview</h2>
                                {bulletPoints?.map(item=>
                                    <li>{item}</li>
                                )}
                            </div>
                        </div>
                </MobileCard>
            )}
        </>
    )
}
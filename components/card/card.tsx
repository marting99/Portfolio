import {useState} from 'react'
import Image from 'next/image'
import {CardStyle} from './card-style'

type cardProps = {
    imageSrc:string;
    imageAlt?:string;
    name?:string;
    jobTitle?:string;
    skills?:[string];
    bulletPoints?:[string];
}


export const Card:React.FC<cardProps>=({imageSrc,skills})=>{

    const [angle, setAngle] = useState({ x: 0, y: 0 });
    const [clicked,setClicked] = useState(false);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = x - centerX;
        const deltaY = y - centerY;
        
        const radians = Math.atan2(deltaY, deltaX);
        const degree = (radians * 180) / Math.PI;

        if ((x < centerX && y < centerY)||(x < centerX && y >= centerY)) {
            // top & bottom left
            setAngle({ x: -degree / 10, y: -degree / 10 });
          } else if ((x >= centerX && y < centerY)||(x >= centerX && y >= centerY)) {
            // top & bottom right
            setAngle({ x: (-degree*2) / 10, y: (degree*2) / 10 });
            
        }
    };
    const handleMouseLeave = () => {
        setAngle({ x: 0, y: 0 });
      };
    return(
        <CardStyle xAngle={angle.x} yAngle={angle.y} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <>
                <div className="jobTitle">
                    <h2>Junior Dev</h2>
                </div>
                <div className="circle">
                    <div className='image'>
                        <Image src={imageSrc} layout="fill" className="nextImg" alt={``}/>
                    </div>
                </div>
                <div className="text">
                    <h3>Test</h3>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </>
            
        </CardStyle>
    )
}
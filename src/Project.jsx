import React, { useState } from 'react'
import project1 from './assets/Screenshot (30).png'
import project2 from './assets/Screenshot (31).png'
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { ecommerceGithubLink, ecommerceLink, videoStreamerGithubLink, videoStreamerLink } from './utility/utils';

export default function Project() {
    const [showDes, setshowDes] = useState(false);
    const [showDes2, setshowDes2] = useState(false);
    const showDesFn =()=>{
        setshowDes(!showDes)
    }
    const showDesFn2 =()=>{
        setshowDes2(!showDes2)
    }
  return (
    <div className='md:h-fit py-1 h-fit bg-gray-950 my-2 absolute top-[45%] w-full px-3'>
        <h2 className='w-40 m-auto px-2 font-bold bg-gray-700 text-center rounded-lg mb-2'>Featured Projects</h2>

        <div className='flex md:flex-row flex-col gap-6 md:justify-around'>
            <div className='flex gap-2'>
                <img className='rounded-lg w-36 md:w-48 h-20 md:h-36 transition-transform transform-gpu hover:scale-90' src={project1} alt="" />
                <div className='flex flex-col gap-2'>
                   <div>
                     <h1 className='text-[14px] font-bold'>Ecommerce (RaazStore)</h1>
                <h2 className='px-1 bg-gray-400 w-fit text-black text-[12px] opacity-45 font-bold cursor-pointer' onClick={showDesFn}>Description !</h2>
                   </div>
                {showDes && <p className=' md:text-[12px] text-[8px] font-semi-bold w-52'>Highly Optimsed, Fast Loading And Large Scale Ecommerce
Responsive App Which Includes State Management Library
Like Redux, Lazy Loading , Firebase Authentication</p>}
<div>
    <a className='block' href={ecommerceLink} target='_self' ><PreviewIcon/><span className='text-blue-800 text-[10px]  hover:underline'>Live Project</span> </a>
<a  href={ecommerceGithubLink} className='block' target='_self'><GitHubIcon/><span className='text-blue-800 text-[10px]  hover:underline'> Source Code</span></a>
</div>
                </div>
            </div>

            <div className='flex gap-2'>
                <img className='rounded-lg w-36 md:w-48 h-20 md:h-36 transition-transform transform-gpu hover:scale-90' src={project2} alt="" />
                <div className='flex flex-col gap-2'>
                    <div>
                        <h1 className='text-[14px] font-bold'>Video Streamer</h1>
                <h2 className='px-1 bg-gray-400 w-fit text-black text-[12px] opacity-45 font-bold  cursor-pointer' onClick={showDesFn2}>Description !</h2>
                    </div>
                {showDes2 && <p className='md:text-[12px] text-[8px] font-semi-bold w-52'>This Is a High Performant And Large Scale Responsive Video Streaming App Which Uses State Management Like Redux,Lazy Loading, Error Handling, Highly Optimised Searchbar With Debouncing And Responsive</p>}
                <div>
                    <a className='block' href={videoStreamerLink} target='_self' ><PreviewIcon/><span className='text-blue-800 text-[10px]  hover:underline'>Live Project</span> </a>
<a  href={videoStreamerGithubLink} className='block' target='_self'><GitHubIcon/><span className='text-blue-800 text-[10px]  hover:underline'> Source Code</span></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

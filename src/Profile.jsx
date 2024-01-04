import React from 'react'
import photo from './assets/photo.gif'
import cv from './assets/myCv.pdf'
import profilePic from './assets/profilePic.jpg'

export default function Profile() {
  return (
    
    
    <>
    <div className='absolute md:w-64 w-40 '>
          <img src={photo} alt="" className='absolute' />
          <img className='absolute md:w-[136px] w-[90px] md:h-[137px] h-[90px] md:top-10 top-5 left-9 md:left-16 ' src={profilePic} alt="profileDp" />
          <h2 className='text-black absolute -bottom-[139px] md:-bottom-[210px] md:left-20 left-9 font-bold'>Sorforaj Ali</h2>
          

        </div>
        <div className='absolute md:left-[32%] lg:left-[18%]  left-[50%] md:top-[6%] top-5'>
            
            <ol className='list-disc '>
                <li className='font-bold list-none relative -left-7'>Front-End Developer</li>
                
                <li className='skill'>React.js</li>
                <li className='skill'>Javascript</li>
                <li className='skill'>HTML5</li>
                <li className='skill'>Redux</li>
                <li className='skill'>Tailwind CSS</li>
                <li className='skill'>Responsive Design</li>
                <a href={cv} target='_self' className='text-red-700 py-1 font-extrabold text-xs px-6 bg-gray-500'>⬇️ Download Resume</a>
            </ol>
            
        </div>
        
        </>
        
    
  )
}

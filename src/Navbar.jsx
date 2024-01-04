import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profile from './Profile';
import Form from './Form';


export default function Navbar() {
  const [showForm, setshowForm] = useState(true);
  const showFormFn =()=>{
    setshowForm(!showForm)
  }
  return (
    <div>
        <ul className='flex float-right gap-1 cursor-pointer  mr-3 '>
          <li onClick={showFormFn} className='text-white'><MailIcon/></li>
          <li className='text-white'><a href="www.linkedin.com/in/sorforaj-ali-7535692a8" target='_self'><LinkedInIcon/></a></li>
        </ul>
        <Profile/>
        {showForm && <div className='md:static relative right-5 top-[150px]'><Form/></div>}
    </div>
  )
}

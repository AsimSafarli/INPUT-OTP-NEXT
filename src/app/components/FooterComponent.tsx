import React from 'react';
import {Popover} from 'antd'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { SiGmail} from 'react-icons/si'
function Footer() {
    const github = <a href='https://github.com/AsimSafarli' target='_blank'   className='flex flex-row items-center border-b border-b-slate-700 hover:text-blue-500'>
    <div>Github</div> 
    </a>
    const instagram = <div >
      <a href='https://www.instagram.com/asimsafar'  target='_blank'  className='flex flex-row items-center border-b border-b-slate-700 hover:text-yellow-700'>
      <div>Instagram</div> 

      </a>
    </div>
    const linkedin =<a href='https://www.linkedin.com/in/asimsafar/'  target='_blank'  className='flex flex-row items-center border-b border-b-slate-700 hover:text-blue-500'>
    <div>LinkedIn</div>
        </a>
    const gmail = <div className='flex flex-row items-center border-b border-b-slate-700 hover:text-red-500'>
<div>saffarrli14@gmail.com</div> 
    </div>
    const buymeacoffee = <a href='https://www.buymeacoffee.com/asimsafar' className='flex flex-row items-center border-b border-b-slate-700 hover:text-yellow-500'>
    <div>BuyMeCoffe</div>
        </a>
          const kofeal = <a href='https://kofeal.com/@asimsafar' className='flex flex-row items-center border-b border-b-slate-700 hover:text-purple-500'>
          <div>Kofe Al</div>
              </a>


  return (
  <footer className='p-10 container mx-auto flex flex-row md:gap-x-10 gap-x-5 text-3xl justify-center items-center relative z-0 w-max'>
  <div>
  <Popover content={github}  trigger="hover">
    <a href='https://github.com/AsimSafarli'>
    
    <BsGithub className='md:text-3xl rounded-lg text-2xl text-black shadow-md border border-white p-1 bg-white'/>
    </a>
</Popover>
  </div>
 
<div>
<Popover content={instagram}  trigger="hover">

     <a href='https://www.instagram.com/asimsafar'>
     <BsInstagram className='bg-gradient-to-r from-pink-500 text-2xl via-red-500 to-yellow-500 rounded-lg text-white shadow-md border border-white p-1 md:text-3xl'/>
     </a>
     </Popover>
</div>

     <div>
     <Popover content={linkedin}  trigger="hover">

<a href='https://www.linkedin.com/in/asim-seferli-272164202/'>
<FaLinkedinIn className='md:text-3xl text-2xl rounded-lg text-white shadow-md border border-white p-1 bg-blue-500'/>
</a>
</Popover>
     </div>
    
     <div>
     <Popover content={gmail}  trigger="hover">

      <SiGmail className='md:text-3xl text-2xl rounded-lg text-red-500 shadow-md border border-white p-1 bg-white'/>
      </Popover>
    </div>
   
    
  </footer>
  );
}

export default Footer;
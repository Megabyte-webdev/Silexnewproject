import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import {IoIosMenu, IoIosClose} from 'react-icons/io'
import {TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti'

const Navbar = () => {
  const [menu, setMenu]=useState(false);
  const [dropdown, setDropdown]=useState({});

  const handleDropdown = (event, name)=>{
    event.preventDefault();
    setDropdown((prev)=>{
    const newDropdown={}
    Object.keys(prev).forEach(key =>(newDropdown[key] = false));
    newDropdown[name]= !prev[name];
    return newDropdown;
  });
  
  }
  return (
    <div>
      {/* top cta */}
        <div className='font-[Ripple-Bold] text-xs md:text-[16px] text-white gap-2 py-3 px-[4%] bg-[#8B0002] px flex flex-col sm:flex-row justify-center items-center sm:justify-between'>
            <div className='flex gap-x-3'>
            <a className='no-underline text-white font-bold' href="tel:+31(0)10 307 2137">+31(0)10 307 2137</a>
            <a className='no-underline text-white font-bold' href="mailto:info@rsbpp.nl">info@rsbpp.nl</a>
            </div>
            <div className='flex gap-3 text-white'>
              <TiSocialFacebook size='20' />
              <TiSocialTwitter size='20' />
              <TiSocialLinkedin size='20' />
              <TiSocialInstagram size='20' />
            </div>
        </div>
        {/* main nav */}
        <div className="uppercase px-[4%] flex justify-between items-center text-sm py-4">
      <img className="w-32 md:w-60 cursor-pointer" src={logo} alt="logo" />
      <ul className="text-[14px] text-black hidden md:flex md:flex-wrap items-center md:justify-center gap-x-5 gap-y-2">
      <NavLink className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/">
          <p>HOME</p>
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'aboutUs')} className="relative px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/doctors">
          <p className="">ABOUT US +</p>
          {
            dropdown.aboutUs &&
            <ul className="z-[100] p-2 text-[13px] font-semibold absolute top-full mt-3 md:min-w-60 bg-gray-100 text-black w-full transition-all duration-500">
            <li className="py-2 px-4">Who We Are</li>
            <li className="py-2 px-4">Mission/Vision</li>
            <li className="py-2 px-4">Our Leadership</li>
            <li className="py-2 px-4">Advisory Board</li>
            <li className="py-2 px-4">Management Board</li>
            <li className="py-2 px-4">Contact Us</li>
          </ul>
          }
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'programmes')} to='/online-programmes' className="group relative px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit">
         <p> PROGRAMMES +</p>
         {
          dropdown.programmes &&
          <ul className="z-[100] p-2 text-[13px] font-semibold absolute top-full mt-3 md:min-w-60 bg-gray-100 text-black w-full">
            <li className="py-2 px-4">Executive Education</li>
            <li className="py-2 px-4">Online Programmes</li>
            <li className="py-2 px-4">DigiKnowH</li>
          </ul>
         }
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'faculties')} className="relative px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>FACULTIES +</p>
         {
          dropdown.faculties &&
          <ul className="z-[100] p-2 text-[13px] font-semibold absolute top-full mt-3 md:min-w-60 bg-gray-100 text-black w-full">
            <li className="py-2 px-4">Faculty of Business, Communication and Finance</li>
            <li className="py-2 px-4">Faculty of Good Governance, and Public Policy</li>
          </ul>
         }
        </NavLink>
        <NavLink className="group px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>NEWS&EVENTS</p>
        </NavLink>
        <NavLink className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>SUPPORT AND GUIDANCE</p>
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'download')} className="relative px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>DOWNLOADS +</p>
         {
          dropdown.download &&
          <ul className="z-[100] p-2 text-[13px] font-semibold absolute top-full left-0 mt-3 md:min-w-60 bg-gray-100 text-black w-full">
            <li className="p-2">2024 Course Brochure</li>
          </ul>
         }
        </NavLink>
      </ul>
      <div className="md:hidden bg-[#8B0002] py-2 px-3 text-white rounded-md cursor-pointer" onClick={()=>setMenu(!menu)}>
      {
        menu !== true ? <IoIosMenu size="24" />:<IoIosClose size="24" />
      }
      </div>
    </div>
    {/* Side nav */}
      <div onClick={(event)=>{if(!event.target.closest('sideNav') && event.target === document.querySelector('.sideNav-container')) {setMenu(false)}}} className={`sideNav-container ${menu ===true ? 'opacity-1 left-0' : 'opacity-0 left-[-999px]'} md:hidden fixed z-[100] text-[13px] font-semibold top-0 bottom-0 w-screen h-full bg-[rgba(0,0,0,.8)] transition-all duration-500`}>
      <div className= 'sideNav bg-white w-full md:w-96 h-full pt-12'>
    <div className="flex justify-between p-3 px-4">
    <img className="w-32 md:w-60 cursor-pointer" src={logo} alt="logo" />
    <div className="md:hidden bg-[#8B0002] py-2 px-3 text-white rounded-md cursor-pointer" onClick={()=>setMenu(!menu)}>
      {
        menu !== true?<IoIosMenu size="24" />:<IoIosClose size="24" />
      }
      </div>
    </div>
      <ul className="py-5 text-[15px] text-black flex flex-col gap-y-2">
        <NavLink className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/">
          <p>HOME</p>
        </NavLink>
         <NavLink onClick={(e)=>handleDropdown(e, 'aboutUs')} className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/doctors">
          <p className="">ABOUT US +</p>
          {
            dropdown.aboutUs &&
            <ul className="p-2 text-[13px] font-semibold mt-3 bg-gray-100 text-black w-full">
            <li className="py-2 px-4">Who We Are</li>
            <li className="py-2 px-4">Mission/Vision</li>
            <li className="py-2 px-4">Our Leadership</li>
            <li className="py-2 px-4">Advisory Board</li>
            <li className="py-2 px-4">Management Board</li>
            <li className="py-2 px-4">Contact Us</li>
          </ul>
          }
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'programmes')} to='/online-programmes' className="group px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit">
         <p> PROGRAMMES +</p>
         {
          dropdown.programmes &&
          <ul className="p-2 text-[13px] font-semibold mt-3 bg-gray-100 text-black w-full">
            <li className="py-2 px-4">Executive Education</li>
            <li className="py-2 px-4">Online Programmes</li>
            <li className="py-2 px-4">DigiKnowH</li>
          </ul>
         }
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'faculties')} className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>FACULTIES +</p>
         {
          dropdown.faculties &&
          <ul className="p-2 text-[13px] font-semibold mt-3 bg-gray-100 text-black w-full">
            <li className="py-2 px-4">Faculty of Business, Communication and Finance</li>
            <li className="py-2 px-4">Faculty of Good Governance, and Public Policy</li>
          </ul>
         }
        </NavLink>
        <NavLink className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>NEWS&EVENTS</p>
        </NavLink>
        <NavLink className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>SUPPORT AND GUIDANCE</p>
        </NavLink>
        <NavLink onClick={(e)=>handleDropdown(e, 'download')} className="px-[9px] hover:text-[#8B0002] [&.active]:text-[#8B0002] no-underline text-inherit" to="/contact">
          <p>DOWNLOADS +</p>
         {
          dropdown.download &&
          <ul className="p-2 text-[13px] font-semibold mt-3 bg-gray-100 text-black w-full">
            <li className="p-2">2024 Course Brochure</li>
          </ul>
         }
        </NavLink>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Navbar;

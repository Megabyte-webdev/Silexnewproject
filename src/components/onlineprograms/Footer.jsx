// import { NavLink } from "react-router-dom";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import logo from "../../assets/logo-white.png";
import appStore from "../../assets/online-programmes/appstore.png";
import playStore from "../../assets/online-programmes/playstore.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:px-[2%] px-[4%] mt-[5%] bg-gray-900 text-white min-h-96 mx-auto w-full">
      <div className="mx-auto py-4 my-6 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        <section className="sm:basis-[48%] lg:basis-[23%] h-max md:w-1/2 w-full m-2 transition-all ease-in-out duration-300">
          <div className="flex flex-col gap-y-3 text-xl text-white">
            <img src={logo} className="w-60" />
            <p className="text-[18px]">Westplein 12-14</p>
            <p className="text-[18px]">3016 BM Rotterdam</p>
            <p className="text-[18px]">The Netherlands</p>
            <p className="text-[18px]">+31(0)10 307 2137</p>
          </div>
          <div className="my-4 flex gap-3">
            <p className="flex items-center justify-center w-10 h-10 rounded-full bg-white"><TiSocialFacebook className="text-blue-900" size="24" /></p>
            <p className="flex items-center justify-center w-10 h-10 rounded-full bg-white"><TiSocialTwitter className="text-blue-700" size="24" /></p>
            <p className="flex items-center justify-center w-10 h-10 rounded-full bg-white"><TiSocialLinkedin className="text-teal-900" size="24" /></p>
            <p className="flex items-center justify-center w-10 h-10 rounded-full bg-white"><TiSocialInstagram className="text-teal-900" size="24" /></p>
          </div>
          
        </section>
        <section className="text-white sm:basis-[48%] lg:basis-[23%] font-medium flex flex-col gap-y-3 h-max md:w-1/2 w-full m-2 transition-all ease-in-out duration-300">
          <p className="text-[18px]">Main Navigation</p>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            Home
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            About Us
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            Programmes
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            New & Events
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            Contract
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            Faculties
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2" href="tel:+23481062344890">
            DigiKnowH
          </Link>
        </section>
        <section className="text-white sm:basis-[48%] lg:basis-[23%] font-semibold flex flex-col gap-y-3 justify-end h-max md:w-1/2 w-full m-2 transition-all ease-in-out duration-300">
          <p className="text-[18px]">Information Center</p>
          <Link className="no-underline text-inherit text-[15px] mx-2">
            How to Register
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2">
            Support & Guidance
          </Link>
          <Link className="no-underline text-inherit text-[15px] mx-2">
            Blog
          </Link>
        </section>
        <section className="text-white sm:basis-[48%] lg:basis-[23%] font-semibold flex flex-col gap-y-3 justify-end h-max md:w-1/2 w-full m-2 transition-all ease-in-out duration-300">
          <p className="text-[18px]">Now Available</p>
          <img className="w-40 rounded-md mx-2" src={playStore} alt="" />
          <img className="w-40 rounded-md mx-2" src={appStore} alt="" />
        </section>
      </div>
      
    </div>
    <div className="py-4 bg-white w-[90%] mx-auto my-2 text-sm md:text-[18px] font-medium flex flex-col md:flex-row items-center gap-3 md:justify-between text-center">
    <p>Copyright &copy; 2023 Axpos By Jegtheme. All rights reserved</p>
    <div className="flex gap-x-2">
      <p>Term & Conditions</p>
      <p>Privacy Policy</p>
    </div>
  </div>
    </>
  );
};

export default Footer;

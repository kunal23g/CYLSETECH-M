import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row  mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-6xl   font-foundersGrotesk font-bold mb-4">Have a project<br />in mind?<br />Contact Us!</h2>
            <div className="mt-4">
              {/* <p className="text-sm ml-5 text-gray-400">LET'S CONNECT:</p> */}
             <Link to="/contact" className='group relative px-6 py-4 lg:px-5 lg:py-2 mt-6 lg:mt-3 bg-zinc-900 rounded-full uppercase text-white flex items-center  overflow-hidden w-fit'>
                        <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>Contact Us </span>
                        <div className='relative z-10 w-2 h-2 bg-zinc-100 rounded-full ml-4 transition-colors duration-300 group-hover:bg-black'></div>
                        <div className='absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'></div>
                    
                    </Link>   
                      </div>
          </div>
          <div>
            {/* <p className="text-sm text-gray-400 mb-2">OUR LOCATION:</p> */}
            {/* <p className="text-xl"><br /></p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
          <div>
            <h3 className="text-gray-400 mb-4">UI/UX DESIGN:</h3>
            <ul className="space-y-2">
              <li>UX Audit</li>
              <li>UI Design</li>
              <li>UX Design</li>
              <li>UX Research</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">PRODUCT DESIGN:</h3>
            <ul className="space-y-2">
              <li>🔥 AI & ML</li>
              <li>SaaS</li>
              <li>Web App</li>
              <li>Mobile App</li>
              <li>Website Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">AGENCY:</h3>
            <ul className="space-y-2">
              <li>OUR STORY</li>
              <li>CAREERS</li>
            </ul>
            <div className="mt-4">
              <p>TERMS OF SERVICES</p>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">OUR SOCIAL:</h3>
            


    <div className="flex flex-wrap gap-2">
      {['LINKEDIN', 'FACEBOOK', 'INSTAGRAM'].map((social) => (
        <button 
          key={social} 
          className="
            px-3 py-1 border border-white rounded-full text-xs
            relative overflow-hidden
            group transition-colors duration-300 ease-out
            hover:text-black
          "
        >
          <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black">
            {social}
          </span>
          <div 
            className="
              absolute bottom-0 left-0 w-full bg-white
              transform translate-y-full transition-transform duration-300 ease-out
              group-hover:translate-y-0
            "
            style={{ height: '100%' }}
          ></div>
        </button>
      ))}
    </div>
  
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center text-sm">
          <p>CYLSETECH — AI + Product Design Agency.</p>
          <p>All Rights Reserved © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import logo from '../../images/logo.png'
import '../Navbar/Navbar2.css'

function Navbar2() {
  return (
    <nav className="bg-[#EDF1F1]  border-zinc-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href='#' className="ml-4 flex items-center h-[10vh] w-[16vw] ">
          <img src={logo} alt=" GreenPlore Logo" className="mt-6"  /></a>
          
        

         {/* Search Bar */}
         <div className="flex items-center flex-grow max-w-xl mx-4  ">
          <input
            type="text"
            placeholder="Search for..."
            className="w-full p-2 border border-gray-400 rounded-md outline-none focus:ring focus:ring-green-300"
          />
          <button className="ml-2 p-2 group hover:bg-[#52B788] transition-transform  rounded-full flex items-center justify-center h-10 w-10" >
            <AiOutlineSearch className="w-5 h-5  group-hover:text-white " />
          </button>
        </div>

        {/* Icons and Button */}
        <div className="flex items-center space-x-4 mr-8">
          <button className="p-2">
            <AiOutlineUser className=" hover:scale-110 w-6 h-6 hover:text-[#2D6A4F] transition-transform   text-gray-800" />
          </button>
          <button className="p-2">
            <AiOutlineShoppingCart className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#2D6A4F] text-gray-800" />
          </button>
          <button className="p-2">
            <AiOutlineHeart className="w-6 hover:text-red-700 h-6 hover:scale-110 transition-transform  text-gray-800" />
          </button>
          <button className="bg-[#52B788]  hover:scale-110 transition-transform text-white px-4 py-2 rounded-full">
            become a seller
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
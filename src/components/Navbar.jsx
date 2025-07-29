import React from "react";
import '../App.css'
import logo from '../images/logo.png'

function Navbarjsx(){
    return(
       <nav className="bg-gray-900 text-white px-20 py-3 flex justify-between w-full top-0 items-center font-serif">
          <div className="flex items-center gap-4">
            <img src={logo} className="w-40" />
               <h6 className="text-xl font-bold">Sheer Driving Pleasure</h6>
          </div>

  <ul className="flex gap-6 text-lg font-bold font-Poppins">
    <li className="hover:text-blue-400 cursor-pointer hover:border-b-2">Home</li>
    <li  className="hover:text-blue-400 cursor-pointer hover:border-b-2">
        <a href="#carSection">Cars</a>
    </li>
    <li className="hover:text-blue-400 cursor-pointer hover:border-b-2">About</li>
    <li className="hover:text-blue-400 cursor-pointer hover:border-b-2">Contact</li>
  </ul>
</nav>
    );
}

export default Navbarjsx;




import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a> Categories </a>
          <ul className="p-2">
            <li><a>CPU / Processor</a></li>
            <li><a>Motherboard</a></li>
            <li><a>RAM</a></li>
            <li><a>Power Supply Unit</a></li>
            <li><a>Storage Device</a></li>
            <li><a>Monitor</a></li>
            <li><a>Others</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-xl normal-case btn btn-ghost">HM-Pc-Builder</a>
  </div>
  <div className="hidden navbar-start lg:flex">
    <ul className="px-1 menu menu-horizontal">
      
      <li tabIndex={0}>
        <details>
          <summary> Categories </summary>
          <ul className="p-2">
          <li><a>CPU / Processor</a></li>
            <li><a>Motherboard</a></li>
            <li><a>RAM</a></li>
            <li><a>Power Supply Unit</a></li>
            <li><a>Storage Device</a></li>
            <li><a>Monitor</a></li>
            <li><a>Others</a></li>
          </ul>
        </details>
      </li>
      <li><a>Offers</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
      <li><a>Account</a></li>
    
    </ul>
  </div>
  <div className="navbar-end">
  
    <a className="btn"> PC Builder</a>
  </div>
</div>
            
        </>
    );
};

export default Navbar;
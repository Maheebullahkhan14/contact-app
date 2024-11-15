import React, { useEffect, useState } from 'react';
import { categories } from "../../contants";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";





const SideBarMenu = ({ setSelectedCategory , selectedCategory }) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() =>{
    setIsOpen(false);
  },[selectedCategory])

  return (
    <div>
      <button onClick={toggleMenu} className="menu-toggle-button">
        {isOpen ? <IoIosCloseCircleOutline/> : <IoMenu />}
      </button>

      <div className={`side-menu-nav ${isOpen ? 'open' : ''}`}>
        {categories.map(({ name, icon }) => (
          <button 
            key={name} 
            onClick={() => setSelectedCategory(name.toLowerCase())}
          >
            <span className="category-icon">{icon}</span>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;

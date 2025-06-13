// src/components/Navbar/Navbar.tsx
import React from 'react';
import { NavbarProps }  from '../../types/navbar'; // Assuming NavbarProps is defined in a separate file


// Use React.FC<NavbarProps> to explicitly type the functional component.
// This provides type checking for props and a return type of JSX. Element.
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex w-full bg-sidebar h-10 border-b-1 border-t-1 border-gray-600">
      <div className="h-full w-full ">
        <div className="w-40 flex h-full justify-center items-center ">
          
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
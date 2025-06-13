import React from 'react';
import { SidebarProps } from '../../types/sidebar';
const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="h-screen bg-sidebar min-w-12 border-r-1 border-gray-600">
            <div className="h-10 m-1 flex justify-center items-center border-3 border-orange-300">

            </div>

        </div>
    );
};
export default Sidebar;


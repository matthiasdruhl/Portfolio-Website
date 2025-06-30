import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarProps } from '../../types/sidebar';
import { useFiles } from '../../context/FileContext';
import { fileSystem } from '../../data/cliData';

const Sidebar: React.FC<SidebarProps> = ({ onToggleFileExplorer }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addOpenFile } = useFiles();
    
    // Find the About Me file in the file system
    const aboutMeFile = fileSystem.children
        ?.find(folder => folder.name === 'About_Me')
        ?.children?.find(file => file.name === 'About_Me.txt');

    const navItems = [
        { name: 'Home', path: '/', icon: 'home' },
        { name: 'Terminal', path: '/cli', icon: 'terminal' },
        { 
            name: 'AboutMe.txt', 
            path: `/text-viewer?path=${encodeURIComponent(aboutMeFile?.content || '')}`, 
            icon: 'description' 
        },
        { name: 'Resume', path: '/resume', icon: 'article' }
    ];

    const handleNavClick = (item: typeof navItems[0]) => {
        // Add file to open tabs if it's About Me or Resume
        if (item.name === 'AboutMe.txt') {
            addOpenFile({ name: 'AboutMe.txt', path: item.path });
        } else if (item.name === 'Resume') {
            addOpenFile({ name: 'Resume', path: item.path });
        }
        navigate(item.path);
    };

    const isActive = (item: typeof navItems[0]) => {
        if (item.path.startsWith('/text-viewer')) {
            // For text viewer pages, check both pathname and search params
            return location.pathname + location.search === item.path;
        }
        // For other pages, just check the pathname
        return location.pathname === item.path;
    };

    return (
        <div className="h-screen bg-sidebar min-w-12 border-r-1 border-gray-600 flex flex-col">
            {/* File Explorer Toggle - Now at the top */}
            <div className="h-14  flex justify-center items-center">
                <button 
                    onClick={onToggleFileExplorer}
                    className="w-full h-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                    <span className="material-icons text-lg">folder</span>
                </button>
            </div>

            {/* Navigation Links */}
            {navItems.map((item) => (
                <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`h-14 flex justify-center items-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors w-full ${
                        isActive(item) ? 'border-l-2 border-blue-500 text-white' : ''
                    }`}
                >
                    <span className="material-icons text-lg">{item.icon}</span>
                </button>
            ))}
        </div>
    );
};

export default Sidebar;


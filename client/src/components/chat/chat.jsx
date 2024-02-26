import React, { useState } from 'react';
import "./chat.scss";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                {isSidebarOpen ? '<' : '>'}
            </div>
            {isSidebarOpen && (
                <div className="options">
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

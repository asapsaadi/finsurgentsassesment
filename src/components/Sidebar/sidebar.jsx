import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src="icons/appLogo.png" alt="LOGO" className="logo-icon" />
                <div className="logo-text">FinSurgents</div>
            </div>
            <div className="manage">
                <ul className="nav">
                <p>Manage</p>    
                </ul>
            </div>
            <div>
                <ul className="nav">
                    <li>
                    <img src="icons/DB.png" alt="Dashboard" className="nav-icon" />
                        Dashboard
                    </li>
                    <li>
                    <img src="icons/payments.png" alt="Dashboard" className="nav-icon" />
                        Payments
                    </li>
                    <li>
                    <img src="icons/ledger.png" alt="Dashboard" className="nav-icon" />
                        Ledger
                    </li>
                    <li>
                    <img src="icons/notification.png" alt="Dashboard" className="nav-icon" />
                        Notifications
                    </li>
                    <li>
                    <img src="icons/setting.png" alt="Dashboard" className="nav-icon" />
                        Settings
                    </li>
                </ul>
            </div>
            <div className="preferences">
            <ul className="nav">
                <p>Preferences</p>    
                </ul>
            </div>
            <div>
                <ul className="nav">
                    <li>Theme</li>
                    <li>Security</li>
                </ul>
            </div>
            <div className="user">
                <img src="profile.jpg" alt="Profile" className="user-icon" />
                <p>Imran Khan</p>
                <p>ik@finsurgents.com</p>
            </div>
        </div>
    );
};

export default Sidebar;

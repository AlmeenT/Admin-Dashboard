import React from 'react'
import '../CSS/sidebar.css';
import { FaChartBar, FaSignOutAlt, FaChartPie, FaWallet, FaEnvelope, FaUserAlt } from 'react-icons/fa';
const SideBar = () => {
  return (
    <aside className='sidebar-section'>
        <div className='sidebar-logo'>
            <h1>SH-75</h1>
        </div>
        <div className='sidebar-menu'>
            <ul className='menu-nav'>
                <li>
                    <span className='icon'><FaChartBar /></span>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span className='icon'><FaWallet /></span>
                    <span>Wallet</span>
                </li>
                <li>
                    <span className='icon'><FaChartPie /></span>
                    <span>Statistics</span>
                </li>
                <li>
                    <span className='icon'><FaEnvelope /></span>
                    <span>Messages</span>
                </li>
                <li>
                    <span className='icon'><FaUserAlt /></span>
                    <span>Profile</span>
                </li>
            </ul>
        </div>
        <div className='logout-division'>
            <div className='divider'>
                <hr/>
            </div>
            <div className='logout-container'>
                <ul className='menu-nav'>
                    <li>
                        <span className='icon'><FaSignOutAlt /></span>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default SideBar
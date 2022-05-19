import React from 'react'
import '../CSS/sidebar.css';
import { FaChartBar, FaSignOutAlt, FaChartPie, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                <Link to='/team'><li>
                    <span className='icon'><FaChartPie /></span>
                    <span>Team members</span>
                </li></Link>
                <Link to='/client'><li>
                    <span className='icon'><FaEnvelope /></span>
                    <span>Clients</span>
                </li></Link>
                <Link to='/product'><li>
                    <span className='icon'><FaUserAlt /></span>
                    <span>Product</span>
                </li></Link>
            </ul>
        </div>
        <div className='logout-division'>
            <div className='divider'>
                <hr/>
            </div>
            <div className='logout-container'>
                <ul className='menu-nav'>
                    <Link style={{textDecoration:'none'}} to='/'><li>
                        <span className='icon'><FaSignOutAlt /></span>
                        <span>Logout</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default SideBar
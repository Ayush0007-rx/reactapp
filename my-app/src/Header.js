
import React from 'react';
import './App.css';
import logo from './image2.jpg';

function Header() {
  return (
    <header style={headerStyle}>
        <div className="logo" style={{display: 'flex',paddingLeft: '50px'}}>
        <img src={logo} alt="UnStop Logo" style={logoStyle} />
            <input type="text" placeholder="Search..." style={searchBarStyle} />
            <ul className='nav-list' style={{display: 'flex', listStyleType: 'none', paddingRight: '20px' , alignItems: 'center', gap: '40px'}}>
                <li style={{ paddingRight: '20px'}}>Home</li>
                <li style={{ paddingRight: '20px'}}>About</li>
                <li style={{ paddingRight: '20px'}}>Services</li>
                <li style={{ paddingRight: '20px'}}>Contact</li>
                <li style={{ paddingRight: '20px'}}>Login</li>
            </ul>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  width: '120px',
  height: '50px',// Adjust the height as needed
  marginRight: '700px',
  marginTop: '7px' // Optional: Add some margin to separate the logo from the navigation items
};

const searchBarStyle = {
  padding: '20px',
  fontSize: '1em',
  marginLeft: '20px' // Optional: Add some margin to separate the search bar from the navigation items
};

export default Header;


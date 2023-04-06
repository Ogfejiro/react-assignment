import React from 'react'
import AppLaunch from './AppLaunch';
import MenuItem from './MenuItem';
import './styles/header.css';
import Avatar from './Avatar';

const Header = () => {
  return (
    <div className="app-header">
    <div className="app-header-menu">
      <MenuItem text={"Gmail"} /> 
      <MenuItem text={"Images"} />
      <AppLaunch/>
      <Avatar />
    </div>
  </div>
  )
}

export default Header;
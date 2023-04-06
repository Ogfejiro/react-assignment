import React from 'react'
import avatar from './images/avatar.jpg';
import "./styles/header.css";

export default function Avatar() {
  return (
    <div><img className="avatar" src={avatar} alt="Avatar"></img></div>
  )
}

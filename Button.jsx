import React from 'react'
import './styles/button.css';

export default function Button(props) {
  return (
    <>
      <div className="buttons">{props.right}</div>
      </>
  )
}

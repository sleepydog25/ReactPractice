import React from 'react'

const Button = ({children, text, color, onClick}) => {
  return (
    <button
    style={{backgroundColor: color}}
    onClick={onClick?onClick:null}>
      {text}
      {children}
    </button>
  )
}

export default Button;
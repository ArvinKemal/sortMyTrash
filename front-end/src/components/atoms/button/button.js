import React from 'react'
import './button.css'

const Button = (props, ...rest) => {
  return (
    <div>
        <button className='button' {...rest}>{props.title}</button>
    </div>
  )
}

export default Button
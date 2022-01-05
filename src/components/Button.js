import React from 'react';
import '../styles/Button.css';

function Button(props) {
  return (
    <div className='button_wrapper'>
      <button className={props.buttonStyle}>{props.buttonName}</button>
      <div>{props.buttonName}</div>
    </div>
  )
}

export default Button;
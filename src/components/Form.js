import React from 'react';
import '../styles/Form.css';
import Button from '../components/Button';

function Form() {
  return (
    <form className='form flex'>
      <div className='form_header flex'>
        <p>Sing</p>
        <p>In</p>
      </div>
      <div className='form_inputs flex'>
        <div class="input_group">
          <input className='input_body' type="text" name='' id="dynamic-label-input" placeholder="First Name" />
          <label className='input_label' for="dynamic-label-input">First Name</label>
        </div>
        <div class="input_group">
          <input className='input_body' type="text" id="dynamic-label-input" placeholder="Last Name" />
          <label className='input_label' for="dynamic-label-input">Last Name</label>
        </div>
      </div>
      <Button buttonStyle='button' buttonName='Sign In' />
    </form >
  )
}

export default Form;
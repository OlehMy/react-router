import React from 'react';
import '../styles/Home.css';
import Button from '../components/Button';
import Form from '../components/Form';


function Home() {
  return (
    <section className='home-page flex'>
      <div className='container'>
        <div className='home-page_wrapper flex'>
          <Form />
          <div className='home-page_header flex'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
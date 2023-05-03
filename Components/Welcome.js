import Navbar from './Navbar'
import SearchBox from './SearchBox'
import React, { useState } from "react";
import Image from 'next/image';
import glossary from '../public/glossary.jpeg'


const Welcome = () => {
  return (
    <div className=''>
      <Navbar />
      <div>
        <div> 
          {/* <img src="/glossary.jpeg" /> */}
        </div>
        <div>
         <SearchBox/>
        </div>
      </div>
    </div>
  );
}

export default Welcome;


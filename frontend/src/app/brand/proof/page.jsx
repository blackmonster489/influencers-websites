'use client'

import React, { useEffect, useState } from 'react'
import classes from "./proof.module.css";
import uploadproof from '../uploadproof/page';


const browseproof = () => {

  const [uploadedproof] = useState([]);

  const fetchproof = async (values) => {
    console.log(values);
    const res = await fetch("http://localhost:5000/uploadproof/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
  
  }
  useEffect(() => {
  
    fetchproof()
  }, [])



const displayproof = () => {
  return(
    <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 uppercase lg:text-5xl dark:text-white">
      </h1>
      
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
    {
          uploadedproof.map((info) => {
            return(
    
      <div>
        
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src={"http://localhost:5000/" + info.image}
          alt=""
        />
        
      </div>
                  )
                })
              }
    </div>
  </div>
</section>
  )
}




  return (
    <div>
      <div className={classes.image}></div>

          {displayproof()}
    </div>
  )
}

export default browseproof
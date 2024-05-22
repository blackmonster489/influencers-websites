'use client'
import React, { useEffect, useState } from 'react'
import classes from "./browse.module.css";
import userProfile from '../(main)/userProfile/page';

const browseInfluencer = () => {

  const [influencerList, setInfluencerList] = useState([]);

  const fetchInfluencer = async (values) => {
    console.log(values);
    const res = await fetch("http://localhost:5000/userprofile/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setInfluencerList(data)
  }

  useEffect(() => {
  
    fetchInfluencer()
  }, [])





  const displayinfluencer = () => {
    return(
      <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="mb-2 text-5xl font-extrabold leading-tight text-gray-900">
        Browse Influencers
      </h2>
      <p className="mb-20 text-lg text-3xl text-gray-700">
        Explore Influencers & Find Perfect Influencers For your Brands.
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {
          influencerList.map((info) => {
            return(
        <div>
          <a href="#">
            <img
              src={"http://localhost:5000/" + userprofile.photo}
              className="object-cover w-full h-56 mb-5 bg-center rounded"
              alt="Kutty"
              loading="lazy"
            />
          </a>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">

            <a href="#" className="text-gray-900 hover:text-purple-900">
             {info.name}
            </a>
          </h2>

          <p className='mb-3 text-sm font-normal text-gray-900'>
           {info.gender}
          </p>
          <h2 className='text-blue-700 font-semibold'>
            Followers:
            <p className="mb-3 text-sm font-normal text-gray-900">
            {info.followers}
            </p>
          </h2>
          <p className="mb-3 text-sm font-normal text-gray-900">

            <a href="#" className="text-gray-900 hover:text-purple-700">
              <h2 className='text-blue-700 font-bold'>Links:</h2> {info.socialLinks} 
            </a>
          </p>
          <p className='mb-3 text-sm font-normal text-gray-900'>
            {info.phoneNumber}
          </p>
         
          <p className=' text-ellipsis overflow-hidden mb-3 text-sm font-normal text-gray-900'>

           <h2 className=' text-blue-700 font-bold'>Bio:</h2>{info.bio}
          </p>
         
          

        </div>
        
            )
          })
        }
      
      </div>


    </section>
    )
  }


  return (
    <div>
      <div>
        <nav className="bg-black shadow dark:bg-gray-800">
          <div className="container flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-white">

            <div className={classes.Navbar1}>
              <h1><b>Awsm</b></h1>
            </div>
            <div className={classes.Navbar2}>
              <h1><b>Influencer</b></h1>
            </div>
            <a
              href="/"
              className="text-white transition-colors duration-300 transform dark:text-white border-b-2 border-white mx-1.5 sm:mx-6"
            >
              home
            </a>





            <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" />
            <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" />
            <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" />


            <a href="/userProfile"><button className={classes.btn1}>Join As Creator</button></a>



          </div>


        </nav>


      </div>

  {
    displayinfluencer()
  }
    

    </div>
  )

}


export default browseInfluencer
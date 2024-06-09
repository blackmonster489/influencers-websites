'use client';
import React, { useEffect, useState } from 'react'
import classes from "./brandcampaign.module.css";
import toast from 'react-hot-toast';


const BrowseCampaign = () => {

  const [campaignList, setCampaignList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('influencer')));

  const fetchCampaignDetails = () => {
    fetch('http://localhost:5000/campaign/getall')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCampaignList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCampaignDetails();
  }, [])

  const makeEnrollment = (campaignId) => {
    
    fetch('http://localhost:5000/enrollment/add', {
      method: 'POST',
      body: JSON.stringify({
        campaign: campaignId,
        influencer: currentUser._id,
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
        if(response.status === 200){
          toast.success('Enrolled in Campaign Successfully');
        }
    }).catch((err) => {
        console.log(err);
    });
  }

  const checkEnrolled = (campaignId) => {
    fetch('http://localhost:5000/enrollment/getbyinfluencer/' + campaignId)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data) {
          toast.error('Already Enrolled')
        } else {
          makeEnrollment(campaignId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleEnrollment = (campaignId) => {
    if (!currentUser) {
      toast.error('Login to Enroll');
      return;
    } else {
      fetch('http://localhost:5000/enrollment/check-enrollment', {
        method: 'POST',
        body: JSON.stringify({
          campaign: campaignId,
          influencer: currentUser._id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.status === 200) {
            toast.error('Already Enrolled');
          } else if (response.status === 404) {
            makeEnrollment(campaignId);
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  const displayCampaigns = () => {
    return campaignList.map(campaign => (
      <section className="lg:flex">
        <div className="lg:w-1/2 ">
          <p className="text-2xl font-bold tracking-wider text-grey-900 uppercase mt-5 dark:text-black">{campaign.headline}</p>
          <h2 className="mt-5 text-2xl font-semibold text-blue-800 uppercase dark:text-white">
            {campaign.brandname}
          </h2>
          
          <p className=' mt-5 font-bold text-red-700 uppercase'>
            {campaign.slogan}          </p>
          <p className='mt-5 font-bold text-black-900 captalize'>
            {campaign.description}          </p>
          <p className='mt-5 font-semibold uppercase'>
            Dates: {new Date(campaign.startingdate).toDateString()}, {new Date(campaign.enddate).toDateString()}
          </p>
          <p className='text-blue-700 mt-5'>
            {campaign.email}          </p>


          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={() => handleEnrollment(campaign._id)}>Enroll</button>


        </div>
        <div className="mt-4 lg:w-1/3 lg:mt-0">
          <img
            className="object-cover mx-5 w-full h-64 rounded-lg md:h-96"
            src={"http://localhost:5000/" + campaign.image}
            alt=""
          />
        </div>
      </section>
    ))
  }

  return (
    <header>
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


            <a href="/brand/managebrand"><button className={classes.btn1}>Manage Campaigns</button></a>
            <a href="/brand/proof"><button className={classes.btn2}>Uploaded Proofs</button></a>
            
            



          </div>


        </nav>

      </div>
      <div className={classes.image}>
      </div>
      <div className='grid place-items-center mt-16'>
      <a  href="user/manage-enrolled"><button type="button" class="text-white px-4 py-4  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View your applied campaigns</button>
      </a>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          </h1>
          <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">




          </div>
          <section className="mt-8 space-y-8 lg:mt-12">
            {displayCampaigns()}
          </section>
        </div>


      </section>

      <section className={classes.sections1}>
        <section className="lg:flex mt-5">




        </section>
      </section>



      < div className='grid place-items-center'> 
      < a href="/brand/addcampaign"><button className={classes.btn}><b>Add Campaigns</b></button></a>
      </div>






    </header>
  )
}

export default BrowseCampaign
import React from 'react'
import classes from "./brandcampaign.module.css";

const page = () => {
  return (
    <header>
      <div className={classes.image}>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          </h1>
          <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
            < a href="/brand/addcampaign"><button className="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-800 font-bold bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
              Add Campaign
            </button></a>
            <a href="/brandProfile"><button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-900 font-bold bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
              Create account as brand
            </button>
            </a>
            <a href="/userProfile"><button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-900 font-bold bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
              Create account as creator
            </button>
            </a>
            <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-900 font-bold bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-600 hover:border-gray-400">
              Branding
            </button>
          </div>
          <section className="mt-8 space-y-8 lg:mt-12">
            <section className="lg:flex">
              <div className="lg:w-1/2 ">
                <p className="text-2xl font-bold tracking-wider text-grey-900 uppercase mt-5 dark:text-black ">
                  "Unlock Your Creativity with Our Studio. Let Your Imagination Soar at "</p>
                <h2 className="mt-5 text-2xl font-semibold text-blue-800 uppercase dark:text-white">
                  Borcelle creative studio
                </h2>
                <p className=' mt-5 font-bold text-red-700 uppercase'>
                  "Where Creativity Takes Flight:Borcelle creative studio Igniting Ideas, Inspiring Innovation!"
                </p>
                <p className='mt-5 font-bold text-black-900 captalize'>
                  "Influencers, join us in capturing life's beauty. Share your unforgettable moments with Borcelle creative Studios and inspire others to do the same!"
                </p>
                <p className='mt-5 font-semibold uppercase'>
                  Dates: 25 May 2024, 31 May 2024
                </p>
                <p className='mt-5 font-semibold captalize' >
                  Location:Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
                </p>
                <a href=""><p className='text-blue-700 mt-5'>
                  borcellestudio@gmail.com
                </p>
                </a>
              </div>
              <div className="mt-4 lg:w-1/3 lg:mt-0">
                <img
                  className="object-cover mx-5 w-full h-64 rounded-lg md:h-96"
                  src="/images/logo.png"
                  alt=""
                />
              </div>
            </section>
            <section className={classes.sections}>
              <section className="lg:flex mt-5">
                <div className="mt-4 lg:w-1/3 lg:mt-0">
                  <img
                    className="object-cover w-full h-67 rounded-lg md:h-96"
                    src="/images/logo2.png"
                    alt=""
                  />
                </div>

                <div className="lg:w-1/2 mx-8">
                  <p className="text-2xl tracking-wider text-gray-900 font-bold uppercase dark:text-blue-400 ">
                    "Design Your Dream Space: Let Interior Design Shodwe studio Bring Your Vision to Life!"
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold text-blue-900 uppercase dark:text-white">
                    Shodwe Studio interior design
                  </h2>
                  <p className='mt-5 uppercase text-red-700 font-bold'>
                    "Designing Dreams, Crafting Comfort:Interior Design Studio Name Shodwe Creates Your Perfect Space!"
                  </p>
                  <p className='mt-5 font-bold captalize'>
                    "Influencers, ignite inspiration! Collaborate with Interior Design Studio Shodwe to showcase innovative designs and elevate spaces. Let's transform together!"
                  </p>
                  <p className='mt-5 font-semibold uppercase'>
                    Dates: 2 June 2024, 15 June 2024
                  </p>
                  <p className='mt-5 font-semibold captalize' >
                    Location:Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
                  </p>
                  <a href=""><p className='text-blue-700 mt-5'>
                    shodwestudio@gmail.com
                  </p>
                  </a>

                </div>

              </section>
            </section>
            <section className={classes.sections}>
              <section className="lg:flex">
                <div className="lg:w-1/2 ">
                  <p className="text-2xl font-bold tracking-wider text-grey-900 uppercase mt-5 dark:text-black ">
                    "Elevate Your Style: Adorn Yourself with Larana jewelery's Timeless Treasures!"</p>
                  <h2 className="mt-5 text-2xl font-semibold text-blue-800 uppercase dark:text-white">
                    Larana Jewelery
                  </h2>
                  <p className=' mt-5 font-bold text-red-700 uppercase'>
                    "Adorn Your Story, Sparkle with Glory: Laran Jewelery Where Every Gem Tells a Tale."
                  </p>
                  <p className='mt-5 font-bold text-black-900 captalize'>
                    "Influencers, let your shine inspire! Collaborate with [Jewelry Brand Name] to illuminate your audience with exquisite elegance. Let's adorn the world together!"
                  </p>
                  <p className='mt-5 font-semibold uppercase'>
                    Dates: 2 July 2024, 6 July 2024
                  </p>
                  <p className='mt-5 font-semibold captalize' >
                    Location:Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
                  </p>
                  <a href=""><p className='text-blue-700 mt-5'>
                    laranajewelery@gmail.com
                  </p>
                  </a>
                </div>
                <div className="mt-4 lg:w-1/3 lg:mt-0">
                  <img
                    className="object-cover mx-5 w-full h-64 rounded-lg md:h-96"
                    src="/images/jewelery.png"
                    alt=""
                  />
                </div>
              </section>
            </section>
          </section>
        </div>


      </section>

      <section className={classes.sections1}>
        <section className="lg:flex mt-5">
          <div className="mt-4 lg:w-1/3 lg:mt-0">
            <img
              className="object-cover mx-5 w-full h-67 rounded-lg md:h-96"
              src="/images/beauty.png"
              alt=""
            />
          </div>

          <div className="lg:w-1/2 mx-10">
            <p className="text-2xl tracking-wider text-gray-900 font-bold uppercase dark:text-blue-400 ">
              "Join the Beauty Revolution: Aurora skin care and beauty Empowers Confidence Through Self-Care!"
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-blue-900 uppercase dark:text-white">
              Aurora skincare & Beauty
            </h2>
            <p className='mt-5 uppercase text-red-700 font-bold'>
              "Empowering Your Beauty, Inside and Out."
            </p>
            <p className='mt-5 font-bold captalize'>
              "Ready to Inspire? Collaborate with Aurora skin care and beauty and Unleash the Power of Self-Expression!<br />#BeautyUnleashed"
            </p>
            <p className='mt-5 font-semibold uppercase'>
              Dates: 2 July 2024, 15 July 2024
            </p>
            <p className='mt-5 font-semibold captalize' >
              Location:Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed.
            </p>
            <a href=""><p className='text-blue-700 mt-5'>
              aurorabeauty@gmail.com
            </p>
            </a>

          </div>




        </section>
      </section>




      < a href="/brand/addcampaign"><button className={classes.btn}><b>Add Campaigns</b></button></a>



    </header>
  )
}

export default page
import React from 'react'
import classes from './about.module.css'

const About = () => {
  return (
    <div>
        <section className="bg-gray-700 dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="text-center">
    <i>
    <h1 className="text-2xl font-bold text-white capitalize lg:text-5xl dark:text-white">
        ABOUT US
      </h1>
    </i>
    <i>
      <p className="max-w-lg mx-auto mt-4 text-gray-200">
      Welcome to Awesome Influencer ,the premier platform connecting middle-level influencers with companies for effective collaboration.
       Our innovative platform bridges the gap between influencers seeking partnerships and companies searching for authentic brand ambassadors to promote their products .
       With focus on fostering genuine connections and driving impactful campaigns , We empower both influencers and companies to reach their target audiences and achieve their marketing goals.
      </p>
    </i>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://ideogram.ai/api/images/direct/7ZZJUYIcSjK3uMYCjThguQ.jpg"alt=""/>
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="/browse-influencer"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            Explore The Influencers
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          
          </p>
          <p className="mt-3 text-sm text-blue-500"></p>
        </div>
      </div>
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://ideogram.ai/api/images/direct/ogRQ5GSqSte6zV8yu9kHWg.png" alt=""/>
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="browse-campaign"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            Explore The Campaigns Of Brands 
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          
          </p>
          <p className="mt-3 text-sm text-blue-500"></p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About;
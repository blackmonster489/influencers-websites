import React from 'react'

const viewdetails = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 uppercase lg:text-3xl dark:text-white">
      Fashion Influencer
    </h1>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text-blue-500 uppercase"></p>
        <a
          href="#"
          className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
        >
          Bio
        </a>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
        Emma Johnson is a leading fashion influencer known for her chic, minimalist style and trendsetting outfits. With over 1.2 million followers on Instagram, Emma's keen eye for fashion has landed her collaborations with top brands like Gucci, Chanel, and Zara. Her blog, "Emma's Edit," offers daily style inspiration, beauty tips, and exclusive behind-the-scenes looks at the fashion industry. Emma's authenticity and passion for fashion make her a trusted voice and a source of inspiration for fashion enthusiasts worldwide.


        </p><br/>
        <h2 className='text-sm font-bold'>
            Social Links:
        </h2>
        <a
          href="#"
          className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
        >
            Instagram: @emma_johnson
            Blog: Emma's Edit
            Twitter: @EmmaJ_Fashion
            Pinterest: Emma Johnson
        </a>
        <div className="flex items-center mt-6">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              Amelia. Anderson
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lead Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default viewdetails
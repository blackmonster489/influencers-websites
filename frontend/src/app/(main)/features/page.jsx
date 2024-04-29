import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-gray-700 dark:bg-gray-900 H-full">
  <div className="container px-6 py-10 mx-auto">
    <i><h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
      Features
    </h1>
</i>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src="https://ideogram.ai/api/images/direct/kVb6O0hcS_-jRi9UefzSuQ.jpg" alt=""/>
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text-blue-500 uppercase">category</p>
        <a
          href="#"
          className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white"
        >
          All the features you want to know
        </a>
        <p className="mt-3 text-sm text-gray-200 dark:text-gray-300 md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
        <a
          href="#"
          className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default page
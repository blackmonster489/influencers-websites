'use client'
import React from 'react'
import Link from 'next/link';
import { useFormik } from "formik";
import toast from 'react-hot-toast';
import * as Yup from 'Yup';


const AddCampaign = () => {
  const AddCampaign = useFormik({
    initialValues: {
      headline: '',
      startingdate:'',
      enddate:'',
      image:''
    },
    onSubmit: (values) => {
      console.log(values);
      
      fetch('http://localhost:5000/campaign/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
       }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status === 200){
          toast.success('Add campaign successfully');
        }
        else{
          toast.error('user Registration failed');
        }
      }).catch((err) =>{
          console.log(err);
      });

    },

  });


  return (
    <div>
      <section className="bg-gray-700 dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                'url("https://ideogram.ai/api/images/direct/-iUW2F6YSSKc3b9THP2eew.png")'
            }}
          ></div>
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-4xl font-bold tracking-wider text-yellow-400 uppercase  dark:text-white">
                Add your brand Campaign Now
              </h1>
              <p className="mt-4 text-white dark:text-gray-400">
                Enter all the details given below to upload your brand campaign.
              </p>
              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">

                </h1>
                <div className="mt-3 md:flex md:items-center md:-mx-2">


                </div>
              </div>
              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"onSubmit={AddCampaign.handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm text-yellow-200 dark:text-gray-200">
                    Headline
                  </label>
                  <input
                    type="text"
                    id='headline'
                    placeholder="Enter the headline of your brand campaign"
                    onChange={AddCampaign.handleChange}
                    value={AddCampaign.values.headline}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                                               

                <div>
                  <label className="block mb-2 text-sm text-yellow-200 dark:text-gray-200">
                    Starting Date
                  </label>
                  <input
                    type="text"
                    id='startingdate'
                    placeholder="Enter starting date"
                    onChange={AddCampaign.handleChange}
                    value={AddCampaign.values.startingdate}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-yellow-200 dark:text-gray-200">
                    End  Date
                  </label>
                  <input
                    type="text"
                    id='enddate'
                    placeholder="Enter End date"
                    onChange={AddCampaign.handleChange}
                    value={AddCampaign.values.enddate}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                
                 <div>
                  <label
                    htmlFor="image"
                    className="block text-sm  text-yellow-200 dark:text-gray-300"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id='image'
                    onChange={AddCampaign.handleChange}
                    value={AddCampaign.values.image}
                    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                  />
                </div>


                
                <div className="flex overflow-hidden bg-blue-500 border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                  <button type='submit' className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-blue-800 dark:text-gray-300 gap-x-3 hover:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <span>Upload</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AddCampaign
'use client'
import React from 'react'
import Link from 'next/link';
import { useFormik } from "formik";
import toast from 'react-hot-toast';
import * as Yup from 'Yup';


const enrollment = () => {
    const enrollment = useFormik({
        initialValues: {
          username: '',
          userid:'',
          brandname:'',
        },
        onSubmit: (values) => {
            console.log(values);
      
            fetch('http://localhost:5000/enrollment/add', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                  toast.success('Add campaign successfully');
                }
                else {
                  toast.error('user Registration failed');
                }
              }).catch((err) => {
                console.log(err);
              });
      
          },
      
        });
  return (
    <div>
        <section className="max-w-4xl p-6 mx-auto bg-gray-900 rounded-md shadow-md dark:bg-gray-800">
  <h2 className="text-lg font-semibold text-yellow-200 capitalize dark:text-white">
    Enroll as an influencer for campaign
  </h2>
  <form onSubmit={enrollment.handleSubmit}> 
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-yellow-200 dark:text-yellow-200" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          onChange={enrollment.handleChange}
                    value={enrollment.values.username}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label className="text-yellow-200 dark:text-yellow-200" htmlFor="username">
          UserId
        </label>
        <input
          id="userid"
          type="text"
          onChange={enrollment.handleChange}
                    value={enrollment.values.userid}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-yellow-200 dark:text-gray-200"
          htmlFor="emailAddress"
        >
          Brand Name
        </label>
        <input
          id="brandname"
          type="text"
          onChange={enrollment.handleChange}
                    value={enrollment.values.brandname}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 dark:text-gray-200"
          htmlFor="passwordConfirmation"
        >
          Password Confirmation
        </label>
        <input
          id="passwordConfirmation"
          type="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
    </div>
    <div className="flex justify-end mt-6">
      <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        Save
      </button>
    </div>
  </form>
</section>

    </div>
  )
}

export default enrollment
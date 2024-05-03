'use client';
import React from 'react'
import Link from 'next/link';
import { useFormik } from "formik";
import toast from 'react-hot-toast';
import * as Yup from 'Yup';



const Signup = () => {
  const signupValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required').min(3, 'Name is Too Short'),
    email: Yup.string().email('Invalid Email').required('Email is Required'),
    password: Yup.string().required('Password is Required').min(6, 'Password is Too Short')
      .matches(/[A-Z]/, 'Password must contain uppercase letter')
      .matches(/[a-z]/, 'Password must contain lowercase letter')
      .matches(/[0-9]/, 'Password must contain number'),
    confirmPassword: Yup.string().required('Confirm Password is Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      
      fetch('http://localhost:5001/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
       }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status === 200){
          toast.success('user Registered Succesfully');
        }
        else{
          toast.error('user Registration failed');
        }
      }).catch((err) =>{
          console.log(err);
      });

    },
    validationSchema: signupValidationSchema
  });



  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-900">
  <div className="flex justify-center min-h-screen">
    <div
      className="hidden bg-cover lg:block lg:w-2/5"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")'
      }}
    ></div>
    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
      <div className="w-full">
        <h1 className="text-2xl font-semibold tracking-wider text-white capitalize dark:text-white">
          Get your free account now.
        </h1>
        <p className="mt-4 text-white dark:text-gray-400">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your profile.
        </p>
        <div className="mt-6">
          <h1 className="text-white dark:text-gray-300">
            Select type of account
          </h1>
          <div className="mt-3 md:flex md:items-center md:-mx-2">
            <button type='select' className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="mx-2">Brand</span>
            </button>
            <button type='select' className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="mx-2">Creator</span>
            </button>
          </div>
        </div>
        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={signupForm.handleSubmit}>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              name='name'
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {signupForm.touched.name && (
                          <small className="text-red-300">{signupForm.errors.name}</small>
                        )}
          </div>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              Last name
            </label>
            <input
              type="text"
              name='lname'
              placeholder="Snow"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              Phone number
            </label>
            <input
              type="text"
              id='pno'
              placeholder="XXX-XX-XXXX-XXX"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              id='email'
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              placeholder="johnsnow@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {signupForm.touched.email && (
              <small className='text-red-300'>{signupForm.errors.email}</small>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              id='password'
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              placeholder="Enter your password"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {signupForm.touched.password &&(
              <small className='text-red-300'>{signupForm.errors.password}</small>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm text-white dark:text-gray-200">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
              placeholder="Enter your password"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {signupForm.touched.confirmPassword &&(
              <small className='text-red-300'>{signupForm.errors.confirmPassword}</small>
            )}
          </div>
          <button type="submit" className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Sign Up </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a href="/login2"><h2 className='text-white  hover:underline'>Already have account?login</h2></a>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup
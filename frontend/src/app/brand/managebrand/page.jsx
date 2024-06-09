'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const managebrand = () => {

  const [ManageList, setManageList] = useState([]);

  const fetchBrands = async (values) => {
    console.log(values);
    const res = await fetch("http://localhost:5000/campaign/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setManageList(data)
  }
  useEffect(() => {

    fetchBrands()
  }, [])

  const deletecampaign = async(id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/campaign/delete/" +id,{
      method:"DELETE"
    })
    console.log(res.status);
    if(res.status === 200){
      toast.success("campaign deleted successfully")
      fetchBrands()
    }else{
      toast.error("something went wrong")
    }
  }


  const showCampaign = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            scope="col"
            className="py-3.5 px-4 font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <button className="flex items-center gap-x-3 focus:outline-none">
              <span>Brand Name</span>
              <svg
                className="h-3"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <path
                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <path
                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </svg>
            </button>
          </th>

          <th
            scope="col"
            className="px-12 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-4 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-4 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Starting Date
          </th>
          <th
            scope="col"
            className="px-4 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            End Date
          </th>
          <th scope="col" className="relative py-3.5 px-4">
            <span className="">Action</span>
          </th>
        </tr>
      </thead>

      {
        ManageList.map((info) => {
          return(
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            <tr>
              <td className="px-4 py-4 text-sm font-medium whitespace-nowrap align-top">
                <div>
    
                  <h2 className="font-medium text-gray-800 dark:text-white ">
                    {info.brandname}
                  </h2>
    
                </div>
              </td>
              <td className="px-12 py-4 text-sm font-medium whitespace-nowrap align-top">
                <div className="inline px-3 py-1 text-sm font-normal  dark:bg-gray-800">
                {info.email}
                </div>
              </td>
              <td className="px-4 py-4 text-sm align-top ">
                <div>
                  <h4 className="text-gray-700 dark:text-gray-200">
                    {info.description}
                  </h4>
    
                </div>
              </td>
              <td className="px-4 py-4 text-sm whitespace-nowrap align-top">
                <div className="flex items-center">
    
                  <p className="">
                  {new Date(info.startingdate).toDateString()}
                  </p>
                </div>
              </td>
              <td className="px-4 py-4 text-sm whitespace-nowrap align-top">
                <div className="">
                  <p>{new Date(info.enddate).toDateString()}</p>
                 
    
                </div>
    
    
              </td>
              <td className="px-4 py-4 text-sm whitespace-nowrap align-top">
              <button onClick={e => deletecampaign(info._id)} type="button" class="focus:outline-none text-white bg-red-800 hover:bg-yellow-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-green-800">Delete</button>
            
              </td>
            </tr>
           
          </tbody>
          )
        })
      }
     
    </table>
    )
  }


  return (
    <div>
      <>
        <section className="container px-4 mx-auto">
          <h2 className="text-5xl font-medium  mt-20 text-gray-800 dark:text-white">
            Manage  brand Campaigns
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">

          </p>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                 {
                  showCampaign()
                 }
                </div>
              </div>


            </div>
          </div>
          <div className="flex items-center justify-between mt-6">



          </div>
        </section>
      </>


    </div>
  )
}


export default managebrand
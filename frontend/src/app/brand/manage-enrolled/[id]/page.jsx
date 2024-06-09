'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ManageEnrolled = () => {

  const [enrolledCampaigns, setEnrolledCampaigns] = useState([]);
  const { id } = useParams();

  const fetchEnrolledCampaigns = () => {
    fetch('http://localhost:5000/enrollment/getbycampaign/' + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEnrolledCampaigns(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchEnrolledCampaigns();
  }, [])

  const showinfluencer = () => {
    return (
      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-12 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Influencer's Name
            </th>

            <th
              scope="col"
              className="px-12 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Influencer's email
            </th>

            <th
              scope="col"
              className="px-4 py-3.5  font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Enrolled On
            </th>
            <th scope="col" className="relative py-3.5 px-4">
              <span className="">Action</span>
            </th>
          </tr>
        </thead>


        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {
            enrolledCampaigns.map(campaign => (

              <tr>

                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap align-top">
                  <div className="">
                    {campaign.influencer.name}
                  </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap align-top">
                  <div className="">
                    {campaign.influencer.email}
                  </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap align-top">
                  <div className="flex items-center">

                    <p className="">
                      {new Date(campaign.createdAt).toDateString()}
                    </p>
                  </div>
                </td>
                < td className="px-4 py-4 text-sm whitespace-nowrap align-top">

                  {
                    campaign.proof ?
                      <img style={{height: 100}} src={'http://localhost:5000/' + campaign.proof} /> :
                      <p>Proof Not Submitted Yet</p>
                  }


                </td>
              </tr>
            ))
          }

        </tbody>


      </table>
    )
  }


  return (
    <div>
      <div>
        <section className="container px-4 mx-auto">
          <h2 className="text-5xl font-medium  mt-20 text-gray-800 dark:text-white">
            Enrolled Users Details
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">

          </p>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">


            {
              showinfluencer()
            }

          </div>
        </section>


      </div>
    </div>
  )
}

export default ManageEnrolled;
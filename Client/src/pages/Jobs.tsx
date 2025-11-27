import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const Jobs = () => {
  let navigate = useNavigate()

  return (
    <div>
      <Nav />
      <div className="border p-5 m-5 rounded-lg">

        <div className="flex flex-wrap items-center gap-2 mb-5">
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <p className="p-2 m-2 rounded-sm bg-black text-white">
            Beta 
          </p>

          <p className="break-normal w-full">
            Find a selection of jobs relevant to your skills. These are roles expected to be filled soon.
            Candidates who complete the technical assessment and meet the role's hiring criteria can expect
            receiving on interview invitation from Turing.
          </p>
  
        </div>

        <div className="border p-5 m-5 rounded-md flex justify-between">
          Data Scientist / Analyst
          <div>
            <button className="border rounded-sm p-4 m-5 hover:bg-gray-200 duration-150">
              View Job Description
            </button>
            <button className="border rounded-sm p-4 m-5 bg-blue-500 text-white hover:bg-sky-400 duration-150">
              Apply Now
            </button>
          </div>
        </div>

        <div className="border p-5 m-5 rounded-md flex justify-between">
          Senior Python Developer
          <div>
            <button className="border rounded-sm p-4 m-5 hover:bg-gray-200 duration-150">
              View Job Description
            </button>
            <button className="border rounded-sm p-4 m-5 bg-blue-500 text-white hover:bg-sky-400 duration-150">
              Apply Now
            </button>
          </div>
        </div>

        <div className="border p-5 m-5 rounded-md flex justify-between">
          Business Analyst
          <div>
            <button className="border rounded-sm p-4 m-5 hover:bg-gray-200 duration-150">
              View Job Description
            </button>
            <button className="border rounded-sm p-4 m-5 bg-blue-500 text-white hover:bg-sky-400 duration-150">
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Jobs

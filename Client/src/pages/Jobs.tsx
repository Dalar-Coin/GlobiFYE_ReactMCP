import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const Jobs = () => {
  let navigate = useNavigate()

  return (
    <div>
      <Nav />
      <div className="border p-5 m-5 rounded-lg">
        Recommended Jobs
        <div className="border p-5 m-5 rounded-md flex justify-between p-5">
          Data Scientist / Analyist
          <div>
            <button className="border rounded-sm p-4 m-5 hover:bg-gray-200 duration-150">
              View Job Description
            </button>

            <button className="border rounded-sm p-4 m-5 bg-blue-500 text-white hover:bg-sky-400 duration-150">
              Apply Now
            </button>
          </div>
        </div>
        <div className="border p-5 m-5 rounded-md flex justify-between p-5">
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
        <div className="border p-5 m-5 rounded-md flex justify-between p-5">
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

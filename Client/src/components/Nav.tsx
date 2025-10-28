import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <div className="flex gap-5">
          <div className="font-bold p-2">GlobiFYE</div>
          <div className="flex gap-2 text-gray-500">
            <div className="hover:bg-blue-100 p-2 hover:rounded-lg hover:text-blue-500 duration-250">
              Home
            </div>
            <div className="hover:bg-blue-100 p-2 hover:rounded-lg hover:text-blue-500 duration-250">
              Jobs
            </div>
            <div className="hover:bg-blue-100 p-2 hover:rounded-lg hover:text-blue-500 duration-250">
              Quizzes
            </div>
            <div className="hover:bg-blue-100 p-2 hover:rounded-lg hover:text-blue-500 duration-250">
              Challenges
            </div>
            <div className="hover:bg-blue-100 p-2 hover:rounded-lg hover:text-blue-500 duration-250">
              Turing Profile
            </div>
          </div>
        </div>
        <div>
          <div>Job Opportunities</div>
          <div>Danish</div>
        </div>
      </div>
    </div>
  )
}

export default Nav

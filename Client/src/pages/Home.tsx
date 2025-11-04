import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="container mx-auto flex justify-center gap-5">
      <div className="border 5 rounded-lg p-2">Hello</div>
      <div>
        <button
          className="border 5 rounded-lg p-2"
          onClick={() => navigate('/Login')}
        >
          To Login
        </button>
      </div>
    </div>
  )
}

export default Home

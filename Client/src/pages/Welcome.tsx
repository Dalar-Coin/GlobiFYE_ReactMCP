import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const Welcome = () => {
  let navigate = useNavigate()

  return (
    <div>
      <Nav />
      <div className="container mx-auto">Hello World</div>
    </div>
  )
}

export default Welcome

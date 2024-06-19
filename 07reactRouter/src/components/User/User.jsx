import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <span className='bg-gray-300 rounded-sm text-orange-700'>User: {userid}</span>
  )
}

export default User
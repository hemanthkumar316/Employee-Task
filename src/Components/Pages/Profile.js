import React from 'react'
import UserDetails from '../Users/UserDetails'

const Profile = () => {
  return (
    <div>
      <h1 style={{ fontSize: '60px', margin: '20px', textAlign: 'center', fontFamily: 'monospace' }}>Profile page</h1>
      <UserDetails />
    </div>
  )
}

export default Profile
'use client'
import PasswordGenerator from '@/shared/components/passsord-generator/password-generator/password-generator.component'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-[100vh] bg-[#309794]'>
      <PasswordGenerator />
    </div>
  )
}

export default Home
import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt='Logo'
          className='w-32 cursor-pointer'
        />

        {/* Right side */}
        {user ? (
          <div className='flex items-center gap-4'>
            
            {/* Applied Jobs */}
            <Link
              to="/applications"
              className="px-4 py-2 border rounded-full hover:bg-gray-100"
            >
              Applied Jobs
            </Link>

            <p className='max-sm:hidden'>
              Hi, {user.firstName || "User"} 👋
            </p>

            {/* Clerk user menu */}
            <UserButton afterSignOutUrl='/' />
          </div>
        ) : (
          <div className='flex gap-4'>
            <button
              onClick={() => navigate('/recruiter')}
              className='px-4 py-2 border rounded-full hover:bg-gray-100'
            >
              Recruiter Login
            </button>

            <button
              onClick={() => openSignIn()}
              className='px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

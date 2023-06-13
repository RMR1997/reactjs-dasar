import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div class="flex justify-center items-center min-h-screen bg-[url('../../public/images/rubick.jpg')] object-center bg-cover">
    <AuthLayout title="Register" desc="Register" type="register">
    <Register></Register>
    {/* <p className='text-sm mt-4 text-center'>
                Already have an account? {" "}
                {/* <a className='font-bold text-blue-500' href="/register">Register</a> */}
                {/* <Link className='font-bold text-blue-500' to="/loginpage">Login</Link>
            </p>  */}
    </AuthLayout>
    </div>
  )
}

import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
  
        <>
     <div class="flex justify-center items-center min-h-screen bg-[url('../../public/images/rubick.jpg')] object-center bg-cover">
        <AuthLayout title="Login" desc="silahkan masuk" type="login">
        <Login>
        </Login>
        {/* <p className='text-sm mt-4 text-center'>
                Don't have account? {" "}
                
                {/* <a className='font-bold text-blue-500' href="/register">Register</a> */}

                {/* <Link className='font-bold text-blue-500' to="/registerpage">Register</Link>
            </p> */} 
        </AuthLayout>
    </div>


        </>

       
    

    )
}





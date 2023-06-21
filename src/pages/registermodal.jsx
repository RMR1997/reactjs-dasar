import React from 'react'

import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'
import AuthLayout2 from '../components/template/AuthLayout2'

export default function RegisterModal(props) {
const {onClick} = props;
  return (
<>
<AuthLayout2 title="Register" desc="Register" type="register">
    <Register onClick={onClick} ></Register>
    {/* <p className='text-sm mt-4 text-center'>
                Already have an account? {" "}
                {/* <a className='font-bold text-blue-500' href="/register">Register</a> */}
                {/* <Link className='font-bold text-blue-500' to="/loginpage">Login</Link>
            </p>  */}
    </AuthLayout2>
   
</>
 
    

  )
}

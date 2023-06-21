import React, { useEffect, useRef, useState } from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'
import RegisterModal from '../../../pages/registermodal';

export default function Login() {
  const [showModal, setShowModal] = useState(false);
// event.preventDefault(); = buat mencegah
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("terklik login")
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email",event.target.email.value)
    localStorage.setItem("password",event.target.password.value)
    window.location.href = "/products";
  };
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  })


  return (
    <form onSubmit={handleLogin}>
        <InputForm label="Email" type="email" name="email" placeholder="Masukan Email" ref={emailRef}/>
        <InputForm label="Password" type="password" name="password" placeholder="Masukan Password" />
        <Button color="bg-blue-500 hover:bg-blue-700">Login</Button>
        <Button color="bg-blue-500 hover:bg-blue-700" type="button" onClick={() => setShowModal(true)}>MODAL</Button>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <RegisterModal onClick={() => setShowModal(false)} ></RegisterModal>
        
        
        </div>
        </div>
        </div>
      ): null }
    </form>
  )
}

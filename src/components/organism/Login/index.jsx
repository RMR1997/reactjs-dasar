import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login() {
  return (
    <form action="">
        <InputForm label="Email" type="email" placeholder="Masukan Email"/>
        <InputForm label="Password" type="password" name="password" placeholder="Masukan Password"/>
        <Button color="bg-blue-500">Login</Button>
    </form>
  )
}

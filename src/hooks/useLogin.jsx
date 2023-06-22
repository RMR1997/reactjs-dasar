import React, { useEffect, useState } from 'react'
import { getUsername } from '../services/auth.services';

export const useLogin= () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
      const token = localStorage.getItem("token");
      // cek token, kalo ga ada token bakal diarahin ke login
      if(token) {
        setUsername(getUsername(token));
      } else {
        window.location.href = "/loginPage";
      }
    },[]);

  return username;
}

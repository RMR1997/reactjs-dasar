import React from 'react'

export default function Button(props) {
    const {color = "bg-black", children, size, type="submit", onClick=() => {}} = props;

        return <button type={type} onClick={onClick} className={`h-10 w-full mt-5 px-6  font-semibold rounded-md ${color} ${size} text-white`} >{children}</button>
  
}

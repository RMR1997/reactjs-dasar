import React, { useEffect, useState } from 'react'

const Counter =() => {
    const [count,setCount] = useState(0);

    // ComponentDidMount = dijalankan sekali saat komponen pertama kali dirender
    useEffect(() => {
        console.log("Component mounted");
    },[])

    //componentDidUpdate = dijalankan setiap kali 'count' berubah
    useEffect(() => {
    console.log("Count updated:", count);
    }, [count])

    //componentWillUnmount = dijalankan sebelum komponen dihapus dari DOM
    useEffect(() => {
        return() =>{
            console.log("Component unmounted");
        }
    },[])

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
    };



  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'> LifeCycle using counter</h1>
        <div className='flex items-center justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={decrement}>-

            </button>
            <span className='mx-4 text-2xl'>{count}</span>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>+

            </button>
        </div>
    </div>
  )

};

export default Counter;
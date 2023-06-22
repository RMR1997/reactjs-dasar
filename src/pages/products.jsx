import React, { useEffect, useState } from 'react'
import CardProduct from '../components/organism/CardProduct'
import { getProduct } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';


// const data = [{
//   id:1,
//   image: "public/images/rubick.jpg",
//   title: "RUBICK",
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
//   price: 45000,
// },

// {
//   id:2,
//   image: "public/images/rubick.jpg",
//   title: "GRAND",
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
//   price: 55000,
// },

// {
//   id:3,
//   image: "public/images/rubick.jpg",
//   title: "MAGUS",
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
//   price: 75000,
// },

// ]

export default function ProductPage() {
  //State /UseState = data/penyimpanan yang di pake buat menghandle komponen yang berubah2

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const username = useLogin();
  //   {
  //   id:1,
  //   qty:1,
  // },

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  },[]); //dependencies array (array kosong) = untuk menghentikan looping(warning)

  //fungsi reduce buat eksekusi tiap element dalam array trus nampilin kedalam sebuah nilai
  

  useEffect(() => {
    if(data.length > 0 && cart.length > 0) {
      const sum= cart.reduce((acc, item) =>{
        const product = data.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0)
      setTotalPrice(sum);
      //opsional: ubah data json ke string karna local storage cuma bisa nyimpen data string
      localStorage.setItem("cart",JSON.stringify(cart));
    }
  }, [cart,data]); //sebagai dependencies array yang mana untuk memantau perubahan state

  const handleAddToCart = (id) => {

    // setCart([
    //   ...cart,
    //   {
    //     title:"odeng",
    //     qty:1,
    //   }
    // ]);
    
    // kalo ada id yang sama maka akan menambahkan qty +1
    if(cart.find((item) => item.id === id)) {
      //dia akan mapping dan membongkar itemnya 
      setCart(cart.map((item) => (item.id === id ? {...item, qty:item.qty +1}:item )) )
    } else {
      //kalo datanya cuma 1 maka cuma akan di set satu
      setCart([...cart, {id, qty:1 }]);
    }
  }

 useEffect(() => {
  getProduct((data) => {
    console.log(data);
    setData(data);
  });
 },[]);

  const handleLogout = () => {
   localStorage.clear()
    window.location.href = '/loginPage' 
  }

  return (
    <>
    <div className='bg-red-500 flex gap-10 w-full h-10'>
    <div className='flex '>
      <a href="/profile"><h1 className='text-white text-2xl  font-bold'>Hi : {username} MF</h1></a> 
    </div>
     <div className='flex justify-end'>
      <button onClick={handleLogout} className='text-white font-bold'>LOGOUT</button></div>
      
      
    </div>
    <div className='flex w-full flex-col-reverse justify-center items-center'>
    <div className="flex flex-wrap w-full h-full justify-center items-center  gap-7">
    <div className='grid grid-cols-4 gap-20'>
    {data.length > 0 &&
    data.map((data) => (

      <CardProduct keys={data.id}>
      <CardProduct.Header image={data.image}></CardProduct.Header>
      <CardProduct.Body title={data.title}>{data.description}</CardProduct.Body>
      <CardProduct.Footer price={data.price} id={data.id} handleAddToCart={handleAddToCart}>BELI</CardProduct.Footer>

      </CardProduct>

    ))}
    </div>

    </div>
    <div className='w-2/6 flex flex-col justify-center items-center text-center mb-10'>
        <h1 className='text-3xl p-10 '>CART</h1>
        {/* <ul>
          {cart.map((item) => (
            <li key={item.id} >
              {item.name}
            </li>
          ))}
        </ul> */}
        <table className='border px-2 py-4 rounded-xl table-auto border-separate border-spacing-x-5'>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>Price</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
            cart.map((item) => {
              const products = data.find((data) => data.id === item.id);
              return (
                <tr key={item.id}>
                  <td className='text-center'>{products.title}</td>
                  <td>{products.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
                  <td className='text-center'>{item.qty}</td>
                  <td>{(item.qty * products.price).toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</td>
                </tr>
              )
            })}
            
            <tr className='font-bold '>
              <td colSpan={3}> TOTAL PRICE</td>
              <td> {totalPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
    
    </>
  )
}

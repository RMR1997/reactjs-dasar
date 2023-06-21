import React, { useState } from 'react'
import CardProduct from '../components/organism/CardProduct'

const data = [{
  id:1,
  image: "public/images/rubick.jpg",
  title: "RUBICK",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 45000,
},

{
  id:2,
  image: "public/images/rubick.jpg",
  title: "GRAND",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 55000,
},

{
  id:3,
  image: "public/images/rubick.jpg",
  title: "MAGUS",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 75000,
},

]

export default function ProductPage() {
  //State /UseState = data/penyimpanan yang di pake buat menghandle komponen yang berubah2

  const [cart, setCart] = useState([
  //   {
  //   id:1,
  //   qty:1,
  // },
  ]);

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

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/loginPage' 
  }

  return (
    <>
    <div className='bg-red-500 flex text-center items-center justify-center'>
      <button onClick={handleLogout} className='text-white'>LOGOUT</button>
    </div>
    <div className='flex flex-col-reverse justify-center items-center'>
    <div className="flex justify-center items-center  gap-7">
    {/* <CardProduct>
        <CardProduct.Header image="public/images/rubick.jpg"></CardProduct.Header>
        <CardProduct.Body title="RUBICK THE GRAND MAGUS">lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </CardProduct.Body>
        <CardProduct.Footer harga="Rp.20.000">BELI</CardProduct.Footer> */}
{/* 
    </CardProduct> */}
    {data.map((product) => (

      <CardProduct keys={product.id}>
      <CardProduct.Header image={product.image}></CardProduct.Header>
      <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
      <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}>BELI</CardProduct.Footer>

      </CardProduct>

    ))}
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
            {cart.map((item) => {
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
          </tbody>
        </table>
    </div>
    </div>
    
    </>
  )
}

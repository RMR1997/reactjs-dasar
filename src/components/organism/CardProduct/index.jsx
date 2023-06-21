import React from 'react'
import Button from '../../atom/Button';

// NESTED COMPONENT

export default function CardProduct(props) {
    const {children} = props;
  return (
    <>
    <div className='rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-xl'>
        <div className='w-full max-w-xs bg-white rounded-lg'> {children} </div>
    </div>
    </>
  )
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="#">
            <img src={image} alt="gambar" className='p-4 rounded-t-lg' />
        </a>
    )
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <>
        <div className='px-5 py-4'>
        <a href="#">
            <h5 className='text-3xl font-bold text-slate-900'> {title}
            </h5>
            <p className='mt-1 text-black text-base text-justify'> {children}</p>
        </a>
        </div>
       
        </>
    )
}

const Footer = (props) => {
    const {price, children, handleAddToCart,id} = props;
    return (
        <>
        <div className='px-5 py-4'>
        <a href="#">
            <p className=' text-center text-2xl font-semibold text-slate-900'> price: {price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
              </p>
              <Button color="bg-blue-500" onClick={() => handleAddToCart(id)}>{children}</Button>
          </a>
        </div>
        
      </>
    )
   
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
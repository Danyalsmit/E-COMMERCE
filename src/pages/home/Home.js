import React from 'react'
import Layout from '../../Component/layout/Layout'
import HeroSection from '../../Component/heroSection/HeroSection'
import Filter from  '../../Component/filter/Filter' 
import ProductCart from '../../Component/produtcart/ProductCart';
import Track from '../../Component/track/Track';
import Testimonial from '../../Component/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'



  function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=> state.cart)
  
    console.log(cartItem)
  
    const addCart = () => {
      dispatch(addToCart("shirt"));
    }
  
    const deleteCart = () => {
      dispatch(deleteFromCart("shirt"));
    }
  return (
    
      <Layout>
      {/* {<div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> } */}

        <HeroSection />
        < Filter />
        <ProductCart/>
        <Track/>
        <Testimonial/>

      </Layout>
    
  )
}

export default Home


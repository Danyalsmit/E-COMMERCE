import React from 'react'
import Layout from '../../Component/layout/Layout'
import HeroSection from '../../Component/heroSection/HeroSection'
import Filter from  '../../Component/filter/Filter' 
import ProductCart from '../../Component/produtcart/ProductCart';
import Track from '../../Component/track/Track';
import Testimonial from '../../Component/testimonial/Testimonial';
import { Link } from 'react-router-dom';




  function Home() {
    
  return (
    
      <Layout>
      
        <HeroSection />
        < Filter />
        <ProductCart/>

        <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
        </div>
        <Track/>
        <Testimonial/>

      </Layout>
    
  )
}

export default Home


import React from 'react'
import { Carousel } from "@material-tailwind/react";


function HeroSection() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">

      <img
        src="https://wezank.com/wp-content/uploads/2016/10/e-commerce-01.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />

      <img
        src="https://pluspng.com/img-png/e-commerce-png-download-ecommerce-png-images-transparent-gallery-advertisement-952.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />

      <img
        src="https://www.opendesignsin.com/blog/wp-content/uploads/2020/07/Scope-of-eCommerce.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    
    
  );
}

export default HeroSection;



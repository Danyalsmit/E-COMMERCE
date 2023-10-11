import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Nav';



function Layout({ children }) {
  return (
    
    <>
      <Nav/>
      
      <div className="content">
        {children}
      </div>
      <Footer />
  </>
  )
}

export default Layout;
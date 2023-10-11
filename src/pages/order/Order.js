import React, { useContext } from 'react'
import Layout from '../../Component/layout/Layout'
import myContext from '../../contex/data/myContext'

function Order() {
  const context = useContext(myContext);
  const{name,rollno}=context;
  return (
    <div>
      <Layout>
        order
        <h1> Name:{name}</h1>
        <h1>RollNo:{rollno}</h1>

      </Layout>
    </div>
  )
}

export default Order

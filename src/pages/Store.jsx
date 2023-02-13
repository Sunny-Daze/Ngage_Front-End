import React from 'react'
import './Store.css'
import Card from '../widgets/CardWithPoints'
import ProductCard from '../widgets/ProductCard'

function UserControl() {
    return (
      <div className='Store'>
         <Card
        heading="Items Store"
        subheading="Welcome to the store, where you can cash in you hard-earned points!"
        coins="100"
      />

      <div className="Store-Products">
        <ProductCard productName="Food coupon" productDesc = "Delicious Large Pizza" userPoints = "3000"/>
        <ProductCard productName="Abhinav coupon" productDesc = "Hottest Randi Abhinav" userPoints = "5"/>
        <ProductCard productName="Cofee coupon" productDesc = "Choclate Tatte" userPoints = "1000"/>
        <ProductCard productName="Merch coupon" productDesc = "Authentic Merchandise" userPoints = "5000"/>
      </div>
      </div>
    );
  }
  
  export default UserControl;
  
import React, { Component } from 'react'
import HeroElement from "./HeroElement";
import productData from './productData.js'
import ProductCard from "./ProductCard";

export default class HeroSection extends Component {
  render() {
    return (
    <>
      <div className="flex justify-center m-2">
        <HeroElement className={`w-8/12 h-1/4 rounded-md shadow-lg text-neutralBlack`}/>
      </div>
      <div className="flex flex-col md:flex-row justify-center m-2">
            {productData.map(itemOfData=>{
              
            return <ProductCard header={itemOfData.header} innerText={itemOfData.innerText} src={itemOfData.src} altText={itemOfData.altText} category={itemOfData.category} key={itemOfData.id}/>})}
      </div>
    </>
    )
  }
}

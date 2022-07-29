import HeroElement from "./HeroElement";
import productData from './productData.js'
import ProductCard from "./ProductCard";
import ControlButton from "../Header/ControlButton";

export default function Main({className}) {
  return (
    <div className={className}>
        <section className={'flex justify-center m-2'}>
          <HeroElement className={`w-8/12 h-1/4 rounded-md shadow-lg text-neutralBlack`}/>
        </section>
        <section className={'flex flex-col md:flex-row justify-center m-2'}>
        
          {productData.map(itemOfData=>{
            console.log(itemOfData);
            return <ProductCard header={itemOfData.header} innerText={itemOfData.innerText} src={itemOfData.src} altText={itemOfData.altText} category={itemOfData.category} key={itemOfData.id}/>})}
          
          
        </section>
        <section className={'flex flex-col md:flex-row justify-center m-2'}>
          <ControlButton name="View More"/>
        </section>
          
        
        
        
        
    </div>
    
    
    
  )
}

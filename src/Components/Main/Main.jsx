
import HeroSection from "./HeroSection";

//import ControlButton from "../Header/ControlButton";
import {
  
  Routes,
  Route,
} from "react-router-dom";
export default function Main({className}) {
  return (
    <div className={className}>
        <Routes>
          <Route path="/general" element={<HeroSection/>}>
    
          </Route>
          {/*<Route>
            <section className={'flex flex-col md:flex-row justify-center m-2'}>
            
              {productData.map(itemOfData=>{
              console.log(itemOfData);
              return <ProductCard header={itemOfData.header} innerText={itemOfData.innerText} src={itemOfData.src} altText={itemOfData.altText} category={itemOfData.category} key={itemOfData.id}/>})}
            </section>
          </Route>
          <Route>
            <section className={'flex flex-col md:flex-row justify-center m-2'}>
              <ControlButton name="View More"/>
            </section>
          </Route>*/}
          
        </Routes>
    </div>)
}

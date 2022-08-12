//import CatalogueSection from "./CatalogueSection/CatalogueSection";
import HeroSection from "./HeroSection/HeroSection";

import { Routes, Route } from "react-router-dom";

const Main = ({ className }) => {
  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
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

        {/*<Route
      path="/catalogue"
      element={
        <Context>
          <CatalogueSection />
        </Context>
      }
    ></Route>*/}
      </Routes>
    </div>
  );
};

export default Main;

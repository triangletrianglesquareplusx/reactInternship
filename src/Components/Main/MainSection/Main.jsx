import CatalogueSection from "../CatalogueSection/CatalogueSection";
import HeroSection from "../HeroSection";
import { Component } from "react";
//import ControlButton from "../Header/ControlButton";
import { Routes, Route } from "react-router-dom";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: this.props.className,
    };
  }
  render() {
    return (
      <div className={this.state.className}>
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
          <Route path="/catalogue" element={<CatalogueSection />}></Route>
        </Routes>
      </div>
    );
  }
}

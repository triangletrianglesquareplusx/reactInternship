import InfoBox from "./InfoBox";
import ErrorBox from "./ErrorBox";


//import data from './data.js';
import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: this.props.className
    }
  }
  render() {
    return (
      <div className={this.state.className}>
      </div>
    )
  }
}



// export default function Footer({className}) {
//   return (
//     <div className={className}>
//       {/*map and importing works fine*/}
//       {data.map((item, index)=><InfoBox key={index} value={item.name}/>)}
//     </div>
//   )
// }

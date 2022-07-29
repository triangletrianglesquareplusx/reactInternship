import React, { Component } from 'react'

export default class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            header: this.props.header,
            innerText: this.props.innerText,
            altText: this.props.altText,
            src: this.props.src,
            category: this.props.category,
            id: this.props.id,
            coolFactor: this.props.cool,
            count: 0,
            countUp(){
                this.count++;
            }

        }

    }
    render() {
        console.log(this.state.count);
        return (
            
        <div className="p-5 m-2 rounded-md shadow-lg border border-gray-700">
            <h2>{this.state.header}</h2>
            <div className="flex">
            
                <img src={this.state.src} alt={this.state.altText}></img>
                <p>{this.state.innerText}</p>
                <p>{this.state.category}</p>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Click me and get {this.state.count} counts</button>
                
            </div>
            
            <button>View Me</button>
            
        </div>
        )
  }
}

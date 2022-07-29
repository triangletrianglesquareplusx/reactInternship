import React, { Component } from 'react'

export default class ErrorBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: this.props.index,
      value: 'This is an error'
    }
  }
  render() {
    return (
      <div key={this.state.key} className={`hover:border-b-2 hover:border-b-simpleWhite  p-5 m-3`} ><p>{this.state.value}</p></div>
    )
  }
}
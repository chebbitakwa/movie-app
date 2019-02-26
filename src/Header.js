import React, { Component } from 'react';
import Rating from './Rating'

      

class Header extends Component {
  constructor(props) {
    super(props);
    
  }

  changehandle=(e)=>{this.setState({search:e.target.value})
  
  this.props.data(e.target.value)
  }
  


  render() {
    return (
      
<div className="header">
<input onChange={this.changehandle} placeholder="Search..."/>


</div>
    );
  }
}

export default Header;

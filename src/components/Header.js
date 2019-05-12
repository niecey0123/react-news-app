import React, { Component } from 'react';

class Header extends Component{
render(){
    return(
        
        <div className="Head">
        <form onSubmit={this.handleForSubmit}>
            <h2>Choose Your News Source</h2>
            <input type="text" placeholder="ESPN"></input>
            <input type="submit" value="Select"></input>
        </form>
        </div>
    )
}
}


export default Header
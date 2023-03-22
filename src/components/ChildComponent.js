import React, {Component} from 'react'

class ChildComponent extends Component{

    render(){
        return(
            <button onClick={this.props.greetParent('child').bind(this)}> click me </button>
        )
    }
}

export default ChildComponent
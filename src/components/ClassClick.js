import React, {Component} from 'react'

class ClassClick extends Component{

    clickHandler(){
        alert('Clicked');
    }

    render(){
        return (
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
        </div>
        )
    }
}

export default ClassClick
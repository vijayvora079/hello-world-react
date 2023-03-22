import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

    greetHandler(childName){
        alert('Clicked!' + childName)
    }

    render(){
        return(
            <ChildComponent greetParent={this.greetHandler}></ChildComponent>
        )
    }
}

export default ParentComponent
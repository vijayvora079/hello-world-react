import React, {Component} from 'react'

class Person extends Component{

    render(props){
        return(

            <h2>I am {this.props.person.name}. I am {this.props.person.age} Years Old.</h2>
        )
    }
}

export default Person

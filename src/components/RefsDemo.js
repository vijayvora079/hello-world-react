import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{

    constructor (){
        super()

        this.emailInputRef = React.createRef();
    }

    componentDidMount(){
        this.emailInputRef.current.focus()
    }

    submitHandler = () => {
        alert(this.emailInputRef.current.value)
        this.emailInputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input name='email' type='text' ref={this.emailInputRef}/>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
        )
    }
}

export default LifeCycleA
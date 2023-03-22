import React, {Component} from 'react'

class Form extends Component{

    constructor(){
        super();

        this.state = {
            username : ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    onSubmit = (event) => {
        alert(this.state.username)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={this.state.username} onChange = {this.handleOnChange}></input>
                </div>
               <button >Submit</button>
            </form>
        )
    }
}

export default Form
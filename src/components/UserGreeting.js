import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    render(){
        /*-----------1 if/else */
        /*if(this.isLoggedIn){
            return(
                <div>Hello Vijay</div>
            )
        }else{
            return(
                <div>Hello Guest1</div>
            )
        }*/

        /*-----------3 Element Variable */
        /*let message
        if(this.isLoggedIn){
            message = <div>Hello Vijay</div>
        }
        else{
            message = <div>Hello Guest2</div>
        }
        return <div>{message}</div>*/

        /*-----------3 Ternary operator */
        return this.isLoggedIn ? <div>Hello Vijay</div> : <div>Hello Guest3   </div>


    }
}

export default UserGreeting
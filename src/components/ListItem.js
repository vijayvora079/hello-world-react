import React, {Component} from 'react'
import axios from 'axios'

class NameList extends Component{

    constructor(){
        super()

        this.state = {
            listItem : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({listItem : response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (<div>
            List of Items
            {
                this.state.listItem.map(item => <div>{item.title}</div>)
            }
            </div>)
    }
}

export default NameList
import React, {Component} from 'react'

class LifeCycleA extends Component{

    constructor (){
        super()
        console.log('LifeCycle B - constructor()')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B - getDerivedStateFromProps()')
        return null
    }

    render(){
        console.log('LifeCycle B - render()')
        return('LifeCycle B')
    }

    componentDidMount(){
        console.log('LifeCycle B - componentDidMount()')
    }
}

export default LifeCycleA
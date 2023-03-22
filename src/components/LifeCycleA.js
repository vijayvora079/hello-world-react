import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{

    constructor (){
        super()
        console.log('LifeCycle A - constructor()')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A - getDerivedStateFromProps()')
        return null
    }

    render(){
        console.log('LifeCycle A - render()')
        return(<LifeCycleB></LifeCycleB>)
    }

    componentDidMount(){
        console.log('LifeCycle A - componentDidMount()')
    }
}

export default LifeCycleA
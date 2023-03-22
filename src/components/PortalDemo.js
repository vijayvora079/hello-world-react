import React, {Component} from 'react'
import ReactDom from 'react-dom'

class PortalDemo extends Component{

    render(){
        return ReactDom.createPortal(<h1>PortalDemo</h1>, document.getElementById('portal-root'))
    }

}

export default PortalDemo
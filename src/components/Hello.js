import React from 'react';


function Hello(props){
    return (
    <div id='hello' className='dummyClass' >
                <h1>Hello {props.name}</h1>
                {props.children}
            </div>
            )
}

/*
const Hello = (props) => React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello vijay'))
*/
export default Hello;
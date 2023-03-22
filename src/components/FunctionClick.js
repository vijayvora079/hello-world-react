import React from 'react'

function FunctionClick(){
    function clickHandler(){
        alert('Clicked');
    }

    return (
        <button onClick={clickHandler}>Click</button>
    );
}

export default FunctionClick
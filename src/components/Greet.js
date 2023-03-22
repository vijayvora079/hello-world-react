import React from 'react';

/*function Greet(){
    return <h1>welcome vijay</h1>;
}*/

// ES6 Code
/*export const Greet = (props) => <h1>Hello {props.name} {props.surname}</h1>*/

/*export const Greet = ({name, surname}) =>
    (
        <h1>Hello {name} {surname}</h1>
    )*/

export const Greet = props =>
    {
        const {name, surname} = props;
        return(
        <h1>Hello {name} {surname}</h1>
        )
    }
//export default Greet
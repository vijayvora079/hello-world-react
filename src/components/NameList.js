import React, {Component} from 'react'
import Person from './Person'

class NameList extends Component{


    render(){
        const persons = [
            {
                id : 1,
                name : 'vijay',
                age: 30
            },
            {
                id : 2,
                name : 'rinkal',
                age: 29
            }
            ]
        const personList = persons.map(person => <Person key={person.id} id={person.id} person={person}></Person>)

        return <div> {personList} </div>
    }
}

export default NameList
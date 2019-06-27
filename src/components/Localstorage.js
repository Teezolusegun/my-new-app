import React, {Component} from 'react'

class LocalStorage extends Component{
    render(){
     const   person = {
            name:'Emmanuel',
            age: '16'
        }
        const personToJson = JSON.stringify(person);
        //save to localstorage
        localStorage.setItem('newperson', personToJson);
        //retreive from ocalstorage 
        const getPerson = localStorage.getItem('newperson')
        const personParse = JSON.parse(getPerson)
        return(
<div>
    <h3>The stringified version is: <p>{getPerson}</p></h3>
    <h4>The parsed version is<p> {personParse.name} and {personParse.age}</p></h4>
</div>

        )
    }
}
export default LocalStorage;
import React, {Component} from 'react'
import Header from './Header';




export class Likes extends Component{
    state = {
        likes:0
    }
increaseLikes= ()=>{
    this.setState((prevState)=>{
return {
    likes: prevState.likes +1,
}
    })
}
decreaseLikes = ()=>{
    this.setState((prevState)=>{
        return{
            likes : prevState.likes -1
        }
    })
};

resetLikes = ()=>{
    this.setState({likes :0})
}

    render(){
return(
    <div>
      
        <Header  title='My Likes App'/>
        <h1>welcome to my likes app</h1>
        <h3>Likes: {this.state.likes}</h3>
        <button onClick={this.increaseLikes}>Like</button>
        <button onClick={this.decreaseLikes}>Unlike</button>
        <button onClick={this.resetLikes}>Reset</button>
    </div>
)
    }
    
}
export default Likes
import React, {Component} from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import Likes from './Likes'

class Todo extends Component{

    state = {
        todoItems : ['cook', 'eat','relax' ,  'code', 'facebook'],
        newTodo : ''
    }

    handleChange = (e)=>{
        this.setState({newTodo : e.target.value})
    
    }
    handleSubmit = (e)=>{
        
        this.setState( state =>{
            const todoItems = this.state.todoItems.concat(state.newTodo);
            return {
                todoItems,
                newTodo:'',
                
            }
           
        })
        console.log(this.state.todoItems)
       e.preventDefault()
       
    }
    render(){

        return(
           <div> <Header title = 'MY TODO TITLE' />
           
            <h1>Welcome to my todo App</h1>
            
            
                {
                    this.state.todoItems.map(item =>(<TodoItems individual = {item}/>))
                }
            <form onSubmit= {this.handleSubmit}>
                <label htmlFor="">Todo Items</label><br />
                <input type="text"
                 name="new-Todo-item" 
                 value= {this.state.newTodo} 
                 onChange={this.handleChange}
                 
                 /> {" "}<br />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
export default Todo;
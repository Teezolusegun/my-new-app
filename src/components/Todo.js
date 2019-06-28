import React, {Component} from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import Likes from './Likes'

class Todo extends Component{

    state = {
        todoItems : [],
        newTodo : ''
    }

    handleChange = (e)=>{
        this.setState({newTodo : e.target.value})
    
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.setState( prevState => {
            return { 
                todoItems: [...prevState.todoItems,this.state.newTodo],
                newTodo: ''
            }
                }
             )
        
    }

    componentDidUpdate(prevProps, prevState){
   if(prevState.todoItems.length !== this.state.todoItems.length){
const jsonstate = JSON.stringify(this.state.todoItems)
localStorage.setItem('todoItems',jsonstate)
   }
    }

    componentDidMount(){
        const itemsFromLocalStorage = localStorage.getItem('todoItems')
        const todoItems = JSON.parse(itemsFromLocalStorage)
        if(todoItems){ this.setState(()=>({
            todoItems 
        }))}
        
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
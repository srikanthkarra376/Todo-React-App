import React,{Component} from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    todos : [],
    isLoading : false
    }
    this.handleOnchange = this.handleOnchange.bind(this)
    this.deletehandler = this.deletehandler.bind(this)
  }
 componentDidMount() {
  this.setState({isLoading : true})
   fetch('https://jsonplaceholder.typicode.com/todos?_limit=1')
  .then(response => response.json())
  .then(data => 
    this.setState({
      isLoading:false,
       todos : data
      
    })
  )}
  handleOnchange(id) {
  this.setState(prevState=>{
    const UpdatedTodos = prevState.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })
    return {
      todos : UpdatedTodos
    }
  })
   
  }
  deletehandler(id){
    this.setState({
       todos :[...this.state.todos.filter(todo=>todo.id !== id)]
   })
  }
  addTodo = (title)=>{
    const newTodo = {
      id : uuid.v4(),
      title,
      completed :false
    }
  this.setState({todos : [...this.state.todos,newTodo]})
  }

  render(){
  const TodoItemComponent= this.state.todos.map(todo=>
  <TodoItem key={todo.id} 
        id = {todo.id}
        title={todo.title} 
        completed={todo.completed} 
        handleOnchange = {this.handleOnchange}
        deletehandler = {this.deletehandler}
 
        />)
  return (
      <div className="container m-3">
       <h1 className="m-2 text-info ">Welcome to a react Todo Application</h1> 
       <div className="jumbotron">
       <AddTodo addTodo={this.addTodo} />
       </div>
        <div className="container pt-4">
        <h4 >Your list of Todos:</h4>
        <small className="text-primary">(check the to strike & click on round circle to delete)</small>
        <p className="mt-1">{this.state.isLoading ? "Loading....." : TodoItemComponent}</p>
        </div>
       </div>
    )
  }
}
export default App
import React,{Component} from "react";

class AddTodo extends Component {
  constructor(){
    super()
    this.state = {
      title :""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleChange =(e) =>this.setState({[e.target.name] : e.target.value}) 

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title : ''})
  } 
  
  
  render() {
    return(
      <div className="container">
        <form className="form-inline"  onSubmit={this.handleSubmit}>
        <div className="row">
           <div className="col">
              <input name='title'
                 className="form-control" 
                 placeholder="add a todo ...."
                 type="text" 
                 value={this.state.title} 
                  onChange={this.handleChange} />
             </div>
           <div className="col">
               <input  className="btn btn-primary mb-2" type="submit" value="Add" />
          </div>
          </div>
        </form>
     </div>
    )
  }

}
export default AddTodo;
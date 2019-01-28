import React from 'react';
function  TodoItem (props) {
  const styles = {
     color : '#ddd',
     textDecoration:'line-through',
     paddingLeft:'10px'
    }
    const iconStyles = {
      cursor : "pointer"
    }
 return (
   <div className="container">
        <div className="card-text">
        <div class="input-group-prepend">
           <div class="input-group-text mb-2">
         <input
         className="m-2"
          type="checkbox" 
          onChange={()=>props.handleOnchange(props.id)} 
          checked={props.completed}/>
           <span  style={props.completed ? styles : null}>{props.title}</span>
           <i style={iconStyles} onClick={()=>props.deletehandler(props.id)} className="far fa-times-circle text-danger p-3"></i>
          </div>
          </div>
         
       </div>
     </div>
 
   
 )
}
export default TodoItem;
import React,{useContext} from 'react';
import useToggle from './Hooks/useToggle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import {DispatchContext} from './contexts/todos-context';

function Todo({task,id,completed}){
    const dispatch=useContext(DispatchContext);
    const [edit,toggle] =useToggle(false);
    return (    
                <ListItem style={{height:"64px"}}>
                    {edit?
                     <EditTodoForm  
                        id={id} 
                        task={task}
                        dispatch 
                        toggle={toggle}/>:
                    <>
                <CheckBox disableRipple tabIndex={-1} 
                    checked={completed}  
                    onClick={ () => dispatch({type:"TOGGLE",id:id})}/>
                    <ListItemText   
                    style={{textDecoration: completed?"line-through":"none"}}>
                       {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" 
                        onClick={()=>dispatch({type:"REMOVE",id:id})}>
                        <DeleteIcon/>
                    </IconButton  >
                     <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon/>
                    </IconButton>
                    </ListItemSecondaryAction>
                    </>
                    }
                </ListItem>
    )

}
export default Todo;
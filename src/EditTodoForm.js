import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './Hooks/useInputState';
import {DispatchContext} from './contexts/todos-context';

function EditTodoForm({id,task,toggle}){
  const dispatch = useContext(DispatchContext);
    const [value,handleChange,reset]= useInputState(task);
    return (
        <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch({type:"EDIT", id:id,newTask:value })
                reset();
                toggle(true)}}
              style={{marginLeft:"1rem"}}

            >
            <TextField 
                margin="normal" value={value} 
                onChange={handleChange}
                fullWidth
                autoFocus
                >
                
            </TextField>
            </form>
            )
}
export default EditTodoForm;
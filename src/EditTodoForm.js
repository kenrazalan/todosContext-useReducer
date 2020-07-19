import React, { useDebugValue } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './Hooks/useInputState';

function EditTodoForm({editTodo,id,task,toggle}){
    const [value,handleChange,reset]= useInputState(task);
    return (
        <form onSubmit={(e)=>{
                e.preventDefault();
                editTodo(id,value);
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
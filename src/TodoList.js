import React,{useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import {TodosContext} from './contexts/todos-context';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList(){
    const{todo} =useContext(TodosContext);
    if (todo.length)
    return (
      <Paper>
            <List>
                {todo.map((t,i)=>(
                    <>
                        <Todo {...t} key={t.id}/>
                        {i<todo.length-1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
        
    )
    else return null
}

export default TodoList;
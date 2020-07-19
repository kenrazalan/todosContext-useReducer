import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({todo,removeTodo,toggleTodo,editTodo}){
    if (todo.length)
    return (
        
        
        <Paper>
            <List>
                {todo.map((t,i)=>(
                    <>
                        <Todo
                            {...t}
                            key={t.id} 
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo} 
                            editTodo={editTodo}/>
                        {i<todo.length-1 && <Divider/>}
                     
                    </>

                ))}
            </List>
        </Paper>
        
    )
    else return null
}

export default TodoList;
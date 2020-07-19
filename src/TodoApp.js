import React,{useEffect} from 'react';
import useTodoState from './Hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp(){
    // const initialTodo=JSON.parse(window.localStorage.getItem("todo") || "[]" ) ;

    const initialTodo = [{id:1,task:"asd",completed: false}]
    const {todo,removeTodo,addTodo,editTodo,toggleTodo}= useTodoState(initialTodo)
    // const initialTodo= [
    //     {id:1, task:"Clean Fishtank", completed: false},
    //     {id:2, task: "Wash Car", completed: true},
    //     {id:3, task:"Cook", completed: false}]


    // useEffect(()=>{
    //     window.localStorage.setItem("todo",JSON.stringify(todo));
       
    // },[todo]);

    
return(<Paper
        style={{padding:0,
                margin:0,
                height:"100vh",
                backgroundColor:"#fafafa"}}
                elevation={0}>
         <AppBar color="primary" position="static" style={{height: "64px"}}>
            <ToolBar>
                <Typography color="inherit">TODOS WITH HOOK</Typography>
            </ToolBar >
         </AppBar>
         <Grid container justify="center" style={{marginTop: "2rem"}}>
         <Grid item xs={11} md={8} lg={4}>
         <TodoForm addTodo={addTodo}/>
         <TodoList 
            todo={todo} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
            editTodo={editTodo}/>
         </Grid>
        </Grid>
       </Paper>)
      
}
export default TodoApp;
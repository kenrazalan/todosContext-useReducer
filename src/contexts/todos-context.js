import React,{createContext} from 'react';
import useTodoState from '../Hooks/useTodoState';

const defaultTodos =[
    {id:1, task:"ads", completed: false},
    {id:2, task:"sdf g", completed: false}
]

export const TodosContext = createContext();

export function TodosProvider(props){
    const {todo,addTodo,removeTodo,toggleTodo,editTodo}= useTodoState(defaultTodos);
    return(
        <TodosContext.Provider value={{todo,addTodo,removeTodo,toggleTodo,editTodo }}>
            {props.children}
        </TodosContext.Provider>
    )
}
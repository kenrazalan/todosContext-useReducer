import React,{createContext,useReducer} from 'react';
import todoReducer from '../reducer/todo-reducer';

const defaultTodos =[
    {id:1, task:"ads", completed: false},
    {id:2, task:"sdf g", completed: false}
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todo,dispatch]= useReducer(todoReducer,defaultTodos);
    return(
        <TodosContext.Provider value={todo}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
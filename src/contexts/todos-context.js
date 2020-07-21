import React,{createContext} from 'react';
import useLocalStorageReducer from '../reducer/useLocalStorageReducer';
import todoReducer from '../reducer/todo-reducer';

const defaultTodos =[
    {id:1, task:"Code", completed: false},
    {id:2, task:"Eat", completed: false},
    {id:3,task:"Sleep", completed:true}
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todo,dispatch]= useLocalStorageReducer("todo",defaultTodos,todoReducer);
    return(
        <TodosContext.Provider value={todo}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
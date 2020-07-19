import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid'; 

export default initialTodo =>{
    const [todo,setTodo] = useLocalStorageState("todo",initialTodo);
    return{
        todo,
        addTodo: newTodoText =>{
            setTodo([...todo, { id:uuidv4(), task:newTodoText, completed: false } ])
        },
        removeTodo : todoID =>{
            const updatedTodo = todo.filter(todo=> todo.id !== todoID);
            setTodo(updatedTodo);
        },
        toggleTodo : todoId => {
            const updatedTodo = todo.map(todo => todo.id === todoId ? {...todo,completed: !todo.completed}: todo)
            setTodo(updatedTodo);
         },
         editTodo : (todoId,newTask) => {
            const updatedTodo = todo.map(todo => todo.id === todoId ? {...todo,task: newTask}: todo)
            setTodo(updatedTodo);
         }
}

}






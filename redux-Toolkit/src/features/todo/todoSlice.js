import { createSlice,nanoid } from "@reduxjs/toolkit";
//redux js provides us a nanoid method to generate unique  id's

//this is the initial state of the store
const initialState = {
    todos:[{id:1,text:"hello world"},]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState, //we can also write the initialState here also
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter( (todo)=>todo.id !== action.payload )
        }
    }


})


export const {addTodo,removeTodo} = todoSlice.actions //exporting the functionalities based on which we are going to alter the state
export default todoSlice.reducer //exporting the reducer for the store acknowledgement

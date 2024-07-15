import {configureStore} from '@reduxjs/toolkit' //this comes from core redux
//creating a store using the configure store method it takes a object inside it
import todoReducer from '../features/todo/todoSlice'

//exporting the store and providing the acknowledgement of reducers
export const store = configureStore({
    reducer: todoReducer
})


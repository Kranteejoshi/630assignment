
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxSlice from './reducerSlice/boxslice'
import productSlice from './reducerSlice/productSlice'
import userSlice from './reducerSlice/userSlice'


export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice,
    product: productSlice,
    user:userSlice,
  }
})
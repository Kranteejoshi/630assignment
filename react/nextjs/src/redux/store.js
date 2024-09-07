
import { configureStore } from '@reduxjs/toolkit'
import boxSlice from './reducerSlice/boxslice'
import productSlice from './reducerSlice/productSlice'
import userSlice from './reducerSlice/userSlice'
import counterSlice from './reducerSlice/counterSlice'



export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice,
    product: productSlice,
    user: userSlice,
  }
})

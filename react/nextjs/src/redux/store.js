
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxSlice from './reducerSlice/boxslice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice
  }
})
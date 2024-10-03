import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Kranti',
    email: '',
    isLoggedIn: false,
    isPremium: false,
    userPageID: ''
  },
  reducers: {
    loginUser: (state, action) => {
        state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
        state.isLoggedIn = false
      },

    changeUserPageId: (state, action) => {
      state.userPageID = action.payload
  }
  }
})


export const { loginUser, logoutUser, changeUserPageId } = userSlice.actions

export default userSlice.reducer
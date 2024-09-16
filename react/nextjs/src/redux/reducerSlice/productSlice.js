import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    wishListItems: [],
    cartItems: []
  },
  reducers: {
addtoWishList: (state, action) => {
  const searchedItem = state.wishListItems.find((item)=>{
    if(item.id === action.payload.id) return item
  })
if(searchedItem){
 state.wishListItems= state.wishListItems.filter((item)=>{
    if(item.id !== action.payload.id){
      return item
    }
  })
  
}else{
  state.wishListItems.push(action.payload)
  }
},
removeFromWishList: (state, action) => {
  
  },
    }
})

export const { addtoWishList, removeFromWishList } = productSlice.actions
export default productSlice.reducer




// import { createSlice } from '@reduxjs/toolkit'

// export const productSlice = createSlice({
//   name: 'product',
//   initialState: {
//     wishlistItems: [],
//     cartItems: []
//   },
//   reducers: {
// addToWishlist: (state, action) => {
//  const searchedItem = state.wishlistItems.find((item)=>{
//     if(item.id === action.payload.id) return item
//  })
//  if(searchedItem){
//    state.wishlistItems=  state.wishlistItems.filter((item)=>{
//         if(item.id !== action.payload.id){
//             return item
//         }
//     })
//  }else{
//     state.wishlistItems.push(action.payload)
//  }

// },
// removeFromWishlist: (state, action) => {

// },
//   }
// })


// export const { addToWishlist, removeFromWishlist } = productSlice.actions

// export default productSlice.reducer
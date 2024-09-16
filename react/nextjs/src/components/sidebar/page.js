'use client'
import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import {Listbox, ListboxItem} from "@nextui-org/react";

export default function Sidebar() {
  const {wishListItems}= useSelector(state=>state.product)
  return (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">

      {/* <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox> */}

      My wishlist item:
    {wishListItems.length>0 ? wishListItems.map((item, id) => {
      return <div className='flex'>
        <li>{id+1}--- {item.productName}</li>
         <FaTrash/>
        </div>
    }): "No Wishlist!"}

      </div>
  );
}











// 'use client'
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useSelector } from "react-redux";



// const Sidebar =() => {
//     const {wishlistItems}= useSelector(state=>state.product)
//     const {name} = useSelector(state=>state.user)

//   return (
//     <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    
//       {name}, your wishlist item:
//     {wishlistItems.length>0 ? wishlistItems.map((item,id)=>{
//         return <div className="flex">
//             <li>{id+1}-------- {item.productName}</li> 
//             <FaTrash/>
//         </div>
//     }): "No Wishlist!!"}
//     </div>
//   );
// }
// export default Sidebar




'use client'
import Sidebar from '@/components/sidebar/page'
import { addtoWishList } from '@/redux/reducerSlice/productSlice'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const Product = () => {
  const dispatch = useDispatch()
  const productList =[
    {id: 11, productName:'Hawkins cooker', price: 5000, productImage: 'https://ktmstores.com/wp-content/uploads/2020/11/Hawkins-Pressure-Cooker1.jpg'},
    {id: 21, productName:'Prestige cooker', price: 4000, productImage: 'https://m.media-amazon.com/images/I/71MMumUOEaL._AC_SL1500_.jpg'},
    {id: 15, productName:'Philips kettle', price: 7000, productImage: 'https://www.meroshopping.com/images/Electric_Kettle.jpg'},
    {id: 31, productName:'Soundcore headphone', price: 9000, productImage: 'https://anker.com.sg/cdn/shop/files/blue.jpg?v=1716170389&width=1200'},
    {id: 45, productName:'Dell monitor', price: 26000, productImage: 'https://maxit.com.np/storage/product/338/pvig0P4AIyyNanYQcClShmY6zFdZ8GFQ1ty3dMnO.jpg'}

  ]
  return (
    <div>
    <Sidebar/>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {productList.map((item, index) => (
      <Card shadow="sm" key={index} isPressable >
        <CardBody className="overflow-visible p-0">
        <FaHeart onClick={() => dispatch(addtoWishList(item))}className='absolute right-4 top-2 z-40'/>
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.productName}
            className="w-full object-cover h-[140px]"
            src={item.productImage}
          />
          
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.productName}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    ))}
  </div>
    
    {/* div with card taken from nextui */}
   
  </div>
  )
}

export default Product



//nextUI ko ListBox used




















// 'use client'
// import Sidebar from '@/components/sidebar/page'
// import { addToWishlist } from '@/redux/reducerSlice/productSlice'
// import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import { FaHeart } from 'react-icons/fa'
// import { useDispatch, useSelector } from 'react-redux'

// const Product = () => {
//     const dispatch = useDispatch()
//     const router = useRouter()
//     const [productList, setProductList] = useState([])
//     const fetchProducts = async()=>{
//      const res = await fetch('https://fakestoreapi.com/products')
//       const data = await res.json()
//       setProductList(data)
//     }

//     useEffect(()=>{
//       fetchProducts()
//     },[])
//     const {name} = useSelector(state=>state.user)
//   return (
//     <div>
//         <Sidebar/>
//         {JSON.stringify(productList)}
//         {name}
//         <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
//     {productList.map((item, index) => (
//       <Card shadow="sm"  key={index} >
//                <FaHeart  onClick={(e) =>{
//           e.stopPropagation()
          
//           dispatch(addToWishlist(item))}} className='absolute right-4 top-2 z-40'/>
//         <CardBody  onClick={(e)=>{
//         router.push('/product/'+item.id)}} className="overflow-visible p-0">
   

//           <Image
//             shadow="sm"
//             radius="lg"
//             width="100%"
//             height={400}
//             alt={item.title}
//             className="w-full object-cover h-[140px]"
//             src={item.image}
//           />

//         </CardBody>
//         <CardFooter className="text-small justify-between">
//           <b>{item.title}</b>
//           <p className="text-default-500">{item.price}</p>
//         </CardFooter>
//       </Card>
//     ))}
//   </div>
//     </div>
 
//   )
// }

// export default Product



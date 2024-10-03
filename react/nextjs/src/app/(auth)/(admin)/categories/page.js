'use client'
import React, { useEffect } from "react"
import CategoryForm from "./CategoryForm"
import CategoryList from "./CategoryList"
import axios from "axios"
import toast from 'react-hot-toast'
import CustomToast from '@/components/customToast/page'
import { useState } from "react"




const Categories = () => {
  const [categories, setCategories] = useState([])
  const fetchData = async()=> {
      const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/categories')
      setCategories(data)
  }
  
  const handleDelete =async(item)=> {
      const {data}= await axios.delete(process.env.NEXT_PUBLIC_API_URL + '/categories/'+item.id)
      fetchData()
      if(data) toast.custom((t) =>(
          <CustomToast t={t} actionImage={item.image} actionTitle="Deleted Category Successfully!" actionName={item.name}/>
      ))

  }

  useEffect(()=>{
      fetchData()

  },[])
  return (
  <div className=''>
    <CategoryForm fetchData={fetchData}/>
    <CategoryList handleDelete={handleDelete} categories={categories}/>
    </div>
)
}

export default Categories

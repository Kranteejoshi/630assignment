'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '@/components/card/page'
import toast from 'react-hot-toast'
import CustomToast from '@/components/customToast/page'



const UserList = () => {
    const [user, setUser] = useState([])
    const fetchData = async()=> {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/users/')
        setUser(data)
    }
    
    const handleDelete =async(item)=> {
        const {data}= await axios.delete('https://api.escuelajs.co/api/v1/users/'+item.id)
        fetchData()
        if(data) toast.custom((t) =>(
            <CustomToast t={t} actionImage={item.image || item.avatar} actionTitle="Deleted User Successfully!" actionName={item.name}/>
        ))

    }

    useEffect(()=>{
        fetchData()

    },[])

  return (
    <div>
        <div className="flex gap-4">
    {user.map((item)=>{
        return <Card item={item} handleDelete={handleDelete}/>
         })}
        </div>

    </div>
  )
}

export default UserList
'use client'
import React from 'react'
import { Image } from "@nextui-org/react"
import { FaEdit, FaTrash } from "react-icons/fa"


const Card = (props) => {
  return (
    <div className="p-4 bg-pink-100 shadow-md text-2xl font-semibold font-mono justify-center content-center">
            {props.item.name}
            <Image src={props.item.image} width={100} height={100} alt="category"/>
            <FaEdit/>
            {props.item.id}
            <FaTrash onClick={()=>props.handleDelete(props.item)}/>
    </div>
  )
}

export default Card
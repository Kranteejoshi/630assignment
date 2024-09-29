"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="p-4 bg-pink-100 shadow-md text-2xl font-semibold font-mono justify-center content-center">
      {props.item.name || props.item.title}
      <div className="flex">
      {props.item.images ? 
        props.item.images.map((item)=>{
          return  <Image
              src={item}
              width={30}
              height={30}
              alt="category"/>
        }) : (
        <Image src={props.item.image || props.item.avatar} width={50} height={50} alt="category"/>
      )}


      </div>
     
      <FaEdit />
      {props.item.id}
      <FaTrash onClick={() => props.handleDelete(props.item)}/>
    </div>
  );
};

export default Card;

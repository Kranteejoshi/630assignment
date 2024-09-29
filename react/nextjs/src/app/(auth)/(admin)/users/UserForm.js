'use client'
import React, { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function UserForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [user,setUser] = useState('')
  const saveUser = () =>{

  }

  return (
    <>
      <Button onPress={onOpen}>Add User</Button>
      <Modal className="h-[50%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Input placeholder="Enter User Name" value={user} onChange={(e)=>setUser(e.target.value)}/>
              </ModalBody>
              <Button onClick={saveUser}>Save User</Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
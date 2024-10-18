'use client'
import SideBar from "@/components/sidebar/page";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import { Toaster } from "react-hot-toast";

const AdminLayout = ({ children }) => {
  return (
    <div>
        <div className="flex">
      <SideBar />
      <Dropdown>
      <DropdownTrigger>
      <Avatar className="absolute right-10 top-5" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Kranti</DropdownItem>
        <DropdownItem key="copy">Support</DropdownItem>
        <DropdownItem key="edit">Log Out</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Give Feedback
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      {children}
    </div>
    </div>
  );
};

export default AdminLayout;

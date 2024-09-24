import SideBar from '@/components/sidebar/page'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
    <SideBar/>
        {children}
        </div>
  )
}

export default AdminLayout
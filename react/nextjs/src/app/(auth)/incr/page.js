'use client'
import { Button } from '@nextui-org/react';
import React from 'react';
import { useState } from 'react';


const Home = () => {
     let [num, setNum] = useState(10);
        const handleChange = (operation)=>{
            if(operation== 'inc') {
                setNum(num + 1)
            }
            else{
            setNum(num - 1)
            }
    
        }
  return (
    <div>
        <Button onClick={handleChange('inc')}>+</Button>
        {num}
        <Button onClick={handleChange('dec')}>-</Button>

    </div>
  )
}

export default Home
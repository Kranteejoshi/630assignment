'use client'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Bird = () => {
    const [randomNum , setRandomNum] = useState(0)
    const [isGameStopped, setIsGameStopped] = useState(false)
    const birdCages = ['', '🎯','']
    
    //anonymous function here

    useEffect(() => {
        if(!isGameStopped){
            setTimeout(() => {
                let newNum =  Math.floor(Math.random() * birdCages.length)
                if(newNum === randomNum){
                       newNum== 2 ? newNum= 0: newNum=newNum+1
                }
                 setRandomNum(newNum)
             }, 100);
        }
      }, [randomNum]);
      
      const handleStop = ()=>{
        setIsGameStopped(!isGameStopped)
      }
      //main logic useEffect ma xa.
  return (
    <div className='flex gap-6 items-center' >
       {randomNum}
        {birdCages.map((item, id)=>{
            // map wala loop lagako cuz it can return something. 
            return <div className='p-2 m-8  gap-2 h-52 shadow-xl w-52'>
                  {item}
                {id === randomNum &&  <Image src="https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
                    width={100}
                    height={100}
                />}
                {id===randomNum && isGameStopped && item &&  <Image src='https://i.gifer.com/embedded/download/24T.gif'
                    />
            }
              </div>
        })}
        <Button onClick={handleStop}>Stop</Button>
    </div>
  )
}

export default Bird
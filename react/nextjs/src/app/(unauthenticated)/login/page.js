import { Button, Card, CardBody, DatePicker, Image, Input, Link } from '@nextui-org/react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center item-center'>
    <Card className='flex  w-96 p-4 m-12' >
        <Image
      width={300}
      alt="NextUI hero Image"
      src="logo.png"
      /> 
      <CardBody className='flex gap-2'>
        <Input placeholder='Enter Email'/>
        <Input placeholder='Enter Password' type='password'/>
        <Button className='bg-blue-400 text-white'>Login</Button>

      <p>Don't have an account? <Link href='/register'>Register</Link> Instead.</p>
      <Link href='#'>Forgot Password</Link>
      </CardBody>

    </Card>
    </div>
  )
}

export default Login
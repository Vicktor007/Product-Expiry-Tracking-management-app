import React from 'react'
import LoginForm from '../components/utilities/LoginForm'
import { PageWrapper } from '../components/styles/PageWrapper'
import Title from '../components/utilities/Title'

export default function Login() {
  return (
    <PageWrapper className='containe animate-left'>
      <Title text='Login'/>
     <LoginForm/>
    </PageWrapper>
  )
}

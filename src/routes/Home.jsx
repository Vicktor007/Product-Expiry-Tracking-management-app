import React from 'react'
import { PageWrapper } from "../components/styles/PageWrapper"
import LoginForm from '../components/utilities/LoginForm'
import Title from '../components/utilities/Title'
import Footer from '../components/pages/Footer'

export default function Home() {
  return (
    <PageWrapper className='container'>
      <Title text='Welcome'/>
     <LoginForm/>
     <Footer/>
    </PageWrapper>
  )
}

import Aboutme from '@/features/AboutMe/AboutMe'
import Skill from '@/features/Skill/Skill'
import React from 'react'
import Header from './components/layouts/header/Header'

const page = () => {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skill />
    </div>
  )
}

export default page

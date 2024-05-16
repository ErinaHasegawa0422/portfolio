import Aboutme from '@/features/AboutMe/AboutMe'
import Skill from '@/features/Skill/Skill'
import React from 'react'
import Header from './components/layouts/header/Header'
import Section from '@/features/Section/Section'

const page = () => {
  return (
    <div>
      <Header />
      <Section />
      <Aboutme />
      <Skill />
    </div>
  )
}

export default page

import React from 'react'
import ReactDOM from 'react-dom'
import { CoverTemplate, HeroTemplate, BlogTemplate } from './templates/index'

console.log('CoverTemplate, HeroTemplate', { CoverTemplate, HeroTemplate })
const getTemplate = () => {
  const key = window.location.hash
  console.info('HASH', key)
  switch (key) {
    case '#COVER':
      return CoverTemplate
    case '#HERO':
      return HeroTemplate
    case '#BLOG':
      return BlogTemplate
    default:
      return HeroTemplate
  }
}

const Template = getTemplate()
console.log('Template', Template)
ReactDOM.render(<Template />, document.getElementById('root'))

// module.hot.accept()

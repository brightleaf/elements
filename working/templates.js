import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CoverTemplate, HeroTemplate, BlogTemplate } from './templates/index'

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

const App = () => {
  let TempTemplate = getTemplate()
  console.log('TempTemplate', TempTemplate)
  const [hash, setHash] = useState(window.location.hash)
  const hashChange = e => {
    setHash(window.location.hash)
  }
  useEffect(() => {
    window.addEventListener('hashchange', hashChange, false)
    return () => {
      window.removeEventListener('hashchange', hashChange, false)
    }
  }, [])
  console.log('App')
  if (hash === '#COVER') {
    return <CoverTemplate />
  }
  if (hash === '#HERO') {
    return <HeroTemplate />
  }
  if (hash === '#BLOG') {
    return <BlogTemplate />
  }
  console.log('Nope')
  return <HeroTemplate />
}

ReactDOM.render(<App />, document.getElementById('root'))

// module.hot.accept()

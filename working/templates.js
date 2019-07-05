import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  CoverTemplate,
  HeroTemplate,
  BlogTemplate,
  LandingTemplate,
  AdminTemplate,
} from './templates/index'

const App = () => {
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

  if (hash === '#COVER') {
    return <CoverTemplate />
  }
  if (hash === '#HERO') {
    return <HeroTemplate />
  }
  if (hash === '#BLOG') {
    return <BlogTemplate />
  }
  if (hash === '#LANDING') {
    return <LandingTemplate />
  }
  if (hash === '#ADMIN') {
    return <AdminTemplate />
  }
  return <HeroTemplate />
}

ReactDOM.render(<App />, document.getElementById('root'))

// module.hot.accept()

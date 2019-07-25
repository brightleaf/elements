import React, { useEffect, useState, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

const CoverTemplate = lazy(() => import('./templates/cover'))
const HeroTemplate = lazy(() => import('./templates/hero'))
const BlogTemplate = lazy(() => import('./templates/blog'))
const LandingTemplate = lazy(() => import('./templates/landing'))
const AdminTemplate = lazy(() => import('./templates/admin'))
const CheatSheetTemplate = lazy(() => import('./templates/cheatsheet'))

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
    return (
      <Suspense fallback={<div>Loading</div>}>
        <CoverTemplate />
      </Suspense>
    )
  }
  if (hash === '#HERO') {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <HeroTemplate />
      </Suspense>
    )
  }
  if (hash === '#BLOG') {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <BlogTemplate />
      </Suspense>
    )
  }
  if (hash === '#LANDING') {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <LandingTemplate />
      </Suspense>
    )
  }
  if (hash === '#ADMIN') {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <AdminTemplate />
      </Suspense>
    )
  }
  if (hash === '#CHEATSHEET') {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <CheatSheetTemplate />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <HeroTemplate />
    </Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// module.hot.accept()

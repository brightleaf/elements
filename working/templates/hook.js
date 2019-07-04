import { useEffect } from 'react'

const useStyleSheet = href => {
  useEffect(() => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = href
    document.getElementsByTagName('head')[0].appendChild(link)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(link)
    }
  }, [href])
}

const useStyles = css => {
  const link = document.createElement('style')
  link.type = 'text/css'
  link.innerHTML = css
  document.getElementsByTagName('head')[0].appendChild(link)
  return () => {
    document.getElementsByTagName('head')[0].removeChild(link)
  }
}
export default { useStyleSheet, useStyles }

export { useStyleSheet, useStyles }

import hljs from 'highlight.js/lib/highlight'

// Lets only register javascript, scss, html/xml
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

export default hljs

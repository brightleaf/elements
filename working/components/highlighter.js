import React, { Component } from 'react'
import BareHighlight from 'react-fast-highlight/lib/BareHighlight'
import hljs from '../app/highlight'

export default class Highlight extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <BareHighlight {...props} highlightjs={hljs}>
        {children}
      </BareHighlight>
    )
  }
}

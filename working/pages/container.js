/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks'
import { Container, Column, Columns } from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
export default () => {
  useStyleSheet('code.css')
  return (
    <Snippet>
      <Columns>
        <Column isHalf>
          <Container>
            <div className="notification">
              This container is <strong>centered</strong> on desktop.
            </div>
          </Container>
          <Container isFluid>
            <div className="notification">
              This container is <strong>fluid</strong>: it will have a 32px gap
              on either side, on any viewport size.
            </div>
          </Container>
          <Container isWideScreen>
            <div className="notification">
              This container is <strong>fullwidth</strong> <em>until</em> the{' '}
              <code>$widescreen</code> breakpoint.
            </div>
          </Container>
          <Container isFullHD>
            <div className="notification">
              This container is <strong>fullwidth</strong> <em>until</em> the{' '}
              <code>$fullhd</code> breakpoint.
            </div>
          </Container>
        </Column>
        <Column isHalf>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <div className="notification">
        This container is <strong>centered</strong> on desktop.
      </div>
    </Container>
    <Container isFluid>
      <div className="notification">
        This container is <strong>fluid</strong>: it will have a 32px gap
        on either side, on any viewport size.
      </div>
    </Container>
    <Container isWideScreen>
      <div className="notification">
        This container is <strong>fullwidth</strong> <em>until</em> the{' '}
        <code>$widescreen</code> breakpoint.
      </div>
    </Container>
    <Container isFullHD>
      <div className="notification">
        This container is <strong>fullwidth</strong> <em>until</em> the{' '}
        <code>$fullhd</code> breakpoint.
      </div>
    </Container>
  )
}
          `}</Highlight>
        </Column>
      </Columns>
    </Snippet>
  )
}

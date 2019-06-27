/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { Container } from '../../src'

export default () => {
  return (
    <>
      <Container>
        <div className="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </Container>
      <Container isFluid>
        <div className="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
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
    </>
  )
}

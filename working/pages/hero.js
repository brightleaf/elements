/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import { Hero, Container } from '../../src'

export default () => {
  return (
    <Container>
      <Container>
        <Hero>
          <Container>
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isDanger>
          <Container>
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isPrimary>
          <Container>
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isPrimary isBold>
          <Container>
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isInfo isBold isFullHeight>
          <Container>
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </Container>
        </Hero>
      </Container>
    </Container>
  )
}

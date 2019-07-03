/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import { Hero, Container, SubTitle, Title } from '../../src'

export default () => {
  return (
    <Container>
      <Container>
        <Hero>
          <Container>
            <Title as="p">Hero title</Title>
            <SubTitle as="p">Hero subtitle</SubTitle>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isDanger>
          <Container>
            <Title is="1">Hero title</Title>
            <SubTitle>Hero subtitle</SubTitle>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isPrimary>
          <Container>
            <Title as="p">Hero title</Title>
            <SubTitle as="p">Hero subtitle</SubTitle>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isPrimary isBold>
          <Container>
            <Title>Hero title</Title>
            <SubTitle>Hero subtitle</SubTitle>
          </Container>
        </Hero>
      </Container>
      <Container>
        <Hero isInfo isBold isFullHeight>
          <Container>
            <Title>Hero title</Title>
            <SubTitle>Hero subtitle</SubTitle>
          </Container>
        </Hero>
      </Container>
    </Container>
  )
}

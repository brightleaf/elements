/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Hero,
  HeroBody,
  Container,
  Section,
  SubTitle,
  Title,
} from '../../src'
import { LayoutTabs } from '../components/tabs'
export default () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Hero</Title>
          <SubTitle as="p" is="4">
            An imposing hero banner to showcase something
          </SubTitle>
        </HeroBody>
      </Hero>
      <LayoutTabs />
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
    </Section>
  )
}

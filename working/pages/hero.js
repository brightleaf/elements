/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Column,
  Columns,
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
import { Snippet } from '../components/snippet'
import { CodeCollapse } from '../components/collapse'
import Highlight from '../components/highlighter'
export default () => {
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/layouts">Layout</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/hero">Hero</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Hero</Title>
          <SubTitle as="p" is="4">
            An imposing hero banner to showcase something
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <LayoutTabs />
      </div>

      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <Hero>
                <HeroBody>
                  <Title as="p">Hero title</Title>
                  <SubTitle as="p">Hero subtitle</SubTitle>
                </HeroBody>
              </Hero>
            </Column>
            <Column isHalf>
              <Highlight>{`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle } from '@brightleaf/elements'

export default () => {
  return (
    <Hero>
      <HeroBody>
        <Title as="p">Hero title</Title>
        <SubTitle as="p">Hero subtitle</SubTitle>
      </HeroBody>
    </Hero>
  )
}
              `}</Highlight>
            </Column>
          </Columns>
        </Snippet>
      </Container>
      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <Hero isDanger>
                <HeroBody>
                  <Title is="1">Hero title</Title>
                  <SubTitle>Hero subtitle</SubTitle>
                </HeroBody>
              </Hero>
            </Column>
            <Column isHalf>
              <Highlight>{`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle } from '@brightleaf/elements'

export default () => {
  return (
    <Hero isDanger>
      <HeroBody>
        <Title is="1">Hero title</Title>
        <SubTitle>Hero subtitle</SubTitle>
      </HeroBody>
    </Hero>
  )
}
              `}</Highlight>
            </Column>
          </Columns>
        </Snippet>
      </Container>
      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <Hero isPrimary>
                <HeroBody>
                  <Title as="p">Hero title</Title>
                  <SubTitle as="p">Hero subtitle</SubTitle>
                </HeroBody>
              </Hero>
            </Column>
            <Column isHalf>
              <Highlight>{`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle } from '@brightleaf/elements'

export default () => {
  return (
    <Hero isPrimary>
      <HeroBody>
        <Title as="p">Hero title</Title>
        <SubTitle as="p">Hero subtitle</SubTitle>
      </HeroBody>
    </Hero>
  )
}
              `}</Highlight>
            </Column>
          </Columns>
        </Snippet>
      </Container>
      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <Hero isPrimary isBold>
                <HeroBody>
                  <Title>Hero title</Title>
                  <SubTitle>Hero subtitle</SubTitle>
                </HeroBody>
              </Hero>
            </Column>
            <Column isHalf>
              <Highlight>{`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle } from '@brightleaf/elements'

export default () => {
  return (
    <Hero isPrimary isBold>
      <HeroBody>
        <Title>Hero title</Title>
        <SubTitle>Hero subtitle</SubTitle>
      </HeroBody>
    </Hero>
  )
}
              `}</Highlight>
            </Column>
          </Columns>
        </Snippet>
      </Container>
      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <Hero isInfo isBold isFullHeight>
                <Container>
                  <Title>Hero title</Title>
                  <SubTitle>Hero subtitle</SubTitle>
                </Container>
              </Hero>
            </Column>
            <Column isHalf>
              <Highlight>{`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle } from '@brightleaf/elements'

export default () => {
  return (
    <Hero isInfo isBold isFullHeight>
      <HeroBody>
        <Title>Hero title</Title>
        <SubTitle>Hero subtitle</SubTitle>
      </HeroBody>
    </Hero>
  )
}
              `}</Highlight>
            </Column>
          </Columns>
        </Snippet>
      </Container>
    </Section>
  )
}

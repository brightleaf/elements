/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Container,
  Column,
  Columns,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { LayoutTabs } from '../components/tabs'
export default () => {
  useStyleSheet('code.css')
  return (
    <>
      <Section>
        <Hero isLight isBold>
          <HeroBody>
            <Title>Container</Title>
            <SubTitle as="p" is="4">
              A simple container to center your content horizontally
            </SubTitle>
          </HeroBody>
        </Hero>
        <LayoutTabs />
      </Section>
      <Snippet>
        <Container>
          <div className="notification">
            This container is <strong>centered</strong> on desktop.
          </div>
        </Container>
        <Container>
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
  )
}
          `}</Highlight>
        </Container>
      </Snippet>
      <Snippet>
        <Container isFluid>
          <div className="notification">
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          </div>
        </Container>
        <Container isFluid>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container } from '@brightleaf/elements'
export default () => {
  return (
    <Container isFluid>
      <div className="notification">
        This container is <strong>fluid</strong>: it will have a 32px gap on
        either side, on any viewport size.
      </div>
  </Container>
  )
}
          `}</Highlight>
        </Container>
      </Snippet>
      <Snippet>
        <Container isWideScreen>
          <div className="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>$widescreen</code> breakpoint.
          </div>
        </Container>
        <Container isFluid>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container } from '@brightleaf/elements'
export default () => {
  return (
    <Container isWideScreen>
      <div className="notification">
        This container is <strong>fullwidth</strong> <em>until</em> the{' '}
        <code>$widescreen</code> breakpoint.
      </div>
    </Container>
  )
}
          `}</Highlight>
        </Container>
      </Snippet>
      <Snippet>
        <Container isFullHD>
          <div className="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>$fullhd</code> breakpoint.
          </div>
        </Container>

        <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container } from '@brightleaf/elements'
export default () => {
  return (
    <Container isFullHD>
      <div className="notification">
        This container is <strong>fullwidth</strong> <em>until</em> the{' '}
        <code>$fullhd</code> breakpoint.
      </div>
    </Container>
  )
}
          `}</Highlight>
      </Snippet>
    </>
  )
}

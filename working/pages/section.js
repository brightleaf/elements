/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { LayoutTabs } from '../components/tabs'
import Highlight from '../components/highlighter'
export default () => {
  useStyleSheet('code.css')
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
            <a href="#/section">Section</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Section</Title>
          <SubTitle as="p" is="4">
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you{`'`}re currently reading
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <LayoutTabs />
      </div>

      <Columns>
        <Column isFull>
          Use sections as direct children of <code>body</code>.
        </Column>
      </Columns>
      <Columns>
        <Column isFull>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Tile } from '@brightleaf/elements'
export default () => {
  return (
    <body>
      <Section>
        {/* The section */}
      </Section>
    </body>
  )
}
          `}</Highlight>
        </Column>
      </Columns>
      <Columns>
        <Column isFull>
          You can use the modifiers <code>`isMedium`</code> and{' '}
          <code>`isLarge`</code> to change the spacing.
        </Column>
      </Columns>
      <Columns>
        <Column isFull>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Tile } from '@brightleaf/elements'
export default () => {
  return (
    <body>
      <Section isMedium>
        {/* The section */}
      </Section>
      <Section isLarge>
      {/* The section */}
    </Section>
    </body>
  )
}
          `}</Highlight>
        </Column>
      </Columns>
    </Section>
  )
}

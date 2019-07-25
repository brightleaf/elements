/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Columns,
  Content,
  FullColumn,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { ComponentsTabs } from '../components/tabs'

import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'

export default () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Breadcrumb</Title>
          <SubTitle as="p" is="4">
            A simple <strong>breadcrumb</strong> component to improve your
            navigation experience
          </SubTitle>
        </HeroBody>
      </Hero>

      <ComponentsTabs />
      <FullColumn>
        <Content>
          <p>
            The <strong>Breadcrumb</strong> component only requires a{' '}
            <code>Breadcrumb</code> container and a <code>BreadcrumbItem</code>{' '}
            list.
          </p>
          <p>
            The dividers are automatically created in the content of the{' '}
            <code>::before</code> pseudo-element of <code>BreadcrumbItem</code>{' '}
            tags.
          </p>
          <p>
            You can inform the current page using the <code>isActive</code>{' '}
            modifier in a <code>BreadcrumbItem</code> tag. It will disable the
            navigation of inner links.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Title as="h3" is="4">
          Alignment
        </Title>
        <Content>
          <p>
            For alternative alignments, use the <code>isCentered</code> and{' '}
            <code>isRight</code> attributes on the <code>Breadcrumb</code>{' '}
            component.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb isRight>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb isRight>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb isCentered>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb isCentered>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Title as="h3" is="4">
          Alternative separators
        </Title>
        <Content>
          <p>
            You can choose between <strong>4 additional separators</strong>:{' '}
            <code>hasArrowSeparator</code> <code>hasBulletSeparator</code>{' '}
            <code>hasDotSeparator</code> and <code>hasSucceedsSeparator</code>.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb hasArrowSeparator>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb hasArrowSeparator>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb hasBulletSeparator>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb hasBulletSeparator>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb hasDotSeparator>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb hasDotSeparator>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb hasSucceedsSeparator>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb hasSucceedsSeparator>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Title as="h3" is="4">
          Sizes
        </Title>
        <Content>
          <p>
            You can choose between <strong>3 additional sizes</strong>:{' '}
            <code>isSmall</code> <code>isMedium</code> and <code>isLarge</code>.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb isSmall>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb isSmall>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb isMedium>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb isMedium>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Breadcrumb isLarge>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Components</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#/breadcrumb">Hero</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'

export default () => {
  return (
    <Breadcrumb isLarge>
      <BreadcrumbItem>
        <a>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Components</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>Hero</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}

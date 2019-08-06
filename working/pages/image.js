/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Breadcrumb,
  BreadcrumbItem,
  Image,
  Column,
  Columns,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'
import Highlight from '../components/highlighter'

export default () => {
  useTitle('Image example from @brightleaf/elements')

  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/elements">Elements</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/images">Image</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Image</Title>
          <SubTitle as="p" is="4">
            Images
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Image is128 src="https://via.placeholder.com/128?text=128 x 128" />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Image } from '@brightleaf/elements'

export default () => {
  return <Image is128 src="https://via.placeholder.com/128" />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Image
              is128
              src="https://via.placeholder.com/128?text=128 x 128"
              isRounded
            />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  return (
    <>
    <Image is="128" src="https://via.placeholder.com/128" />
    </>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Image
              is16by9
              src="https://via.placeholder.com/640x360?text=640 x 360"
            />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Image } from '@brightleaf/elements'

export default () => {
  return <Image is128 src="https://via.placeholder.com/128" />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Image is128 src="https://via.placeholder.com/256?text=256 x 256" />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Image } from '@brightleaf/elements'

export default () => {
  return <Image is128 src="https://via.placeholder.com/256" />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}

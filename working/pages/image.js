/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
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
  useTitle('Icons example from @brightleaf/elements')

  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Image</Title>
          <SubTitle as="p" is="4">
            Images
          </SubTitle>
        </HeroBody>
      </Hero>

      <ElementsTabs />
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

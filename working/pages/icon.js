/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Icon,
  BaseIcon,
  StackedIcons,
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
          <Title>Icon</Title>
          <SubTitle as="p" is="4">
            Font Awesome Icons
          </SubTitle>
        </HeroBody>
      </Hero>

      <ElementsTabs />
      <Snippet>
        <Columns>
          <Column isHalf>
            <Icon icon="home" fas />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  // make sure font-awesome script is included
  return <Icon icon="home" fas />
}

// for font awesome 4
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  // make sure font-awesome stylesheet is included
  return <Icon icon="home" fa />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Icon icon="info-circle" hasTextInfo fas />{' '}
            <Icon hasTextSuccess icon="check-square" fas />{' '}
            <Icon hasTextWarning icon="exclamation-triangle" fas />{' '}
            <Icon hasTextDanger icon="ban" fas />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Icon icon="info-circle" hasTextInfo fas />{' '}
      <Icon hasTextSuccess icon="check-square" fas />{' '}
      <Icon hasTextWarning icon="exclamation-triangle" fas />{' '}
      <Icon hasTextDanger icon="ban" fas />
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
            <Icon icon="spinner" fas className="fa-pulse " />{' '}
            <Icon
              hasTextInfo
              icon="react"
              fab
              className="fa-spin"
              isLarge
              isLargeFA
            />{' '}
            <Icon hasTextWarning icon="exclamation-triangle" fas />{' '}
            <Icon hasTextDanger icon="ban" fas />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Icon icon="info-circle" hasTextInfo fas />{' '}
      <Icon hasTextSuccess icon="check-square" fas />{' '}
      <Icon hasTextWarning icon="exclamation-triangle" fas />{' '}
      <Icon hasTextDanger icon="ban" fas />
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
            <StackedIcons isMedium>
              <BaseIcon icon="square" fas className="fa-stack-2x" />
              <BaseIcon icon="twitter" fab className="fa-stack-1x fa-inverse" />
            </StackedIcons>
            <br />
            <StackedIcons isMedium>
              <BaseIcon icon="circle" fas className="fa-stack-2x" />
              <BaseIcon icon="flag" fas className="fa-stack-1x fa-inverse" />
            </StackedIcons>
            <hr />
            <StackedIcons isMedium is3x>
              <BaseIcon icon="square" fas className="fa-stack-2x" />
              <BaseIcon icon="twitter" fab className="fa-stack-1x fa-inverse" />
            </StackedIcons>
            <StackedIcons isLarge is4x>
              <BaseIcon icon="square" fas className="fa-stack-2x" />
              <BaseIcon
                icon="terminal"
                fas
                className="fa-stack-1x fa-inverse"
              />
            </StackedIcons>
            <StackedIcons isLarge isLargeFA>
              <BaseIcon icon="camera" fas className="fa-stack-1x" />
              <BaseIcon icon="ban" fas className="fa-stack-2x" hasTextDanger />
            </StackedIcons>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
<span class="icon is-medium">
<span class="fa-stack">
  <i class="fas fa-circle fa-stack-2x"></i>
  <i class="fas fa-flag fa-stack-1x fa-inverse"></i>
</span>
</span>

import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <StackedIcons isMedium>
        <BaseIcon icon="square" fas className="fa-stack-2x" />
        <BaseIcon icon="twitter" fab className="fa-stack-1x fa-inverse" />
      </StackedIcons>
      <br />
      <StackedIcons isMedium>
        <BaseIcon icon="circle" fas className="fa-stack-2x" />
        <BaseIcon icon="flag" fas className="fa-stack-1x fa-inverse" />
      </StackedIcons>
      <br />
      <StackedIcons isLarge isLargeFA>
        <BaseIcon icon="camera" fas className="fa-stack-1x" />
        <BaseIcon icon="ban" fas className="fa-stack-2x" hasTextDanger />
      </StackedIcons>
      <StackedIcons isMedium is3x>
      <BaseIcon icon="square" fas className="fa-stack-2x" />
      <BaseIcon icon="twitter" fab className="fa-stack-1x fa-inverse" />
    </StackedIcons>
    <StackedIcons isLarge is4x>
      <BaseIcon icon="square" fas className="fa-stack-2x" />
      <BaseIcon
        icon="terminal"
        fas
        className="fa-stack-1x fa-inverse"
      />
    </StackedIcons>
    <StackedIcons isLarge isLargeFA>
      <BaseIcon icon="camera" fas className="fa-stack-1x" />
      <BaseIcon icon="ban" fas className="fa-stack-2x" hasTextDanger />
    </StackedIcons>
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
            <Icon icon="shield-alt" fas />
            <Icon icon="shield-alt" fas rotation="90" />
            <Icon icon="shield-alt" fas rotation="180" />
            <Icon icon="shield-alt" fas rotation="270" />
            <Icon icon="shield-alt" fas flipVertical />
            <Icon icon="shield-alt" fas flipHorizontal />
            <Icon icon="shield-alt" fas flipBoth />
            <Icon icon="shield-alt" fas />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {

  return (
    <>
      <Icon icon="shield-alt" fas />
      <Icon icon="shield-alt" fas rotation="90" />
      <Icon icon="shield-alt" fas rotation="180" />
      <Icon icon="shield-alt" fas rotation="270" />
      <Icon icon="shield-alt" fas flipVertical />
      <Icon icon="shield-alt" fas flipHorizontal />
      <Icon icon="shield-alt" fas flipBoth />
      <Icon icon="shield-alt" fas />
    </>
  )
}

// for font awesome 4
import React from 'react'
import { Icon } from '@brightleaf/elements'

export default () => {
  // make sure font-awesome stylesheet is included
  return <Icon icon="home" fa />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}

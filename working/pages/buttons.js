/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet, useStyles } from '@brightleaf/react-hooks'
import Highlight from '../components/highlighter'
import {
  Box,
  Button,
  Buttons,
  Columns,
  Column,
  Container,
  FullColumn,
  Content,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'
const Callout = ({ children }) => {
  return <div className="callout is-primary">{children}</div>
}
export default () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }
  `)
  useStyleSheet('code.css')
  return (
    <>
      <ElementsTabs />
      <FullColumn>
        <Content>
          <p>
            The <strong>button</strong> is an essential element of any design.
            It&apos;s meant to look and behave as an{' '}
            <strong>interactive</strong> element of your page.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Container>
              <Button>Button</Button>
            </Container>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Button } from '@brightleaf/elements'

export default () => {
  return (
    <Container>
      <Button>Button</Button>
    </Container>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Content>
          <h3>Colors</h3>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Container>
              <Buttons>
                <Button isPrimary>Primary</Button>
                <Button isInfo>Info</Button>
                <Button isDanger>Danger</Button>
                <Button isLink>Link</Button>
                <Button isWarning>Warning</Button>
                <Button isSuccess>Success</Button>
              </Buttons>
            </Container>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Buttons, Button } from '@brightleaf/elements'

export default () => {
  return (
    <Buttons>
      <Button isPrimary>Primary</Button>
      <Button isInfo>Info</Button>
      <Button isDanger>Danger</Button>
      <Button isLink>Link</Button>
      <Button isWarning>Warning</Button>
      <Button isSuccess>Success</Button>
    </Buttons>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Content>
          <p>
            The <code>Button</code> component can be used to render:
          </p>
          <ul>
            <li>
              <code>&lt;a&gt;</code> anchor links with <code>isAnchor</code>
            </li>
            <li>
              <code>&lt;button&gt;</code> form buttons is the default
            </li>
            <li>
              <code>&lt;input type="submit"&gt;</code> submit inputs with{' '}
              <code>isSubmit</code>
            </li>
            <li>
              <code>&lt;input type="reset"&gt;</code> reset inputs with{' '}
              <code>isReset</code>
            </li>
          </ul>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Container>
              <Buttons>
                <Button>Button</Button>
                <Button isSubmit>Submit</Button>
                <Button isAnchor href="#">
                  Anchor
                </Button>
                <Button isReset>Reset</Button>
              </Buttons>
            </Container>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Buttons, Button } from '@brightleaf/elements'

export default () => {
  return (
    <Buttons>
      <Button>Button</Button>
      <Button isSubmit>Submit</Button>
      <Button isAnchor href="#">
        Anchor
      </Button>
      <Button isReset>Reset</Button>
    </Buttons>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Content>
          <p>
            The button comes in <strong>4 different sizes:</strong>
          </p>
          <ul>
            <li>
              small <code>isSmall</code>
            </li>
            <li>
              normal <code>isNormal</code>
            </li>
            <li>
              medium <code>isMedium</code>
            </li>
            <li>
              large <code>isLarge</code>
            </li>
          </ul>
          <p>
            While the default size is the <strong>normal</strong> one, the{' '}
            <code>isNormal</code> modifier exists in case you need to reset the
            button to its normal size.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Buttons>
              <Button isSmall>Small</Button>
              <Button>Default</Button>
              <Button isNormal>Normal</Button>
              <Button isMedium>Medium</Button>
              <Button isLarge>Large</Button>
            </Buttons>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Buttons, Button } from '@brightleaf/elements'

export default () => {
  return (
    <Buttons>
      <Button isSmall>Small</Button>
      <Button>Default</Button>
      <Button isNormal>Normal</Button>
      <Button isMedium>Medium</Button>
      <Button isLarge>Large</Button>
    </Buttons>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Content>
          <p>
            You can change the size of <strong>multiple buttons</strong> at once
            by wrapping them in a <code>Buttons</code> parent component, and
            applying one of 3 modifiers:
          </p>
          <ul>
            <li>
              <code>areSmall</code>
            </li>
            <li>
              <code>areMedium</code>
            </li>
            <li>
              <code>areLarge</code>
            </li>
          </ul>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Buttons areMedium>
              <Button>All</Button>
              <Button>Medium</Button>
              <Button>Size</Button>
            </Buttons>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Buttons, Button } from '@brightleaf/elements'

export default () => {
  return (
    <Buttons areMedium>
      <Button>All</Button>
      <Button>Medium</Button>
      <Button>Size</Button>
    </Buttons>
    )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Box>
        <Buttons areSmall>
          <Button>Small</Button>
          <Button>Small</Button>
          <Button>Small</Button>
          <Button isNormal>Normal</Button>
          <Button>Small</Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isFullWidth isSmall>
            Small
          </Button>
          <Button isFullWidth>Normal</Button>
          <Button isFullWidth isMedium>
            Medium
          </Button>
          <Button isFullWidth isLarge>
            Large FW
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isOutlined>
            Primary Button
          </Button>
          <Button isInfo isOutlined>
            Info Button
          </Button>
          <Button isDanger isOutlined>
            Danger Button
          </Button>
          <Button isLink isOutlined>
            Link Button
          </Button>
          <Button isWarning isOutlined>
            Warning Button
          </Button>
          <Button isSuccess isOutlined>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isInverted>
            Primary Button
          </Button>
          <Button isInfo isInverted>
            Info Button
          </Button>
          <Button isDanger isInverted>
            Danger Button
          </Button>
          <Button isLink isInverted>
            Link Button
          </Button>
          <Button isWarning isInverted>
            Warning Button
          </Button>
          <Button isSuccess isInverted>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <FullColumn>
        <Callout>
          <Buttons>
            <Button isPrimary isInverted isOutlined>
              Primary Button
            </Button>
            <Button isInfo isInverted isOutlined>
              Info Button
            </Button>
            <Button isDanger isInverted isOutlined>
              Danger Button
            </Button>
            <Button isLink isInverted isOutlined>
              Link Button
            </Button>
            <Button isWarning isInverted isOutlined>
              Warning Button
            </Button>
            <Button isSuccess isInverted isOutlined>
              Success Button
            </Button>
          </Buttons>
        </Callout>
      </FullColumn>
      <Box>
        <Buttons>
          <Button isPrimary isFocused>
            Primary Button
          </Button>
          <Button isInfo isFocused>
            Info Button
          </Button>
          <Button isDanger isFocused>
            Danger Button
          </Button>
          <Button isLink isFocused>
            Link Button
          </Button>
          <Button isWarning isFocused>
            Warning Button
          </Button>
          <Button isSuccess isFocused>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <Box>
        <Buttons>
          <Button isPrimary isHovered>
            Primary Button
          </Button>
          <Button isInfo isHovered>
            Info Button
          </Button>
          <Button isDanger isHovered>
            Danger Button
          </Button>
          <Button isLink isHovered>
            Link Button
          </Button>
          <Button isWarning isHovered>
            Warning Button
          </Button>
          <Button isSuccess isHovered>
            Success Button
          </Button>
        </Buttons>
      </Box>
      <FullColumn>
        <Buttons hasAddons>
          <Button isStatic>Yes</Button>
          <Button isStatic>Maybe</Button>
          <Button isStatic>No</Button>
        </Buttons>
      </FullColumn>
      <FullColumn>
        <Buttons hasAddons isCentered>
          <Button isStatic>Yes</Button>
          <Button isStatic>Maybe</Button>
          <Button isStatic>No</Button>
        </Buttons>
      </FullColumn>
      <FullColumn>
        <Buttons hasAddons isRight>
          <Button isStatic>Yes</Button>
          <Button isStatic>Maybe</Button>
          <Button isStatic>No</Button>
        </Buttons>
      </FullColumn>
      <FullColumn>
        <Buttons hasAddons>
          <Button isStatic isSelected isSuccess>
            Yes
          </Button>
          <Button isStatic>Maybe</Button>
          <Button isStatic>No</Button>
        </Buttons>
        <Buttons hasAddons>
          <Button isStatic>Yes</Button>
          <Button isStatic isSelected isInfo>
            Maybe
          </Button>
          <Button isStatic>No</Button>
        </Buttons>
        <Buttons hasAddons>
          <Button isStatic>Yes</Button>
          <Button isStatic>Maybe</Button>
          <Button isStatic isSelected isDanger>
            No
          </Button>
        </Buttons>
      </FullColumn>
    </>
  )
}

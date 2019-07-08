import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass, toHaveAttribute } from 'jest-dom'
import { Buttons, Button } from '../'

expect.extend({ toHaveClass, toHaveAttribute })

describe('Button components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(<Button>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('button')
  })
  it('should render with colored classes applied', () => {
    const { container } = render(
      <Buttons>
        <Button isPrimary>Primary</Button>
        <Button isInfo>Info</Button>
        <Button isDanger>Danger</Button>
        <Button isLink>Link</Button>
        <Button isWarning>Warning</Button>
        <Button isSuccess>Success</Button>
      </Buttons>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('buttons')
    expect(container.firstChild.firstChild).toHaveClass('button')
    const buttonEls = Array.from(container.firstChild.childNodes)
    expect(buttonEls[0]).toHaveClass('is-primary')
    expect(buttonEls[1]).toHaveClass('is-info')
    expect(buttonEls[2]).toHaveClass('is-danger')
    expect(buttonEls[3]).toHaveClass('is-link')
    expect(buttonEls[4]).toHaveClass('is-warning')
    expect(buttonEls[5]).toHaveClass('is-success')
  })
  it('should render as correct elements', () => {
    const { container } = render(
      <Buttons>
        <Button>Button</Button>
        <Button isSubmit>Submit</Button>
        <Button isAnchor href="#">
          Anchor
        </Button>
        <Button isReset>Reset</Button>
      </Buttons>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild.firstChild).toHaveClass('button')
    const buttonEls = Array.from(container.firstChild.childNodes)

    expect(buttonEls[1]).toHaveAttribute('type', 'submit')
    expect(buttonEls[2]).toHaveAttribute('href', '#')
    expect(buttonEls[3]).toHaveAttribute('type', 'reset')
  })
})

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass, toHaveAttribute } from '@testing-library/jest-dom'
import { ConfirmButton } from '../confirm-button'

expect.extend({ toHaveClass, toHaveAttribute })

describe('ConfirmButton components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(<ConfirmButton>Button</ConfirmButton>)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('button')
  })
  it('should render a button', () => {
    const { container } = render(
      <ConfirmButton
        title="confirm"
        question="Are you sure you want to send the message?"
        onConfirm={e => {}}
        onCancel={() => {}}
      >
        Send
      </ConfirmButton>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('button')
    expect(container.lastChild.firstChild).toHaveClass('modal')
  })
})

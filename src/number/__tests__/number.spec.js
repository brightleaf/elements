import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {
  toHaveClass,
  toHaveAttribute,
  toContainElement,
} from '@testing-library/jest-dom'
import { Number } from '../number'

expect.extend({ toHaveClass, toHaveAttribute, toContainElement })
describe('The Number Component', () => {
  afterEach(cleanup)
  it('should render a div with the class number', () => {
    const { container } = render(<Number>2</Number>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('number')
  })
  it('should render a div with the class number and the className passed in', () => {
    const { container } = render(<Number className="test" />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('number')
    expect(container.firstChild).toHaveClass('test')
  })
  it('should render with color and size modifiers', () => {
    const { container } = render(
      <Number hasBackgroundPrimary hasTextWeightBold hasTextWhite>
        23
      </Number>
    )
    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveClass('number')
    expect(container.firstChild).toHaveClass('has-text-weight-bold')
    expect(container.firstChild).toHaveClass('has-text-white')
    expect(container.firstChild).toHaveClass('has-background-primary')
  })
})

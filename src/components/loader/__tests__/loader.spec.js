import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {
  toHaveClass,
  toHaveAttribute,
  toContainElement,
} from '@testing-library/jest-dom'
import { Loader } from '../'

expect.extend({ toHaveClass, toHaveAttribute, toContainElement })
describe('The Loader Component', () => {
  afterEach(cleanup)
  it('should render a div with the class loader', () => {
    const { container } = render(<Loader> </Loader>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('loader')
  })
  it('should render a div with the class loader and the className passed in', () => {
    const { container } = render(<Loader className="loader-test" />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('loader')
    expect(container.firstChild).toHaveClass('loader-test')
  })
  it('should render a p with the class loader when as property is set to `p`', () => {
    const { container } = render(<Loader as="p" />)
    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveClass('loader')
    const p = document.querySelector('p.loader')
    expect(container).toContainElement(p)
  })
})

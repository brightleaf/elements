import React from 'react'
import { render, cleanup, waitForDomChange } from '@testing-library/react'
import {
  toHaveClass,
  toHaveAttribute,
  toContainElement,
} from '@testing-library/jest-dom'
import { NavBar, NavBarItem } from '../navbar'

expect.extend({ toHaveClass, toHaveAttribute, toContainElement })

describe('The NavBar Component', () => {
  afterEach(cleanup)
  it('should render a nav', () => {
    const { container } = render(<NavBar>Test</NavBar>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('navbar')
  })
  it('should render a nav with classname is-primary when passed isPrimary', () => {
    const { container } = render(<NavBar isPrimary>Test</NavBar>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('navbar')
    expect(container.firstChild).toHaveClass('is-primary')
  })

  it('should render a nav with classname is-fixed-top when passed isFixedTop', async () => {
    const { container } = render(<NavBar isFixedTop>Test</NavBar>)
    // await waitForDomChange({ container })
    expect(container.firstChild).toMatchSnapshot()
    expect(document.body).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('navbar')
    expect(container.firstChild).toHaveClass('is-fixed-top')
    expect(document.body).toHaveClass('has-navbar-fixed-top')
  })
  it('should render a nav with classname is-fixed-bottom when passed isFixedBottom', async () => {
    const { container } = render(<NavBar isFixedBottom>Test</NavBar>)
    expect(container.firstChild).toMatchSnapshot()
    expect(document.body).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('navbar')
    expect(container.firstChild).toHaveClass('is-fixed-bottom')
    expect(document.body).toHaveClass('has-navbar-fixed-bottom')
  })
  /*

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
  */
})

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Container } from '../'

expect.extend({ toHaveClass })

describe('Container component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Container>
        <div className="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('container')
  })
  it('should render with extra classnames', () => {
    const { container } = render(
      <Container className="contained">
        <div className="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('container')
    expect(container.firstChild).toHaveClass('contained')
  })
  it('should render with isFluid', () => {
    const { container } = render(
      <Container isFluid>
        <div className="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('container')
    expect(container.firstChild).toHaveClass('is-fluid')
  })
  it('should render with isWideScreen', () => {
    const { container } = render(
      <Container isWideScreen>
        <div className="notification">
          This container is <strong>fullwidth</strong> <em>until</em> the{' '}
          <code>$widescreen</code> breakpoint.
        </div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('container')
    expect(container.firstChild).toHaveClass('is-widescreen')
  })
  it('should render with isWideScreen', () => {
    const { container } = render(
      <Container isFullHD>
        <div className="notification">
          This container is <strong>fullwidth</strong> <em>until</em> the{' '}
          <code>$fullhd</code> breakpoint.
        </div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('container')
    expect(container.firstChild).toHaveClass('is-fullhd')
  })
})

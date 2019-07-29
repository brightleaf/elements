import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Base } from '../base'

expect.extend({ toHaveClass })

describe('Base component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Base className="base-class-to-check">
        <div className="notification">This container</div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('base-class-to-check')
  })
  it('should render with extra classnames', () => {
    const { container } = render(
      <Base className="base-class-to-check contained">
        <div className="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('base-class-to-check')
    expect(container.firstChild).toHaveClass('contained')
  })
  it('should render with isFluid', () => {
    const { container } = render(
      <Base isFluid>
        <div className="notification">
          This container is <strong>fluid</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-fluid')
  })
  it('should render with isWideScreen', () => {
    const { container } = render(
      <Base isWideScreen>
        <div className="notification">
          This container is <strong>isWideScreen</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-widescreen')
  })

  it('should render with isWideScreen', () => {
    const { container } = render(
      <Base isFullHD>
        <div className="notification">
          This container is <strong>isFullHD</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-fullhd')
  })

  it('should render with isPrimary', () => {
    const { container } = render(
      <Base isPrimary>
        <div className="notification">
          This container is <strong>primary</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-primary')
  })

  it('should render with isPrimary and be disabled', () => {
    const { container } = render(
      <Base isPrimary disabled>
        <div className="notification">
          This container is <strong>primary</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-primary')
  })

  it('should render as label and for', () => {
    const { container } = render(
      <Base as="label" htmlFor="something">
        <input type="text" id="something" />
        <div className="notification">
          This container is <strong>primary</strong>
        </div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

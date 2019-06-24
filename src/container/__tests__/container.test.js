import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Container } from '../container'

describe('Column and Columns', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Container>
        <div>Hi</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render isMobile with class is-mobile', () => {
    const { container } = render(
      <Container isMobile>
        <div>Hi</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  /*
     isMobile,
  className,
  isFluid,
  isWideScreen,
  isFullHD,
  */
  it('should render isFluid with class is-fluid', () => {
    const { container } = render(
      <Container isFluid>
        <div>Hi</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render isWideScreen with class is-widescreen', () => {
    const { container } = render(
      <Container isWideScreen>
        <div>Hi</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render isWideScreen with class is-fullhd', () => {
    const { container } = render(
      <Container isFullHD>
        <div>Hi</div>
      </Container>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

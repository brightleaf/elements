import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from 'jest-dom'
import { Columns, Column, FullColumn } from '../columns'

expect.extend({ toHaveClass })
describe('Column and Columns', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Columns>
        <Column>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render One Third Column when isOneThird is true', () => {
    const { container, getByText } = render(
      <Columns>
        <Column isOneThird>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const col = getByText('Hi')
    expect(col).toHaveClass('is-one-third')
  })
  it('should render Two Thirds Column when isTwoThirds is true', () => {
    const { container, getByText } = render(
      <Columns>
        <Column isTwoThirds>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const col = getByText('Hi')
    expect(col).toHaveClass('is-two-thirds')
  })
  it('should render one half Column when isHalf is true', () => {
    const { container, getByText } = render(
      <Columns>
        <Column isHalf>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const col = getByText('Hi')
    expect(col).toHaveClass('is-half')
  })
  it('should render three quarters Column when isThreeQuarters is true', () => {
    const { container, getByText } = render(
      <Columns>
        <Column isThreeQuarters>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const col = getByText('Hi')
    expect(col).toHaveClass('is-three-quarters')
  })
  it('should render one quarter Column when isOneQuarter is true', () => {
    const { container, getByText } = render(
      <Columns>
        <Column isOneQuarter>Hi</Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const col = getByText('Hi')
    expect(col).toHaveClass('is-one-quarter')
  })
  it('should render Full Column', () => {
    const { container, getByText } = render(
      <Columns>
        <FullColumn>Hi</FullColumn>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
    const full = getByText('Hi')
    expect(full).toHaveClass('is-full')
  })

  it('should render nested columns', () => {
    const { container } = render(
      <Columns>
        <Column>
          <p className="bd-notification is-info">First column</p>
          <Columns className="is-mobile">
            <Column>
              <p className="bd-notification is-info">First nested column</p>
            </Column>
            <Column>
              <p className="bd-notification is-info">Second nested column</p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <p className="bd-notification is-danger">Second column</p>
          <Columns isMobile>
            <Column isHalf>
              <p className="bd-notification is-danger">50%</p>
            </Column>
            <Column>
              <p className="bd-notification is-danger">Auto</p>
            </Column>
            <Column>
              <p className="bd-notification is-danger">Auto</p>
            </Column>
          </Columns>
        </Column>
      </Columns>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

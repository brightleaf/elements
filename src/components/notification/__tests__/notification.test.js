import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom'
import { Notification } from '../index'

expect.extend({ toBeInTheDocument, toHaveClass })
describe('Column and Columns', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Notification>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render isInfo with class is-info', () => {
    const { container } = render(
      <Notification isInfo>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-info')
  })
  /*
     isMobile,
  className,
  isFluid,
  isWideScreen,
  isFullHD,
  */
  it('should render isSuccess with class is-success', () => {
    const { container } = render(
      <Notification isSuccess>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-success')
  })
  it('should render isDanger with class is-danger', () => {
    const { container } = render(
      <Notification isDanger>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-danger')
  })
  it('should render isPrimary with class is-primary', () => {
    const { container } = render(
      <Notification isPrimary>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-primary')
  })
  it('should render isLink with class is-link', () => {
    const { container } = render(
      <Notification isLink>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-link')
  })
  it('should render isWarning with class is-warning', () => {
    const { container } = render(
      <Notification isWarning>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-warning')
  })
  it('should not render with when isShow is false', async () => {
    const mockDismiss = jest.fn(() => {})
    const { container, getByTitle } = render(
      <Notification isShown isPrimary onDismiss={mockDismiss}>
        <div>Hi</div>
      </Notification>
    )
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(getByTitle(/dismiss notification/i))
    const notificationNode = await waitForElement(() =>
      getByTitle('notification element')
    )
    expect(notificationNode).toMatchSnapshot()
    expect(mockDismiss).toHaveBeenCalled()
  })
})

import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { toHaveClass, toHaveAttribute } from '@testing-library/jest-dom'
import { DropDown, DropDownMenu, DropDownDivider, DropDownItem } from '../'

expect.extend({ toHaveClass, toHaveAttribute })

describe('DropDownMenu components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <DropDownMenu label="Please Select">
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('dropdown')
  })
  it('should render up', () => {
    const { container } = render(
      <DropDownMenu label="Please Select" isUp>
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('dropdown')
    expect(container.firstChild).toHaveClass('is-up')
  })
  it('should when the focused `is-active` class added', async () => {
    const { container } = render(
      <DropDownMenu label="Please Select">
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )

    expect(container.firstChild.firstChild).toMatchSnapshot()
    const trigger = document.querySelector('.dropdown-trigger button')
    fireEvent.focus(container.firstChild.firstChild)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).not.toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).not.toHaveClass('is-active')
  })
  it('should when the trigger is clicked `is-active` class toggled', async () => {
    const { container } = render(
      <DropDownMenu label="Please Select">
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )

    const trigger = document.querySelector('.dropdown-trigger button')
    fireEvent.click(trigger)
    expect(container.firstChild).toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).not.toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).toHaveClass('is-active')
    fireEvent.click(trigger)
    expect(container.firstChild).not.toHaveClass('is-active')
  })

  it('should render with the class `is-up` when isUp is passed and have the up icon', async () => {
    const { container } = render(
      <DropDownMenu label="Please Select" isUp>
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )
    expect(container.firstChild).toHaveClass('is-up')
    const icon = document.querySelector('i.fas')
    expect(icon).toHaveClass('fa-angle-up')
  })
  it('should render without the class `is-up` and have the down icon', async () => {
    const { container } = render(
      <DropDownMenu label="Please Select">
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          First
        </DropDownItem>
        <DropDownDivider />
        <DropDownItem
          onClick={e => {
            e.preventDefault()
          }}
        >
          Second
        </DropDownItem>
      </DropDownMenu>
    )
    expect(container.firstChild).not.toHaveClass('is-up')
    const icon = document.querySelector('i.fas')
    expect(icon).toHaveClass('fa-angle-down')
  })
})

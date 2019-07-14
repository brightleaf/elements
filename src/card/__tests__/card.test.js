import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Card, CardBody, CardHeader, CardFooter, CardImage } from '../card'

expect.extend({ toHaveClass })

describe('Card and components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Card>
        <CardBody>Hi</CardBody>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with header and footer and body', () => {
    const { container } = render(
      <Card>
        <CardHeader title={'HEADER'}></CardHeader>
        <CardBody>Hi</CardBody>
        <CardFooter title={'HEADER'}></CardFooter>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with footer header and body', () => {
    const { container } = render(
      <Card>
        <CardFooter></CardFooter>
        <CardHeader title={'HEADER'}></CardHeader>
        <CardBody>Hi</CardBody>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild.firstChild).toHaveClass('card-header')
    expect(container.firstChild.lastChild).toHaveClass('card-footer')
  })
})

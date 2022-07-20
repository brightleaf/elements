import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Breadcrumb, BreadcrumbItem } from '../breadcrumb'

expect.extend({ toHaveClass })

describe('Breadcrumb component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem>
          <a>Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a>Components</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a>Hero</a>
        </BreadcrumbItem>
      </Breadcrumb>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('breadcrumb')
  })
})

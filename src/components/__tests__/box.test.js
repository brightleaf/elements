import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Box } from '../box'

expect.extend({ toHaveClass })

describe('Box component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Box>
        <div>Trapped in a Box</div>
      </Box>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('box')
  })
  it('should render with extra classnames', () => {
    const { container } = render(
      <Box className="boxed-in">
        <div>Trapped in a Box</div>
      </Box>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('box')
    expect(container.firstChild).toHaveClass('boxed-in')
  })
  it('should render with has-background-primary when hasBackgroundPrimary set', () => {
    const { container } = render(
      <Box className="boxed-in" hasBackgroundPrimary>
        <div>Trapped in a Box</div>
      </Box>
    )

    expect(container.firstChild).toHaveClass('box')
    expect(container.firstChild).toHaveClass('has-background-primary')
  })
  test.each([
    ['has-background-primary', 'hasBackgroundPrimary'],
    ['has-background-success', 'hasBackgroundSuccess'],
    ['has-background-warning', 'hasBackgroundWarning'],
    ['has-background-danger', 'hasBackgroundDanger'],
    ['has-background-info', 'hasBackgroundInfo'],
    ['has-background-white', 'hasBackgroundWhite'],
    ['has-background-black', 'hasBackgroundBlack'],
    ['has-background-light', 'hasBackgroundLight'],
    ['has-background-dark', 'hasBackgroundDark'],
    ['has-background-link', 'hasBackgroundLink'],
    ['has-background-black-bis', 'hasBackgroundBlackBis'],
    ['has-background-black-ter', 'hasBackgroundBlackTer'],
    ['has-background-grey-darker', 'hasBackgroundGreyDarker'],
    ['has-background-grey-dark', 'hasBackgroundGreyDark'],
    ['has-background-grey', 'hasBackgroundGrey'],
    ['has-background-grey-light', 'hasBackgroundGreyLight'],
    ['has-background-grey-lighter', 'hasBackgroundGreyLighter'],
    ['has-background-white-ter', 'hasBackgroundWhiteTer'],
    ['has-background-white-bis', 'hasBackgroundWhiteBis'],
  ])(
    'The background color class %i is added when %i is set)',
    (className, propertyName) => {
      const prop = {}
      prop[propertyName] = true
      const { container } = render(
        <Box className="boxed-in" {...prop}>
          <div>Trapped in a Box</div>
        </Box>
      )

      expect(container.firstChild).toHaveClass('box')
      expect(container.firstChild).toHaveClass('boxed-in')
      expect(container.firstChild).toHaveClass(className)
    }
  )
})

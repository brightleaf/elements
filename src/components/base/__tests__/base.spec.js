import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Base } from '../base'

expect.extend({ toHaveClass })

describe('The Base component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const text = 'All your base belong to us'
    const { container } = render(<Base>{text}</Base>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild.innerHTML).toBe(text)
  })
  it('should render with extra classnames', () => {
    const { container } = render(
      <Base className="base">
        <div>Trapped in a Box</div>
      </Base>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('base')
  })
  it('should render with has-background-primary when hasBackgroundPrimary set', () => {
    const { container } = render(
      <Base className="based-in" hasBackgroundPrimary>
        Just some text
      </Base>
    )

    expect(container.firstChild).toHaveClass('based-in')
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
        <Base className="boxed-in" {...prop}>
          <div>Trapped in a Box</div>
        </Base>
      )

      expect(container.firstChild).toHaveClass('boxed-in')
      expect(container.firstChild).toHaveClass(className)
    }
  )
  test.each([
    ['has-text-primary', 'hasTextPrimary'],
    ['has-text-success', 'hasTextSuccess'],
    ['has-text-warning', 'hasTextWarning'],
    ['has-text-danger', 'hasTextDanger'],
    ['has-text-info', 'hasTextInfo'],
    ['has-text-white', 'hasTextWhite'],
    ['has-text-black', 'hasTextBlack'],
    ['has-text-light', 'hasTextLight'],
    ['has-text-dark', 'hasTextDark'],
    ['has-text-link', 'hasTextLink'],
    ['has-text-black-bis', 'hasTextBlackBis'],
    ['has-text-black-ter', 'hasTextBlackTer'],
    ['has-text-grey-darker', 'hasTextGreyDarker'],
    ['has-text-grey-dark', 'hasTextGreyDark'],
    ['has-text-grey', 'hasTextGrey'],
    ['has-text-grey-light', 'hasTextGreyLight'],
    ['has-text-grey-lighter', 'hasTextGreyLighter'],
    ['has-text-white-ter', 'hasTextWhiteTer'],
    ['has-text-white-bis', 'hasTextWhiteBis'],
  ])(
    'The text color class %i is added when %i is set)',
    (className, propertyName) => {
      const prop = {}
      prop[propertyName] = true
      const { container } = render(
        <Base {...prop}>
          <div>Basic element</div>
        </Base>
      )
      expect(container.firstChild).toHaveClass(className)
    }
  )
})

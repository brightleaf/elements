/* eslint-disable sonarjs/no-duplicate-string */
import React, { Fragment } from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Column, Columns, FullColumn } from '../columns'
import { Notification } from '../notification'
expect.extend({ toHaveClass })
const Auto = () => {
  return (
    <Notification isLight isDismissible={false}>
      Auto
    </Notification>
  )
}
describe('Columns and Columns components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Fragment>
        <Columns>
          <Column>
            <Notification isPrimary isDismissible={false}>
              First column
            </Notification>
          </Column>
          <Column>
            <Notification isPrimary isDismissible={false}>
              Second column
            </Notification>
          </Column>
          <Column>
            <Notification isPrimary isDismissible={false}>
              Third column
            </Notification>
          </Column>
          <Column>
            <Notification isPrimary isDismissible={false}>
              Fourth column
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column isFourFifths>
            <Notification isPrimary isDismissible={false}>
              is-four-fifths
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isThreeQuarters>
            <Notification isPrimary isDismissible={false}>
              is-three-quarters
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isTwoThirds>
            <Notification isPrimary isDismissible={false}>
              is-two-thirds
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isThreeFifths>
            <Notification isPrimary isDismissible={false}>
              is-three-fifths
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isHalf>
            <p className="notification is-primary">is-half</p>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isTwoFifths>
            <Notification isPrimary isDismissible={false}>
              is-two-fifths
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isOneThird>
            <Notification isPrimary isDismissible={false}>
              is-one-third
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isOneQuarter>
            <Notification isPrimary isDismissible={false}>
              is-one-quarter
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>

        <Columns>
          <Column isOneFifth>
            <Notification isPrimary isDismissible={false}>
              is-one-fifth
            </Notification>
          </Column>
          <Column>
            <Auto />
          </Column>
          <Column>
            <Auto />
          </Column>
        </Columns>
        <FullColumn>
          <Notification isInfo isDismissible={false}>
            FullColumn
          </Notification>
        </FullColumn>
        <Columns isMobile isMultiline>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isHalf>
            <code>is-half</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column isOneQuarter>
            <code>is-one-quarter</code>
          </Column>
          <Column>
            <Notification isDismissible={false}>Auto</Notification>
          </Column>
        </Columns>
      </Fragment>
    )
    expect(container).toMatchSnapshot()
  })
})

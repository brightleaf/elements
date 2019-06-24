import React from 'react'
import { Column, Columns, FullColumn } from '@brightleaf/elements/columns'

const Auto = () => <p className="notification is-light">Auto</p>
export default () => {
  return (
    <>
      <Columns>
        <Column>
          <p className="notification is-primary">First column</p>
        </Column>
        <Column>
          <p className="notification is-primary">Second column</p>
        </Column>
        <Column>
          <p className="notification is-primary">Third column</p>
        </Column>
        <Column>
          <p className="notification is-primary">Fourth column</p>
        </Column>
      </Columns>

      <Columns>
        <Column isFourFirths>
          <p className="notification is-primary">is-four-fifths</p>
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
          <p className="notification is-primary">is-three-quarters</p>
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
          <p className="notification is-primary">is-two-thirds</p>
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
          <p className="notification is-primary">is-three-fifths</p>
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
          <p className="notification is-primary">is-two-fifths</p>
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
          <p className="notification is-primary">is-one-third</p>
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
          <p className="notification is-primary">is-one-quarter</p>
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
          <p className="notification is-primary">is-one-fifth</p>
        </Column>
        <Column>
          <Auto />
        </Column>
        <Column>
          <Auto />
        </Column>
      </Columns>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-half">
          <code>is-half</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column is-one-quarter">
          <code>is-one-quarter</code>
        </div>
        <div className="column">Auto</div>
      </div>
    </>
  )
}

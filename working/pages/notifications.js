import React, { useState } from 'react'

import {
  Container,
  Columns,
  Column,
  FullColumn,
  Notification,
} from '@brightleaf/elements'
export default () => {
  const [showNotification, setShowNotification] = useState(false)
  console.log('show the Notification?', showNotification)
  return (
    <Container className="App content">
      <FullColumn>
        <Notification
          isPrimary
          isShown={showNotification}
          onDismiss={e => {
            console.log('onDismiss hit')
          }}
        >
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
        {!showNotification && (
          <button
            className="button"
            onClick={e => {
              setShowNotification(!showNotification)
            }}
          >
            Show
          </button>
        )}
      </FullColumn>
      <FullColumn>
        <Notification isPrimary isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isInfo isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isWarning isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isSuccess isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isDanger isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isLink isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
    </Container>
  )
}

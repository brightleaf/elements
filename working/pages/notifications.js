/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React, { useRef, useState } from 'react'
import {
  Container,
  Columns,
  Column,
  FullColumn,
  Notification,
  Title,
} from '../../src'
export default () => {
  const [showNotification, setShowNotification] = useState(false)
  const notifRef = useRef()

  return (
    <Container className="App content">
      <Columns>
        <Column isOneThird>
          <Notification
            ref={notifRef}
            isPrimary
            isShown={showNotification}
            onDismissed={e => {
              console.log('onDismiss hit')
              setShowNotification(!showNotification)
            }}
          >
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
            ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
            fringilla. Nullam gravida purus diam, et dictum{' '}
            <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
            elit
          </Notification>
          {!showNotification && (
            <button
              className="button"
              onClick={e => {
                setShowNotification(!showNotification)
                notifRef.current.show()
              }}
            >
              Show
            </button>
          )}
          {showNotification && (
            <button
              className="button"
              onClick={e => {
                setShowNotification(!showNotification)
                notifRef.current.hide()
              }}
            >
              Hide
            </button>
          )}
        </Column>
      </Columns>
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
      <FullColumn>
        <Notification isLight isShown>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isLight isShown isDismissible={false}>
          <Title as="p">{`isDismissible={false}`}</Title>
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
    </Container>
  )
}

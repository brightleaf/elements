import React from 'react'

import {
  Container,
  Columns,
  Column,
  FullColumn,
  Notification,
} from '@brightleaf/elements'
export default () => {
  return (
    <Container className="App content">
      <FullColumn>
        <Notification isPrimary>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isInfo>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isWarning>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isSuccess>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>
      </FullColumn>
      <FullColumn>
        <Notification isDanger>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
          efficitur. Sit amet, consectetur adipiscing elit
        </Notification>

      </FullColumn>
      <FullColumn>
        <Notification isLink>
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

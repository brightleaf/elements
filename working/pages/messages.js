/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Box,
  Content,
  Column,
  Columns,
  Message,
  MessageBody,
  MessageHeader,
} from '../../src'

export default () => {
  return (
    <Content>
      <Columns>
        <Column isHalf>
          <Box>
            <Message>
              <MessageHeader>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isPrimary>
              <MessageHeader>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isSuccess>
              <MessageHeader>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isDanger>
              <MessageHeader>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isWarning>
              <MessageHeader>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message>
              <MessageHeader hasDelete={false}>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isLarge>
              <MessageHeader hasDelete={false}>Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isSmall>
              <MessageHeader hasDelete={false}>Small Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isMedium>
              <MessageHeader hasDelete={false}>Medium Messages</MessageHeader>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isPrimary>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isDanger>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Message isWarning>
              <MessageBody>Message body</MessageBody>
            </Message>
          </Box>
        </Column>
      </Columns>
    </Content>
  )
}

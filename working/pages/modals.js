/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState, useCallback } from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks'
import {
  Box,
  Button,
  Container,
  Column,
  Columns,
  Image,
  Modal,
  ModalCardHead,
  ModalCardBody,
  ModalCard,
  ModalCardFoot,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'

function useToggle(initialValue) {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = useCallback(() => setToggleValue(!toggleValue))

  return [toggleValue, toggler]
}
export default () => {
  const [modalShown, setModalShown] = useToggle(false)
  useStyleSheet('code.css')
  return (
    <Container>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Modal>
              <Box>
                <div>test</div>
              </Box>
            </Modal>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Box, Container, Modal } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Modal>
        <Box>
          <div>test</div>
        </Box>
      </Modal>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Modal
              ModalType={ModalCard}
              triggerFn={setModalShown}
              isActive={modalShown}
            >
              <ModalCardHead title="ModalTitle"></ModalCardHead>
              <ModalCardBody>Hey Hey</ModalCardBody>
              <ModalCardFoot>
                <Button
                  isSuccess
                  onClick={e => {
                    e.preventDefault()
                    setModalShown(false)
                  }}
                >
                  Save changes
                </Button>
                <Button
                  onClick={e => {
                    e.preventDefault()
                    setModalShown(false)
                  }}
                >
                  Cancel
                </Button>
              </ModalCardFoot>
            </Modal>
          </Column>

          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Box, Container, Modal, useToggle } from '@brightleaf/elements'
export default () => {
  const [modalShown, setModalShown] = useToggle(false)
  return (
    <Container>
      <Modal
        ModalType={ModalCard}
        triggerFn={setModalShown}
        isActive={modalShown}
      >
        <ModalCardHead title="ModalTitle"></ModalCardHead>
        <ModalCardBody>Hey Hey</ModalCardBody>
        <ModalCardFoot>
          <Button
            isSuccess
            onClick={e => {
              e.preventDefault()
              setModalShown(false)
            }}
          >
            Save changes
          </Button>
          <Button
            onClick={e => {
              e.preventDefault()
              setModalShown(false)
            }}
          >
            Cancel
          </Button>
        </ModalCardFoot>
      </Modal>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Modal>
              <Image
                is4by3
                src="https://bulma.io/images/placeholders/1280x960.png"
              />
            </Modal>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Image, Modal } from '@brightleaf/elements'
export default () => {

  return (
    <Container>
      <Modal>
        <Image
          is4by3
          src="https://bulma.io/images/placeholders/1280x960.png"
        />
      </Modal>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Modal>
              <div>test</div>
            </Modal>
          </Column>
        </Columns>
      </Snippet>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Box>
            <Modal>
              <div>test</div>
            </Modal>
          </Box>
        </Column>
      </Columns>
    </Container>
  )
}

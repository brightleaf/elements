/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
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
  useToggle,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'

export default () => {
  const [modalShown, setModalShown] = useToggle(false)
  const [modalShownNoTrigger, setModalShownNoTrigger] = useToggle(false)
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
            Image Modal{' '}
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
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            A custom trigger that{' '}
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                setModalShownNoTrigger(false)
              }}
            >
              will show
            </a>{' '}
            the modal
            <Modal
              includeTrigger={false}
              triggerText="Display"
              triggerFn={setModalShownNoTrigger}
              isActive={modalShownNoTrigger}
            >
              <Box>
                <div>Triggered</div>
              </Box>
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
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          setModalShownNoTrigger(false)
        }}
      >
        Show that
      </a>
      <Modal
        includeTrigger={false}
        triggerText="Display"
        triggerFn={setModalShownNoTrigger}
        isActive={modalShownNoTrigger}
      >
        <Box>
          <div>Triggered</div>
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
            Custom Trigger Text
            <Modal triggerText="Display Modal">
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
      <Modal triggerText="Display Modal">
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

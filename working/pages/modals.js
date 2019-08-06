/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Column,
  Columns,
  Image,
  Modal,
  ModalCardHead,
  ModalCardBody,
  ModalCard,
  ModalCardFoot,
  useToggle,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

export default () => {
  const [modalShown, setModalShown] = useToggle(false)
  const [modalShownNoTrigger, setModalShownNoTrigger] = useToggle(false)
  useStyleSheet('code.css')
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/modals">Modal</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Modal</Title>
          <SubTitle as="p" is="4">
            A classic <strong>modal</strong> overlay, in which you can include
            any content you want
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>
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
    </Section>
  )
}

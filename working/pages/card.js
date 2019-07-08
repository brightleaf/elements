/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardFooterItem,
  CardImage,
  Container,
  Content,
  Column,
  Columns,
  Title,
  SubTitle,
} from '../../src'
import { ComponentsTabs } from '../components/tabs'
export default () => {
  return (
    <Container>
      <ComponentsTabs />
      <Columns>
        <Column isOneQuarter>
          <Card>
            <CardHeader title="Component" hasIcon></CardHeader>
            <CardBody>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardBody>
            <CardFooter>
              <CardFooterItem>
                <a
                  href="#"
                  onClick={e => {
                    console.info('clicked')
                    e.preventDefault()
                  }}
                >
                  Save
                </a>
              </CardFooterItem>
              <CardFooterItem>
                <a href="#">Edit</a>
              </CardFooterItem>
              <CardFooterItem>
                <a href="#">Delete</a>
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
      <hr />
      <Columns>
        <Column isOneQuarter>
          <Card>
            <CardImage
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
            <CardBody>
              <Title as={'p'} is="5">
                {
                  '"There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."'
                }
              </Title>
              <SubTitle as="p" is="6">
                Jeff Atwood
              </SubTitle>
            </CardBody>
            <CardFooter>
              <CardFooterItem>
                <p>
                  <span>
                    View on{' '}
                    <a href="https://twitter.com/codinghorror/status/506010907021828096">
                      Twitter
                    </a>
                  </span>
                </p>
              </CardFooterItem>
              <CardFooterItem>
                <p>
                  <span>
                    Share on <a href="#">Facebook</a>
                  </span>
                </p>
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
    </Container>
  )
}

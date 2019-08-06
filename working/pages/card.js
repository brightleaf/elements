/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardFooterItem,
  CardImage,
  Content,
  Column,
  Columns,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { ComponentsTabs } from '../components/tabs'

import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'

export default () => {
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
            <a href="#/card">Card</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Card</Title>
          <SubTitle as="p" is="4">
            An all-around flexible and composable component
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>
      <Snippet>
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
          <Column isThreeQuarters>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import {
  Card, CardBody, CardHeader, CardFooter, CardFooterItem, CardImage, Content
} from '@brightleaf/elements'

export default () => {
  return (
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
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>

      <Snippet>
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
          <Column isThreeQuarters>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import {
  Card, CardBody, CardHeader, CardFooter, CardFooterItem, CardImage, Content
} from '@brightleaf/elements'

export default () => {
  return (
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
        <SubTitle as="p" is="6">Jeff Atwood</SubTitle>
      </CardBody>
      <CardFooter>
        <CardFooterItem>
          <p>
            <span>
              View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
        </CardFooterItem>
        <CardFooterItem>
          <p><span>Share on <a href="#">Facebook</a></span></p>
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}

/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Column,
  Columns,
  Container,
  Field,
  Tag,
  Tags,
  Control,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'
import Highlight from '../components/highlighter'

const Example = ({ children, isPrimary }) => {
  return <div className="example">{children}</div>
}
export default () => {
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/elements">Elements</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/tags">Titles</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Title and Subtitle</Title>
          <SubTitle as="p" is="4">
            Simple <strong>headings</strong> to add depth to your page
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Content>
        <Example>
          <Columns>
            <Column isHalf>
              <Title>Title</Title>
              <SubTitle>SubTitle</SubTitle>

              <Highlight className="html" languages={['html']}>
                {`
<h1 class="title">Title</h1>
<h2 class="subtitle">SubTitle</h2>
                  `}
              </Highlight>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { SubTitle, Title } from '@brightleaf/elements'

export default () => {
  return (<>
    <Title>Title</Title>
    <SubTitle>SubTitle</SubTitle>
  </>)
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>

        <Example>
          <Columns>
            <Column isHalf>
              <Title is="2">Title</Title>
              <SubTitle is="5">SubTitle</SubTitle>

              <Highlight className="html" languages={['html']}>
                {`
<h1 class="title is-2">Title</h1>
<h2 class="subtitle is-5">SubTitle</h2>
                  `}
              </Highlight>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { SubTitle, Title } from '@brightleaf/elements'

export default () => {
  return (<>
    <Title is="2">Title</Title>
    <SubTitle is="5">SubTitle</SubTitle>
  </>)
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>

        <Example>
          <Columns>
            <Column isHalf>
              <Title is="1">Title</Title>
              <Title is="2">Title</Title>
              <Title is="3">Title</Title>
              <Title is="4">Title</Title>
              <Title is="5">Title</Title>
              <Title is="6">Title</Title>
              <Highlight className="html" languages={['html']}>
                {`
<h1 class="title is-1">Title</h1>
<h1 class="title is-2">Title</h1>
<h1 class="title is-3">Title</h1>
<h1 class="title is-4">Title</h1>
<h1 class="title is-5">Title</h1>
<h1 class="title is-6">Title</h1>
                  `}
              </Highlight>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { SubTitle, Title } from '@brightleaf/elements'

export default () => {
  return (<>
    <Title is="1">Title</Title>
    <Title is="2">Title</Title>
    <Title is="3">Title</Title>
    <Title is="4">Title</Title>
    <Title is="5">Title</Title>
    <Title is="6">Title</Title>
  </>)
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>

        <Example>
          <Columns>
            <Column isHalf>
              <SubTitle is="1">SubTitle</SubTitle>
              <SubTitle is="2">SubTitle</SubTitle>
              <SubTitle is="3">SubTitle</SubTitle>
              <SubTitle is="4">SubTitle</SubTitle>
              <SubTitle is="5">SubTitle</SubTitle>
              <SubTitle is="6">SubTitle</SubTitle>
              <Highlight className="html" languages={['html']}>
                {`
<h1 class="subtitle is-1">SubTitle</h1>
<h1 class="subtitle is-2">SubTitle</h1>
<h1 class="subtitle is-3">SubTitle</h1>
<h1 class="subtitle is-4">SubTitle</h1>
<h1 class="subtitle is-5">SubTitle</h1>
<h1 class="subtitle is-6">SubTitle</h1>
                  `}
              </Highlight>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { SubTitle, Title } from '@brightleaf/elements'

export default () => {
  return (<>
    <Title is="1">Title</Title>
    <Title is="2">Title</Title>
    <Title is="3">Title</Title>
    <Title is="4">Title</Title>
    <Title is="5">Title</Title>
    <Title is="6">Title</Title>
  </>)
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
      </Content>
    </Section>
  )
}

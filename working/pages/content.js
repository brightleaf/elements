/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Columns,
  Column,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'

export default () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }
  `)
  useStyleSheet('code.css')
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
            <a href="#/content">Content</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Content</Title>
          <SubTitle as="p" is="4">
            A single class to handle <strong>WYSIWYG</strong> generated content,
            where only <strong>HTML</strong> tags are available
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Content>
              <p>
                When you can{`'`}t use the CSS classes you want, or when you
                just want to directly use HTML tags, use <code>content</code> as
                container. It can handle almost any HTML tag:
              </p>
              <ul>
                <li>
                  <code>&lt;p&gt;</code> paragraphs
                </li>
                <li>
                  <code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code>{' '}
                  <code>&lt;dl&gt;</code> lists
                </li>
                <li>
                  <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings
                </li>
                <li>
                  <code>&lt;blockquote&gt;</code> quotes
                </li>
                <li>
                  <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code>
                </li>
                <li>
                  <code>&lt;table&gt;</code> <code>&lt;tr&gt;</code>{' '}
                  <code>&lt;th&gt;</code> <code>&lt;td&gt;</code> tables
                </li>
              </ul>
              <p>
                This <code>content</code> object can be used in <em>any</em>{' '}
                context where you just want to (or can only) write some{' '}
                <strong>text</strong>. For example, it{`'`}s used for the
                paragraph you{`'`}re currently reading.
              </p>
              <p>
                For more details see the{' '}
                <a
                  href="https://bulma.io/documentation/elements/content/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bulma docs
                </a>
              </p>
            </Content>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Content } from '@brightleaf/elements'

export default () => {

  return (
    <Content>
      <p>
        When you can{"'"}t use the CSS classes you want, or when you
        just want to directly use HTML tags, use <code>content</code> as
        container. It can handle almost any HTML tag:
      </p>
      <ul>
        <li>
          <code>&lt;p&gt;</code> paragraphs
        </li>
        <li>
          <code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code>{' '}
          <code>&lt;dl&gt;</code> lists
        </li>
        <li>
          <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings
        </li>
        <li>
          <code>&lt;blockquote&gt;</code> quotes
        </li>
        <li>
          <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code>
        </li>
        <li>
          <code>&lt;table&gt;</code> <code>&lt;tr&gt;</code>{' '}
          <code>&lt;th&gt;</code> <code>&lt;td&gt;</code> tables
        </li>
      </ul>
      <p>
        This <code>content</code> object can be used in <em>any</em>{' '}
        context where you just want to (or can only) write some{' '}
        <strong>text</strong>. For example, it{"'"}s used for the
        paragraph you{"'"}re currently reading.
      </p>
      <p>
        For more details see the{' '}
        <a
          href="https://bulma.io/documentation/elements/content/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bulma docs
        </a>
      </p>
    </Content>
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

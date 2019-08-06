/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'

import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Control,
  Columns,
  Column,
  Icon,
  Hero,
  HeroBody,
  Panel,
  PanelBlock,
  PanelTabs,
  Section,
  SubTitle,
  Title,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

export default () => {
  useTitle('Panel example from @brightleaf/elements')
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
            <a href="#/panels">Panel</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Panel</Title>
          <SubTitle as="p" is="4">
            A composable <strong>panel</strong>, for compact controls
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isOneThird>
            <Panel heading="repositories">
              <PanelBlock>
                <Control hasIconsLeft>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="search"
                  />
                  <Icon isSmall isLeft fas icon="search" />
                </Control>
              </PanelBlock>
              <PanelTabs>
                <a className="is-active">all</a>
                <a>public</a>
                <a>private</a>
                <a>sources</a>
                <a>forks</a>
              </PanelTabs>
              <PanelBlock as="a" isActive>
                <Icon iconClassName="panel-icon" fas icon="book" />
                bulma
              </PanelBlock>
              <PanelBlock as="a">
                <Icon iconClassName="panel-icon" fas icon="book" />
                marksheet
              </PanelBlock>
              <PanelBlock as="a">
                <Icon iconClassName="panel-icon" fas icon="book" />
                minireset.css
              </PanelBlock>
              <PanelBlock as="a">
                <Icon iconClassName="panel-icon" fas icon="book" />
                jgthms.github.io
              </PanelBlock>
              <PanelBlock as="a">
                <Icon iconClassName="panel-icon" fas icon="code-branch" />
                daniellowtw/infboard
              </PanelBlock>
              <PanelBlock as="a">
                <Icon iconClassName="panel-icon" fas icon="code-branch" />
                mojs
              </PanelBlock>
              <PanelBlock as="label">
                <input type="checkbox" />
                remember me
              </PanelBlock>
              <PanelBlock>
                <Button isLink isOutlined isFullWidth>
                  reset all filters
                </Button>
              </PanelBlock>
            </Panel>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Control, Icon, Panel, PanelBlock, PanelTabs } from '@brightleaf/elements'
export default () => {
  return (
    <Panel heading="repositories">
      <PanelBlock>
        <Control hasIconsLeft>
          <input
            className="input is-small"
            type="text"
            placeholder="search"
          />
          <Icon isSmall isLeft fas icon="search"></Icon>
        </Control>
      </PanelBlock>
      <PanelTabs>
        <a className="is-active">all</a>
        <a>public</a>
        <a>private</a>
        <a>sources</a>
        <a>forks</a>
      </PanelTabs>
      <PanelBlock as="a" isActive>
        <Icon iconClassName="panel-icon" fas icon="book"></Icon>
        bulma
      </PanelBlock>
      <PanelBlock as="a">
        <Icon iconClassName="panel-icon" fas icon="book"></Icon>
        marksheet
      </PanelBlock>
      <PanelBlock as="a">
        <Icon iconClassName="panel-icon" fas icon="book"></Icon>
        minireset.css
      </PanelBlock>
      <PanelBlock as="a">
        <Icon iconClassName="panel-icon" fas icon="book"></Icon>
        jgthms.github.io
      </PanelBlock>
      <PanelBlock as="a">
        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>
        daniellowtw/infboard
      </PanelBlock>
      <PanelBlock as="a">
        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>
        mojs
      </PanelBlock>
      <PanelBlock as="label">
        <input type="checkbox"></input>
        remember me
      </PanelBlock>
      <PanelBlock>
        <Button isLink isOutlined isFullWidth>
          reset all filters
        </Button>
      </PanelBlock>
    </Panel>
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

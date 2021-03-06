import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Columns,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

export default () => {
  useStyleSheet('./code.css')

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
            <a href="#/menu">Menu</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Menu</Title>
          <SubTitle as="p" is="4">
            A simple <strong>menu</strong>, for any type of vertical navigation
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isHalf>
            <Menu>
              <MenuLabel>General</MenuLabel>
              <MenuList className="menu-list">
                <MenuListItem>
                  <a>Dashboard</a>
                </MenuListItem>
                <MenuListItem>
                  <a>Customers</a>
                </MenuListItem>
              </MenuList>
              <MenuLabel>Administration</MenuLabel>
              <MenuList>
                <MenuListItem>
                  <a>Team Settings</a>
                </MenuListItem>
                <MenuListItem>
                  <a className="is-active">Manage Your Team</a>
                  <ul>
                    <li>
                      <a>Members</a>
                    </li>
                    <li>
                      <a>Plugins</a>
                    </li>
                    <li>
                      <a>Add a member</a>
                    </li>
                  </ul>
                </MenuListItem>
                <MenuListItem>
                  <a>Invitations</a>
                </MenuListItem>
                <MenuListItem>
                  <a>Cloud Storage Environment Settings</a>
                </MenuListItem>
                <MenuListItem>
                  <a>Authentication</a>
                </MenuListItem>
              </MenuList>

              <MenuLabel>Transactions</MenuLabel>
              <MenuList>
                <MenuListItem>
                  <a>Payments</a>
                </MenuListItem>
                <MenuListItem>
                  <a>Transfers</a>
                </MenuListItem>
                <MenuListItem>
                  <a>Balance</a>
                </MenuListItem>
              </MenuList>
            </Menu>
          </Column>
          <Column is isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Menu, MenuLabel, MenuList, MenuListItem } from '@brightleaf/elements'

export default () => {
  return (
    <Menu>
      <MenuLabel>General</MenuLabel>
      <MenuList className="menu-list">
        <MenuListItem>
          <a>Dashboard</a>
        </MenuListItem>
        <MenuListItem>
          <a>Customers</a>
        </MenuListItem>
      </MenuList>
      <MenuLabel>Administration</MenuLabel>
      <MenuList>
        <MenuListItem>
          <a>Team Settings</a>
        </MenuListItem>
        <MenuListItem>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </MenuListItem>
        <MenuListItem>
          <a>Invitations</a>
        </MenuListItem>
        <MenuListItem>
          <a>Cloud Storage Environment Settings</a>
        </MenuListItem>
        <MenuListItem>
          <a>Authentication</a>
        </MenuListItem>
      </MenuList>

      <MenuLabel>Transactions</MenuLabel>
      <MenuList>
        <MenuListItem>
          <a>Payments</a>
        </MenuListItem>
        <MenuListItem>
          <a>Transfers</a>
        </MenuListItem>
        <MenuListItem>
          <a>Balance</a>
        </MenuListItem>
      </MenuList>
    </Menu>
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

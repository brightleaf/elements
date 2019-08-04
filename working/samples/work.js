import React, { useEffect } from 'react'
import {
  Container,
  NavigationView,
  Icon,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Section,
} from '../../src'
const Example = () => {
  useEffect(() => {
    const b = document.querySelector('body')
    b.classList.add('has-static-navigation-view')
    return () => {
      b.classList.remove('has-static-navigation-view')
    }
  }, [])
  return (
    <Section>
      <NavigationView>
        <Menu>
          <MenuLabel>General</MenuLabel>
          <MenuList className="menu-list">
            <MenuListItem>
              <a>
                <Icon fas icon="box" /> Dashboard
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="address-card" /> Customers
              </a>
            </MenuListItem>
          </MenuList>
          <MenuLabel>Administration</MenuLabel>
          <MenuList>
            <MenuListItem>
              <a>
                <Icon fas icon="cog" />
                Team Settings
              </a>
            </MenuListItem>
            <MenuListItem>
              <a className="is-active">
                <Icon fas icon="child" />
                Manage Your Team
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="at" /> Invitations
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="cloud" /> Cloud Storage Settings
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="user" /> Authentication
              </a>
            </MenuListItem>
          </MenuList>
          <MenuLabel>Transactions</MenuLabel>
          <MenuList>
            <MenuListItem>
              <a>
                <Icon fas icon="credit-card" /> Payments
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="align-center" /> Transfers
              </a>
            </MenuListItem>
            <MenuListItem>
              <a>
                <Icon fas icon="briefcase" /> Balance
              </a>
            </MenuListItem>
          </MenuList>
        </Menu>
      </NavigationView>
      <Container>?</Container>
    </Section>
  )
}

export default Example

import React from 'react'
import { useStyleSheet, useStyles } from '@brightleaf/react-hooks'
import {
  BaseIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardImageContainer,
  CardBody,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarItem,
  NavBarStart,
  Icon,
  Tile,
  Title,
  SubTitle,
  Table,
  Tag,
  Tabs,
  TabItem,
  CardHeader,
  CardFooter,
  CardFooterItem,
} from '../../src/'

export const AdminTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('admin.css')
  return (
    <>
      <NavBar isWhite className="navbar is-white">
        <Container className="container">
          <NavBarBrand className="brand-text" title="Bulma Admin"></NavBarBrand>
          <NavBarMenu id="navMenu">
            <NavBarStart className="navbar-start">
              <NavBarItem>
                <a href="#HERO">Home</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#BLOG">Blog</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#LANDING">Landing</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#COVER">Cover</a>
              </NavBarItem>
            </NavBarStart>
          </NavBarMenu>
        </Container>
      </NavBar>

      <Container className="container">
        <Columns className="columns">
          <Column size="3" className="column is-3 ">
            <Menu className="is-hidden-mobile">
              <MenuLabel>General</MenuLabel>
              <MenuList className="menu-list">
                <MenuListItem>
                  <a className="is-active">Dashboard</a>
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
                  <a>Manage Your Team</a>
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
          <Column size="9" className="column is-9">
            <Breadcrumb className="breadcrumb" aria-label="breadcrumbs">
              <BreadcrumbItem>
                <a href="../">Bulma</a>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <a href="../">Templates</a>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <a href="../">Examples</a>
              </BreadcrumbItem>

              <BreadcrumbItem isActive>
                <a href="#">Admin</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <Hero className="hero is-info welcome is-small">
              <Container className="container">
                <Title as="h1">Hello, Admin.</Title>
                <SubTitle as="h2">I hope you are having a great day!</SubTitle>
              </Container>
            </Hero>
            <section className="info-tiles">
              <Tile isAncestor hasTextCentered className="has-text-centered">
                <Tile isParent className="tile is-parent">
                  <Tile isBox isChild>
                    <Title as="p">439k</Title>
                    <SubTitle as="p">Users</SubTitle>
                  </Tile>
                </Tile>
                <Tile isParent>
                  <Tile isChild isBox>
                    <Title as="p">59k</Title>
                    <SubTitle as="p">Products</SubTitle>
                  </Tile>
                </Tile>
                <Tile isParent className="tile is-parent">
                  <Tile isChild isBox>
                    <Title as="p">3.4k</Title>
                    <SubTitle as="p">Open Orders</SubTitle>
                  </Tile>
                </Tile>
                <Tile isParent className="tile is-parent">
                  <Tile isChild isBox>
                    <Title as="p">19</Title>
                    <SubTitle as="p">Exceptions</SubTitle>
                  </Tile>
                </Tile>
              </Tile>
            </section>
            <Columns className="columns">
              <Column className="column is-6">
                <Card className="events-card">
                  <CardHeader
                    className="card-header"
                    title="Events"
                    hasIcon
                    fa
                  ></CardHeader>
                  <div className="card-table">
                    <Content className="content">
                      <Table isFullWidth isStriped>
                        <tbody>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <i className="fa fa-bell-o"></i>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td width="5%">
                              <BaseIcon icon="bell-o" fa={true}></BaseIcon>
                            </td>
                            <td>Lorum ipsum dolem aire</td>
                            <td>
                              <a
                                className="button is-small is-primary"
                                href="#"
                              >
                                Action
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Content>
                  </div>
                  <CardFooter className="card-footer">
                    <CardFooterItem>
                      <a href="#">View All</a>
                    </CardFooterItem>
                  </CardFooter>
                </Card>
              </Column>
              <Column size="6">
                <Card>
                  <CardHeader title="Inventory Search" hasIcon fa></CardHeader>
                  <CardBody className="card-content">
                    <Content>
                      <Control hasIconsLeft hasIconsRight>
                        <input
                          className="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <Icon isMedium isLeft fa icon="search" />
                        <Icon isMedium isRight fa icon="check" />
                      </Control>
                    </Content>
                  </CardBody>
                </Card>
                <Card className="card">
                  <CardHeader
                    className="card-header"
                    title="User Search"
                  ></CardHeader>
                  <CardBody className="card-content">
                    <Content className="content">
                      <Control hasIconsLeft hasIconsRight>
                        <input
                          className="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <Icon isMedium isLeft fa icon="search" />
                        <Icon isMedium isRight fa icon="check" />
                      </Control>
                    </Content>
                  </CardBody>
                </Card>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </>
  )
}

export default AdminTemplate

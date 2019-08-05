/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import { useMediaQuery } from '@brightleaf/react-hooks/lib/use-media-query'
import classnames from 'classnames'
import {
  BaseIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardFooterItem,
  CardImageContainer,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Footer,
  Header,
  Hero,
  HeroBody,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  MaterialIcon,
  MediaObject,
  MediaContent,
  MediaLeft,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarItem,
  Icon,
  Title,
  SubTitle,
  Section,
  Tag,
  Tags,
  Message,
  MessageBody,
  CardImage,
} from '../../src/'

export const ImageTimelineTemplate = () => {
  useStyleSheet('https://fonts.googleapis.com/icon?family=Material+Icons')
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('images.css')
  useScript('font-awesome.js')

  return (
    <>
      <NavBar isTransparent className="is-inline-flex">
        <NavBarBrand
          src="brightleafjs-logo.png"
          href="https://brightleaf.dev"
          target="navbarBasicExample"
          width="112"
          height="28"
        />

        <NavBarMenu className="navbar-menu">
          <NavBarItem className="navbar-item">
            <div>
              <Control hasIconsLeft className="control has-icons-left">
                <input
                  className="input is-small has-text-centered"
                  type="text"
                  placeholder="search"
                />
                <MaterialIcon icon="search" isLeft isSmall />
              </Control>
            </div>
          </NavBarItem>
        </NavBarMenu>
        <NavBarItem className="navbar-item is-flex-touch">
          <div>
            <NavBarItem>
              <a href="#">
                <MaterialIcon icon="explore" />
              </a>
            </NavBarItem>
            <NavBarItem>
              <a href="#">
                <MaterialIcon icon="favorite_border" />
              </a>
            </NavBarItem>
            <NavBarItem>
              <a href="#">
                <MaterialIcon icon="person_outline" />
              </a>
            </NavBarItem>
          </div>
        </NavBarItem>
      </NavBar>
      <Columns className="body-columns">
        <Column
          isHalf
          isOffsetOneQuarter
          className="column is-half is-offset-one-quarter"
        >
          <Card>
            <Header>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="48"
                    src="https://source.unsplash.com/random/96x96"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title is="4" as="p">
                    John Smith
                  </Title>
                  <SubTitle is="6" as="p">
                    @johnsmith
                  </SubTitle>
                </MediaContent>
              </MediaObject>
            </Header>
            <CardImage
              is4by3
              src="https://source.unsplash.com/random/1280x960"
              alt="Placeholder image"
            />

            <CardBody>
              <Level isMobile>
                <LevelLeft>
                  <LevelItem hasTextCentered>
                    <div>
                      <a href="">
                        <MaterialIcon icon="favorite_border" />
                      </a>
                    </div>
                  </LevelItem>
                  <LevelItem className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <MaterialIcon icon="chat_bubble_outline" />
                      </a>
                    </div>
                  </LevelItem>
                </LevelLeft>
              </Level>

              <Content>
                <p>
                  <strong>32 Likes</strong>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.<a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
              </Content>
            </CardBody>
            <CardFooter>
              <Columns isMobile>
                <Column is="11">
                  <Field>
                    <Control>
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </Control>
                  </Field>
                </Column>
                <Column hasTextCentered>
                  <Button>
                    <MaterialIcon icon="more_horiz" />
                  </Button>
                </Column>
              </Columns>
            </CardFooter>
          </Card>

          <Card>
            <Header>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="48"
                    src="https://source.unsplash.com/random/96x96"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title is="4" as="p">
                    John Smith
                  </Title>
                  <SubTitle is="6" as="p">
                    @johnsmith
                  </SubTitle>
                </MediaContent>
              </MediaObject>
            </Header>
            <CardImage
              is4by3
              src="https://source.unsplash.com/random/1280x964"
              alt="Placeholder image"
            />

            <CardBody>
              <Level isMobile>
                <LevelLeft>
                  <LevelItem hasTextCentered>
                    <div>
                      <a href="">
                        <MaterialIcon icon="favorite_border" />
                      </a>
                    </div>
                  </LevelItem>
                  <LevelItem className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <MaterialIcon icon="chat_bubble_outline" />
                      </a>
                    </div>
                  </LevelItem>
                </LevelLeft>
              </Level>

              <Content>
                <p>
                  <strong>32 Likes</strong>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.<a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
              </Content>
            </CardBody>
            <CardFooter>
              <Columns isMobile>
                <Column is="11">
                  <Field>
                    <Control>
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </Control>
                  </Field>
                </Column>
                <Column hasTextCentered>
                  <Button>
                    <MaterialIcon icon="more_horiz" />
                  </Button>
                </Column>
              </Columns>
            </CardFooter>
          </Card>
          <Card>
            <Header>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="48"
                    src="https://source.unsplash.com/random/96x96"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title is="4" as="p">
                    John Smith
                  </Title>
                  <SubTitle is="6" as="p">
                    @johnsmith
                  </SubTitle>
                </MediaContent>
              </MediaObject>
            </Header>
            <CardImage
              is4by3
              src="https://source.unsplash.com/random/1280x963"
              alt="Placeholder image"
            />

            <CardBody>
              <Level isMobile>
                <LevelLeft>
                  <LevelItem hasTextCentered>
                    <div>
                      <a href="">
                        <MaterialIcon icon="favorite_border" />
                      </a>
                    </div>
                  </LevelItem>
                  <LevelItem className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <MaterialIcon icon="chat_bubble_outline" />
                      </a>
                    </div>
                  </LevelItem>
                </LevelLeft>
              </Level>

              <Content>
                <p>
                  <strong>32 Likes</strong>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.<a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
              </Content>
            </CardBody>
            <CardFooter>
              <Columns isMobile>
                <Column is="11">
                  <Field>
                    <Control>
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </Control>
                  </Field>
                </Column>
                <Column hasTextCentered>
                  <Button>
                    <MaterialIcon icon="more_horiz" />
                  </Button>
                </Column>
              </Columns>
            </CardFooter>
          </Card>
          <Card>
            <Header>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="48"
                    src="https://source.unsplash.com/random/96x96"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title is="4" as="p">
                    John Smith
                  </Title>
                  <SubTitle is="6" as="p">
                    @johnsmith
                  </SubTitle>
                </MediaContent>
              </MediaObject>
            </Header>
            <CardImage
              is4by3
              src="https://source.unsplash.com/random/1280x962"
              alt="Placeholder image"
            />

            <CardBody>
              <Level isMobile>
                <LevelLeft>
                  <LevelItem hasTextCentered>
                    <div>
                      <a href="">
                        <MaterialIcon icon="favorite_border" />
                      </a>
                    </div>
                  </LevelItem>
                  <LevelItem className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <MaterialIcon icon="chat_bubble_outline" />
                      </a>
                    </div>
                  </LevelItem>
                </LevelLeft>
              </Level>

              <Content>
                <p>
                  <strong>32 Likes</strong>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.<a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
              </Content>
            </CardBody>
            <Field>
              <Columns isMobile>
                <Column is="11">
                  <Field>
                    <Control>
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </Control>
                  </Field>
                </Column>
                <Column hasTextCentered>
                  <Button>
                    <MaterialIcon icon="more_horiz" />
                  </Button>
                </Column>
              </Columns>
            </Field>
          </Card>
          <Card>
            <Header>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="48"
                    src="https://source.unsplash.com/random/96x96"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title is="4" as="p">
                    John Smith
                  </Title>
                  <SubTitle is="6" as="p">
                    @johnsmith
                  </SubTitle>
                </MediaContent>
              </MediaObject>
            </Header>
            <CardImage
              is4by3
              src="https://source.unsplash.com/random/1280x961"
              alt="Placeholder image"
            />

            <CardBody>
              <Level isMobile>
                <LevelLeft>
                  <LevelItem hasTextCentered>
                    <div>
                      <a href="">
                        <MaterialIcon icon="favorite_border" />
                      </a>
                    </div>
                  </LevelItem>
                  <LevelItem className="level-item has-text-centered">
                    <div>
                      <a href="">
                        <MaterialIcon icon="chat_bubble_outline" />
                      </a>
                    </div>
                  </LevelItem>
                </LevelLeft>
              </Level>

              <Content>
                <p>
                  <strong>32 Likes</strong>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.<a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
              </Content>
            </CardBody>
            <CardFooter>
              <Columns isMobile>
                <Column is="11">
                  <Field>
                    <Control>
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </Control>
                  </Field>
                </Column>
                <Column hasTextCentered>
                  <Button>
                    <MaterialIcon icon="more_horiz" />
                  </Button>
                </Column>
              </Columns>
            </CardFooter>
          </Card>

          <Footer>
            <Container isFluid>
              <Content hasTextCentered>
                <p>
                  <strong>Bulma</strong> by
                  <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
                  is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">
                    MIT
                  </a>
                  . The website content is licensed
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                  </a>
                  .
                </p>
              </Content>
            </Container>
          </Footer>
        </Column>
      </Columns>
    </>
  )
}

export default ImageTimelineTemplate

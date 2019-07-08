import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks'
import {
  BaseIcon,
  Box,
  Button,
  Card,
  CardImageContainer,
  CardBody,
  Column,
  Columns,
  Container,
  Content,
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  Image,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarItem,
  Icon,
  Tabs,
  TabItem,
  Tile,
  Title,
  SubTitle,
  Tag,
} from '../../src/'
export const HeroTemplate = () => {
  useStyleSheet('hero.css')
  return (
    <>
      <Hero isInfo isMedium isBold className="hero is-info is-medium is-bold">
        <HeroHead>
          <NavBar>
            <Container>
              <NavBarBrand
                src="http://bulma.io/images/bulma-type-white.png"
                href="#"
              />
              <NavBarMenu>
                <NavBarEnd>
                  <Tabs isRight>
                    <TabItem className="is-active">
                      <a>Home</a>
                    </TabItem>
                    <TabItem>
                      <a href="#COVER">Cover</a>
                    </TabItem>
                    <TabItem>
                      <a href="#BLOG">Blog</a>
                    </TabItem>
                    <TabItem>
                      <a href="#LANDING">Landing</a>
                    </TabItem>
                    <TabItem>
                      <a href="">Help</a>
                    </TabItem>

                    <NavBarItem>
                      <span>
                        <Button
                          isWhite
                          isAnchor
                          isOutlined
                          href="https://github.com/brightleaf/elements/blob/master/working/templates/hero.js"
                        >
                          <Icon fa icon="github"></Icon>
                          <span title="Hello from the other side">
                            View Source
                          </span>
                        </Button>
                      </span>
                    </NavBarItem>
                  </Tabs>
                </NavBarEnd>
              </NavBarMenu>
            </Container>
          </NavBar>
        </HeroHead>
        <HeroBody>
          <Container hasTextCentered>
            <Title>The new standard in &lt;insert industry here&gt;</Title>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SubTitle>
          </Container>
        </HeroBody>
      </Hero>
      <Box className="cta">
        <p className="has-text-centered">
          <Tag isPrimary>New</Tag> Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Box>
      <Container>
        <Columns className="features">
          <Column size="4">
            <Card className="is-shady">
              <CardImageContainer className="card-image has-text-centered">
                <BaseIcon fa icon="paw" />
              </CardImageContainer>
              <CardBody>
                <Content>
                  <h4>Tristique senectus et netus et. </h4>
                  <p>
                    Purus semper eget duis at tellus at urna condimentum mattis.
                    Non blandit massa enim nec. Integer enim neque volutpat ac
                    tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                    consequat semper viverra nam.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </Content>
              </CardBody>
            </Card>
          </Column>
          <Column size="4">
            <Card className="is-shady">
              <CardImageContainer hasTextCentered>
                <BaseIcon fa icon="empire"></BaseIcon>
              </CardImageContainer>
              <CardBody>
                <Content>
                  <h4>Tempor orci dapibus ultrices in.</h4>
                  <p>
                    Ut venenatis tellus in metus vulputate. Amet consectetur
                    adipiscing elit pellentesque. Sed arcu non odio euismod
                    lacinia at quis risus. Faucibus turpis in eu mi bibendum
                    neque egestas cmonsu songue. Phasellus vestibulum lorem sed
                    risus.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </Content>
              </CardBody>
            </Card>
          </Column>
          <Column size="4">
            <Card className="is-shady">
              <CardImageContainer className="has-text-centered">
                <BaseIcon fa icon="apple"></BaseIcon>
              </CardImageContainer>
              <CardBody>
                <Content>
                  <h4> Leo integer malesuada nunc vel risus. </h4>
                  <p>
                    Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce
                    ut placerat orci nulla pellentesque dignissim enim. Libero
                    id faucibus nisl tincidunt eget nullam. Commodo viverra
                    maecenas accumsan lacus vel facilisis.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </Content>
              </CardBody>
            </Card>
          </Column>
        </Columns>
        <Column size="8" className="intro is-offset-2">
          <Title as="h2">Perfect for developers or designers!</Title>
          <br />
          <SubTitle as="p">
            Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi
            nullam vehicula ipsum a. Neque egestas congue quisque egestas diam
            in arcu cursus.
          </SubTitle>
        </Column>
        <Content className="sandbox">
          <Tile isAncestor>
            <Tile isParent className="is-shady">
              <Tile isNotification isChild isWhite>
                <p className="title">Hello World</p>
                <p className="subtitle">What is up?</p>
              </Tile>
            </Tile>
            <Tile isParent className="is-shady">
              <Tile isChild isWhite isNotification>
                <p className="title">Foo</p>
                <p className="subtitle">Bar</p>
              </Tile>
            </Tile>
            <Tile isParent className="is-shady">
              <Tile isChild isWhite isNotification>
                <Title as="p">Third column</Title>
                <SubTitle as="p">With some content</SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
          </Tile>
          <Tile isAncestor>
            <Tile isVertical size="8">
              <Tile className="tile">
                <Tile isParent isVertical>
                  <Tile isChild isWhite isNotification>
                    <Title as="p">Vertical tiles</Title>
                    <SubTitle as="p">Top box</SubTitle>
                  </Tile>
                  <Tile isChild isWhite isNotification>
                    <Title as="p">Vertical tiles</Title>
                    <SubTitle as="p">Bottom box</SubTitle>
                  </Tile>
                </Tile>
                <Tile isParent>
                  <Tile isChild isNotification isWhite>
                    <Title as="p">Middle box</Title>
                    <SubTitle as="p">With an image</SubTitle>
                    <Image
                      is4by3
                      src="https://picsum.photos/640/480/?random"
                      alt="Description"
                    />
                  </Tile>
                </Tile>
              </Tile>
              <Tile isParent className="is-shady">
                <Tile isChild isNotification isWhite>
                  <Title as="p" className="title">
                    Wide column
                  </Title>
                  <SubTitle as="p">Aligned with the right column</SubTitle>
                  <Content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </Content>
                </Tile>
              </Tile>
            </Tile>
            <Tile isParent className="is-shady">
              <Tile isChild isNotification isWhite>
                <Content>
                  <Title as="p">Tall column</Title>
                  <SubTitle as="p">With even more content</SubTitle>
                  <Content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam semper diam at erat pulvinar, at pulvinar felis
                      blandit. Vestibulum volutpat tellus diam, consequat
                      gravida libero rhoncus ut. Morbi maximus, leo sit amet
                      vehicula eleifend, nunc dui porta orci, quis semper odio
                      felis ut quam.
                    </p>
                    <p>
                      Suspendisse varius ligula in molestie lacinia. Maecenas
                      varius eget ligula a sagittis. Pellentesque interdum, nisl
                      nec interdum maximus, augue diam porttitor lorem, et
                      sollicitudin felis neque sit amet erat. Maecenas imperdiet
                      felis nisi, fringilla luctus felis hendrerit sit amet.
                      Aenean vitae gravida diam, finibus dignissim turpis. Sed
                      eget varius ligula, at volutpat tortor.
                    </p>
                    <p>
                      Integer sollicitudin, tortor a mattis commodo, velit urna
                      rhoncus erat, vitae congue lectus dolor consequat libero.
                      Donec leo ligula, maximus et pellentesque sed, gravida a
                      metus. Cras ullamcorper a nunc ac porta. Aliquam ut
                      aliquet lacus, quis faucibus libero. Quisque non semper
                      leo.
                    </p>
                  </Content>
                </Content>
              </Tile>
            </Tile>
          </Tile>
          <Tile isAncestor>
            <Tile isParent className="is-shady">
              <Tile isChild isNotification isWhite>
                <Title as="p">Side column</Title>
                <SubTitle as="p">With some content</SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
            <Tile isParent size="8" className="is-shady">
              <Tile isChild isNotification isWhite>
                <Title as="p">Main column</Title>
                <SubTitle as="p">With some content</SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
          </Tile>
          <Tile isAncestor>
            <Tile isParent size="8" className="is-shady">
              <Tile isChild isNotification isWhite>
                <Title as="p">Murphy's law</Title>
                <SubTitle as="p">
                  Anything that can go wrong will go wrong
                </SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
            <Tile isParent className="is-shady">
              <Tile
                isChild
                isNotification
                isWhite
                className="tile is-child notification is-white"
              >
                <Title as="p">Main column</Title>
                <SubTitle as="p">With some content</SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
          </Tile>
        </Content>
      </Container>
      <Footer>
        <Container>
          <Columns>
            <Column size="3" className="is-offset-2">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Vestibulum errato isse</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Aisia caisia</a>
                </li>
                <li>
                  <a href="#">Murphy's law</a>
                </li>
                <li>
                  <a href="#">Flimsy Lavenrock</a>
                </li>
                <li>
                  <a href="#">Maven Mousie Lavender</a>
                </li>
              </ul>
            </Column>
            <Column size="3">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Labore et dolore magna aliqua</a>
                </li>
                <li>
                  <a href="#">Kanban airis sum eschelor</a>
                </li>
                <li>
                  <a href="#">Modular modern free</a>
                </li>
                <li>
                  <a href="#">The king of clubs</a>
                </li>
                <li>
                  <a href="#">The Discovery Dissipation</a>
                </li>
                <li>
                  <a href="#">Course Correction</a>
                </li>
                <li>
                  <a href="#">Better Angels</a>
                </li>
              </ul>
            </Column>
            <Column size="4">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Objects in space</a>
                </li>
                <li>
                  <a href="#">Playing cards with coyote</a>
                </li>
                <li>
                  <a href="#">Goodbye Yellow Brick Road</a>
                </li>
                <li>
                  <a href="#">The Garden of Forking Paths</a>
                </li>
                <li>
                  <a href="#">Future Shock</a>
                </li>
              </ul>
            </Column>
          </Columns>
          <Content className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="https://github.com/dansup/bulma-templates"
              >
                <BaseIcon fa icon="github"></BaseIcon>
              </a>
            </p>
            <div className="control level-item">
              <a href="https://github.com/dansup/bulma-templates">
                <div className="tags has-addons">
                  <span className="tag is-dark">Bulma Templates</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
          </Content>
        </Container>
      </Footer>
    </>
  )
}

export default HeroTemplate

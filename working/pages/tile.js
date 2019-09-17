/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Columns,
  Column,
  Hero,
  HeroBody,
  Tile,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { LayoutTabs } from '../components/tabs'
import Highlight from '../components/highlighter'
import { CodeCollapse } from '../components/collapse'
export default () => {
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
            <a href="#/tiles">Tiles</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Tiles powered by Flexbox</Title>
          <SubTitle as="p" is="4">
            A single tile element to build 2-dimensional Metro-like,
            Pinterest-like, or whatever-you-like grids
          </SubTitle>
        </HeroBody>
      </Hero>
      <LayoutTabs />
      <Columns>
        <Column isFull>
          To build intricate 2-dimensional layouts, you only need a{' '}
          <strong>single element</strong>: the <code>tile</code>:
        </Column>
      </Columns>
      <Columns>
        <Column isFull>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Tile } from '@brightleaf/elements'
export default () => {
  return (
    <Tile>
       {/* The magical tile element! */}
    </Tile>
  )
}
          `}</Highlight>
        </Column>
      </Columns>
      <Content>
        <Tile isAncestor>
          <Tile isVertical size="8">
            <Tile>
              <Tile isParent isVertical>
                <Tile isChild isNotification isPrimary>
                  <Title as="p">Vertical...</Title>
                  <SubTitle as="p">Top tile</SubTitle>
                </Tile>
                <Tile isChild isNotification isWarning>
                  <p className="title">...tiles</p>
                  <p className="subtitle">Bottom tile</p>
                </Tile>
              </Tile>
              <Tile isParent>
                <Tile isChild isNotification isInfo>
                  <p className="title">Middle tile</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                  </figure>
                </Tile>
              </Tile>
            </Tile>
            <Tile isParent>
              <Tile isChild isNotification isDanger>
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <Content>???</Content>
              </Tile>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isNotification isSuccess>
              <Content>
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <Content>???</Content>
              </Content>
            </Tile>
          </Tile>
        </Tile>
      </Content>
      <Columns>
        <Column isFull>
          <CodeCollapse>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Content, Tile, Title, SubTitle } from '@brightleaf/elements'
export default () => {
  return (
    <Tile isAncestor>
      <Tile isVertical size="8">
        <Tile>
          <Tile isParent isVertical>
            <Tile isChild isNotification isPrimary>
              <Title as="p">Vertical...</Title>
              <SubTitle as="p">Top tile</SubTitle>
            </Tile>
            <Tile isChild isNotification isWarning>
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isNotification isInfo>
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </Tile>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isNotification isDanger>
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <Content>???</Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile isParent>
        <Tile isChild isNotification isSuccess>
          <Content>
            <p className="title">Tall tile</p>
            <p className="subtitle">With even more content</p>
            <Content>???</Content>
          </Content>
        </Tile>
      </Tile>
    </Tile>
  )
}
          `}</Highlight>
          </CodeCollapse>
        </Column>
      </Columns>
      <hr />
      <Content>
        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild isBox>
              <p className="title">One</p>
              <p className="subtitle">Subtitle</p>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isBox>
              <p className="title">Two</p>
              <p className="subtitle">Subtitle</p>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isBox>
              <p className="title">Three</p>
              <p className="subtitle">Subtitle</p>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isBox>
              <p className="title">Four</p>
              <p className="subtitle">Subtitle</p>
            </Tile>
          </Tile>
        </Tile>

        <Tile isAncestor>
          <Tile isVertical size="9">
            <Tile>
              <Tile isParent>
                <Tile isChild isBox>
                  <Tile as="p">Five</Tile>
                  <p className="subtitle">Subtitle</p>
                  <Content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam semper diam at erat pulvinar, at pulvinar felis
                      blandit. Vestibulum volutpat tellus diam, consequat
                      gravida libero rhoncus ut. Morbi maximus, leo sit amet
                      vehicula eleifend, nunc dui porta orci, quis semper odio
                      felis ut quam.
                    </p>
                  </Content>
                </Tile>
              </Tile>
              <Tile isVertical size="8">
                <Tile>
                  <Tile isParent>
                    <Tile isBox isChild>
                      <p className="title">Six</p>
                      <p className="subtitle">Subtitle</p>
                    </Tile>
                  </Tile>
                  <Tile isParent>
                    <Tile isBox isChild>
                      <p className="title">Seven</p>
                      <p className="subtitle">Subtitle</p>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile isParent>
                  <Tile isBox isChild>
                    <p className="title">Eight</p>
                    <p className="subtitle">Subtitle</p>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
            <Tile>
              <Tile isVertical size="8">
                <Tile isChild isBox>
                  <Title as="p">Nine</Title>
                  <SubTitle as="p">Subtitle</SubTitle>
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
              <Tile isParent>
                <Tile isChild isBox>
                  <Title as="p">Ten</Title>
                  <SubTitle as="p">Subtitle</SubTitle>
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
          </Tile>
          <Tile isParent>
            <Tile isChild isBox>
              <Content>
                <Title as="p">Eleven</Title>
                <SubTitle as="p">Subtitle</SubTitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis
                    blandit. Vestibulum volutpat tellus diam, consequat gravida
                    libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    eleifend, nunc dui porta orci, quis semper odio felis ut
                    quam.
                  </p>
                  <p>
                    Integer sollicitudin, tortor a mattis commodo, velit urna
                    rhoncus erat, vitae congue lectus dolor consequat libero.
                    Donec leo ligula, maximus et pellentesque sed, gravida a
                    metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                    lacus, quis faucibus libero. Quisque non semper leo.
                  </p>
                </Content>
              </Content>
            </Tile>
          </Tile>
        </Tile>

        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild isBox>
              <Title as="p">Twelve</Title>
              <SubTitle as="p">Subtitle</SubTitle>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                </p>
              </Content>
            </Tile>
          </Tile>
          <Tile isParent size="6">
            <Tile isChild isBox>
              <Title as="p">Thirteen</Title>
              <SubTitle as="p">Subtitle</SubTitle>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </Content>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild isBox>
              <Title as="p">Fourteen</Title>
              <SubTitle as="p">Subtitle</SubTitle>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                </p>
              </Content>
            </Tile>
          </Tile>
        </Tile>
      </Content>
      <Columns>
        <Column isFull>
          <CodeCollapse>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Content, Tile, Title, SubTitle } from '@brightleaf/elements'
export default () => {
  return (
    <Content>
      <Tile isAncestor>
        <Tile isParent>
          <Tile isChild isBox>
            <p className="title">One</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <p className="title">Two</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <p className="title">Three</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <p className="title">Four</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
      </Tile>

      <Tile isAncestor>
        <Tile isVertical size="9">
          <Tile>
            <Tile isParent>
              <Tile isChild isBox>
                <Tile as="p">Five</Tile>
                <p className="subtitle">Subtitle</p>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis
                    blandit. Vestibulum volutpat tellus diam, consequat
                    gravida libero rhoncus ut. Morbi maximus, leo sit amet
                    vehicula eleifend, nunc dui porta orci, quis semper odio
                    felis ut quam.
                  </p>
                </Content>
              </Tile>
            </Tile>
            <Tile isVertical size="8">
              <Tile>
                <Tile isParent>
                  <Tile isBox isChild>
                    <p className="title">Six</p>
                    <p className="subtitle">Subtitle</p>
                  </Tile>
                </Tile>
                <Tile isParent>
                  <Tile isBox isChild>
                    <p className="title">Seven</p>
                    <p className="subtitle">Subtitle</p>
                  </Tile>
                </Tile>
              </Tile>
              <Tile isParent>
                <Tile isBox isChild>
                  <p className="title">Eight</p>
                  <p className="subtitle">Subtitle</p>
                </Tile>
              </Tile>
            </Tile>
          </Tile>
          <Tile>
            <Tile isVertical size="8">
              <Tile isChild isBox>
                <Title as="p">Nine</Title>
                <SubTitle as="p">Subtitle</SubTitle>
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
            <Tile isParent>
              <Tile isChild isBox>
                <Title as="p">Ten</Title>
                <SubTitle as="p">Subtitle</SubTitle>
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
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <Content>
              <Title as="p">Eleven</Title>
              <SubTitle as="p">Subtitle</SubTitle>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam semper diam at erat pulvinar, at pulvinar felis
                  blandit. Vestibulum volutpat tellus diam, consequat gravida
                  libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                  eleifend, nunc dui porta orci, quis semper odio felis ut
                  quam.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </Content>
            </Content>
          </Tile>
        </Tile>
      </Tile>

      <Tile isAncestor>
        <Tile isParent>
          <Tile isChild isBox>
            <Title as="p">Twelve</Title>
            <SubTitle as="p">Subtitle</SubTitle>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
              </p>
            </Content>
          </Tile>
        </Tile>
        <Tile isParent size="6">
          <Tile isChild isBox>
            <Title as="p">Thirteen</Title>
            <SubTitle as="p">Subtitle</SubTitle>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isBox>
            <Title as="p">Fourteen</Title>
            <SubTitle as="p">Subtitle</SubTitle>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
    </Content>
  )
}
          `}</Highlight>
          </CodeCollapse>
        </Column>
      </Columns>
    </Section>
  )
}

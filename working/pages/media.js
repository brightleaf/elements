/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Delete,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  MediaObject,
  MediaLeft,
  MediaContent,
  MediaRight,
  Content,
  Container,
  Column,
  Columns,
  Icon,
  Hero,
  HeroBody,
  Title,
  Section,
  SubTitle,
} from '../../src'
import { LayoutTabs } from '../components/tabs'
import { Snippet } from '../components/snippet'
import { CodeCollapse } from '../components/collapse'
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
            <a href="#/layouts">Layout</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/hero">Media Object</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Media Object</Title>
          <SubTitle as="p" is="4">
            The famous media object prevalent in social media interfaces, but
            useful in any context
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <LayoutTabs />
      </div>

      <Container>
        <Snippet>
          <Columns>
            <Column isHalf>
              <MediaObject>
                <MediaLeft title="Component" hasIcon>
                  <Image
                    is64
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </MediaLeft>
                <MediaContent>
                  <Content className="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                      <small>31m</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </Content>
                  <Level isMobile>
                    <LevelLeft>
                      <LevelItem>
                        <a>
                          <Icon isSmall fas icon="reply" />
                        </a>
                      </LevelItem>
                      <LevelItem>
                        <a>
                          <Icon isSmall fas icon="retweet" />
                        </a>
                      </LevelItem>
                      <LevelItem>
                        <a>
                          <Icon isSmall fas icon="heart" />
                        </a>
                      </LevelItem>
                    </LevelLeft>
                  </Level>
                </MediaContent>
                <MediaRight>
                  <Delete></Delete>
                </MediaRight>
              </MediaObject>
            </Column>
            <Column isHalf>
              <CodeCollapse>
                <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import {
  MediaObject, MediaLeft, Content
} from '@brightleaf/elements'

export default () => {
  return (
    <MediaObject>
      <MediaLeft title="Component" hasIcon>
        <Image
          is64
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </MediaLeft>
      <MediaContent>
        <Content className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>{' '}
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ornare magna eros, eu pellentesque tortor vestibulum
            ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </Content>
        <Level isMobile>
          <LevelLeft>
            <LevelItem>
              <a>
                <Icon isSmall fas icon="reply" />
              </a>
            </LevelItem>
            <LevelItem>
              <a>
                <Icon isSmall fas icon="retweet" />
              </a>
            </LevelItem>
            <LevelItem>
              <a>
                <Icon isSmall fas icon="heart" />
              </a>
            </LevelItem>
          </LevelLeft>
        </Level>
      </MediaContent>
      <MediaRight>
        <Delete></Delete>
      </MediaRight>
    </MediaObject>
  )
}
              `}</Highlight>
              </CodeCollapse>
            </Column>
          </Columns>
        </Snippet>
        <br />
        <hr />
        <br />
        <Snippet>
          <Columns>
            <Column isHalf>
              <MediaObject>
                <MediaLeft>
                  <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </MediaLeft>
                <MediaContent>
                  <Content>
                    <p>
                      <strong>Barbara Middleton</strong>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis porta eros lacus, nec ultricies elit blandit non.
                      Suspendisse pellentesque mauris sit amet dolor blandit
                      rutrum. Nunc in tempus turpis.
                      <br />
                      <small>
                        <a>Like</a> · <a>Reply</a> · 3 hrs
                      </small>
                    </p>
                  </Content>

                  <MediaObject>
                    <MediaLeft>
                      <Image
                        is48
                        rsc="https://bulma.io/images/placeholders/96x96.png"
                      />
                    </MediaLeft>
                    <MediaContent>
                      <Content>
                        <p>
                          <strong>Sean Brown</strong>
                          <br />
                          Donec sollicitudin urna eget eros malesuada sagittis.
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Aliquam
                          blandit nisl a nulla sagittis, a lobortis leo feugiat.
                          <br />
                          <small>
                            <a>Like</a> · <a>Reply</a> · 2 hrs
                          </small>
                        </p>
                      </Content>

                      <MediaObject>
                        Vivamus quis semper metus, non tincidunt dolor. Vivamus
                        in mi eu lorem cursus ullamcorper sit amet nec massa.
                      </MediaObject>

                      <MediaObject>
                        Morbi vitae diam et purus tincidunt porttitor vel vitae
                        augue. Praesent malesuada metus sed pharetra euismod.
                        Cras tellus odio, tincidunt iaculis diam non, porta
                        aliquet tortor.
                      </MediaObject>
                    </MediaContent>
                  </MediaObject>

                  <MediaObject>
                    <MediaLeft>
                      <Image
                        is48
                        src="https://bulma.io/images/placeholders/96x96.png"
                      />
                    </MediaLeft>
                    <MediaContent>
                      <Content>
                        <p>
                          <strong>Kayli Eunice </strong>
                          <br />
                          Sed convallis scelerisque mauris, non pulvinar nunc
                          mattis vel. Maecenas varius felis sit amet magna
                          vestibulum euismod malesuada cursus libero. Vestibulum
                          ante ipsum primis in faucibus orci luctus et ultrices
                          posuere cubilia Curae; Phasellus lacinia non nisl id
                          feugiat.
                          <br />
                          <small>
                            <a>Like</a> · <a>Reply</a> · 2 hrs
                          </small>
                        </p>
                      </Content>
                    </MediaContent>
                  </MediaObject>
                </MediaContent>
              </MediaObject>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is64
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </MediaLeft>
                <MediaContent>
                  <div className="field">
                    <p className="control">
                      <textarea
                        className="textarea"
                        placeholder="Add a comment..."
                      ></textarea>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button">Post comment</button>
                    </p>
                  </div>
                </MediaContent>
              </MediaObject>
            </Column>
            <Column isHalf>
              <CodeCollapse>
                <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import {
  MediaObject, MediaLeft, Content
} from '@brightleaf/elements'

export default () => {
  return (
    <MediaObject>
      <MediaLeft>
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>Barbara Middleton</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis porta eros lacus, nec ultricies elit blandit non.
            Suspendisse pellentesque mauris sit amet dolor blandit
            rutrum. Nunc in tempus turpis.
            <br />
            <small>
              <a>Like</a> · <a>Reply</a> · 3 hrs
            </small>
          </p>
        </Content>

        <MediaObject>
          <MediaLeft>
            <Image
              is48
              rsc="https://bulma.io/images/placeholders/96x96.png"
            />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>Sean Brown</strong>
                <br />
                Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Aliquam
                blandit nisl a nulla sagittis, a lobortis leo feugiat.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
              </p>
            </Content>

            <MediaObject>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus
              in mi eu lorem cursus ullamcorper sit amet nec massa.
            </MediaObject>

            <MediaObject>
              Morbi vitae diam et purus tincidunt porttitor vel vitae
              augue. Praesent malesuada metus sed pharetra euismod.
              Cras tellus odio, tincidunt iaculis diam non, porta
              aliquet tortor.
            </MediaObject>
          </MediaContent>
        </MediaObject>

        <MediaObject>
          <MediaLeft>
            <Image
              is48
              src="https://bulma.io/images/placeholders/96x96.png"
            />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>Kayli Eunice </strong>
                <br />
                Sed convallis scelerisque mauris, non pulvinar nunc
                mattis vel. Maecenas varius felis sit amet magna
                vestibulum euismod malesuada cursus libero. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Phasellus lacinia non nisl id
                feugiat.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
              </p>
            </Content>
          </MediaContent>
        </MediaObject>
      </MediaContent>
    </MediaObject>
    <MediaObject>
      <MediaLeft>
        <Image
          is64
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </MediaLeft>
      <MediaContent>
        <div className="field">
          <p className="control">
            <textarea
              className="textarea"
              placeholder="Add a comment..."
            ></textarea>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button">Post comment</button>
          </p>
        </div>
      </MediaContent>
    </MediaObject>
  )
}
            `}</Highlight>
              </CodeCollapse>
            </Column>
          </Columns>
        </Snippet>
      </Container>
    </Section>
  )
}

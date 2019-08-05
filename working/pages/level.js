/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Box,
  Button,
  Column,
  Columns,
  Content,
  Control,
  Delete,
  Field,
  Heading,
  Hero,
  HeroBody,
  Icon,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  MediaContent,
  MediaLeft,
  MediaObject,
  MediaRight,
  SubTitle,
  Title,
  Section,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { LayoutTabs } from '../components/tabs'
export default () => {
  useTitle('Level Component')
  useStyleSheet('code.css')
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Level</Title>
          <SubTitle as="p" is="4">
            A multi-purpose <strong>horizontal level</strong>, which can contain
            almost any other element
          </SubTitle>
        </HeroBody>
      </Hero>
      <LayoutTabs />
      <Snippet>
        <Columns>
          <Column isHalf>
            <Box>
              <MediaObject>
                <MediaLeft>
                  <Image
                    is="64"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </MediaLeft>
                <MediaContent>
                  <Content>
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
            </Box>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Box, Content, Icon, Image, Title,
  Level, LevelItem, LevelLeft, LevelRight,
  MediaContent, MediaLeft, MediaObject, MediaRight } from '@brightleaf/elements'


export default () => {

  return (
    <Box>
      <Level>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <p className="heading">Tweets</p>
              <Title as="p">3,456</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <p className="heading">Following</p>
              <Title as="p">123</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <p className="heading">Followers</p>
              <Title as="p">456K</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <p className="heading">Likes</p>
              <Title as="p">789</Title>
            </div>
          </div>
        </LevelItem>
      </Level>
    </Box>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Box>
              <Level>
                <LevelItem hasTextCentered>
                  <div>
                    <div>
                      <Heading>Tweets</Heading>
                      <Title as="p">3,456</Title>
                    </div>
                  </div>
                </LevelItem>
                <LevelItem hasTextCentered>
                  <div>
                    <div>
                      <Heading>Following</Heading>
                      <Title as="p">123</Title>
                    </div>
                  </div>
                </LevelItem>
                <LevelItem hasTextCentered>
                  <div>
                    <div>
                      <Heading>Followers</Heading>
                      <Title as="p">456K</Title>
                    </div>
                  </div>
                </LevelItem>
                <LevelItem hasTextCentered>
                  <div>
                    <div>
                      <Heading>Likes</Heading>
                      <Title as="p">789</Title>
                    </div>
                  </div>
                </LevelItem>
              </Level>
            </Box>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Box, Title, Level, LevelItem } from '@brightleaf/elements'

export default () => {
  return (
    <Box>
      <Level>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <Heading>Tweets</Heading>
              <Title as="p">3,456</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <Heading>Following</Heading>
              <Title as="p">123</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <Heading>Followers</Heading>
              <Title as="p">456K</Title>
            </div>
          </div>
        </LevelItem>
        <LevelItem hasTextCentered>
          <div>
            <div>
              <Heading>Likes</Heading>
              <Title as="p">789</Title>
            </div>
          </div>
        </LevelItem>
      </Level>
    </Box>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Box>
              <Level>
                <LevelLeft>
                  <LevelItem>
                    <div>
                      <SubTitle as="p" is="5">
                        <strong>123</strong> posts
                      </SubTitle>
                    </div>
                  </LevelItem>
                  <LevelItem>
                    <div>
                      <Field hasAddons>
                        <Control>
                          <input
                            className="input"
                            type="text"
                            placeholder="Find a post"
                          />
                        </Control>
                        <Control>
                          <Button>Search</Button>
                        </Control>
                      </Field>
                    </div>
                  </LevelItem>
                </LevelLeft>

                <LevelRight>
                  <LevelItem>
                    <p>
                      <strong>All</strong>
                    </p>
                  </LevelItem>
                  <LevelItem>
                    <p>
                      <a>Published</a>
                    </p>
                  </LevelItem>
                  <LevelItem>
                    <p>
                      <a>Drafts</a>
                    </p>
                  </LevelItem>
                  <LevelItem>
                    <p>
                      <a>Deleted</a>
                    </p>
                  </LevelItem>
                  <LevelItem>
                    <p>
                      <Button isSuccess>New</Button>
                    </p>
                  </LevelItem>
                </LevelRight>
              </Level>
            </Box>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Box, Control, Field, Title, SubTitle,
  Level, LevelItem, LevelLeft LevelRight } from '@brightleaf/elements'

export default () => {
  return (
    <Box>
      <Level>
        <LevelLeft>
          <LevelItem>
            <div>
              <SubTitle as="p" is="5">
                <strong>123</strong> posts
              </SubTitle>
            </div>
          </LevelItem>
          <LevelItem>
            <div>
              <Field hasAddons>
                <Control>
                  <input
                    className="input"
                    type="text"
                    placeholder="Find a post"
                  />
                </Control>
                <Control>
                  <Button>Search</Button>
                </Control>
              </Field>
            </div>
          </LevelItem>
        </LevelLeft>

        <LevelRight>
          <LevelItem>
            <p>
              <strong>All</strong>
            </p>
          </LevelItem>
          <LevelItem>
            <p>
              <a>Published</a>
            </p>
          </LevelItem>
          <LevelItem>
            <p>
              <a>Drafts</a>
            </p>
          </LevelItem>
          <LevelItem>
            <p>
              <a>Deleted</a>
            </p>
          </LevelItem>
          <LevelItem>
            <p>
              <Button isSuccess>New</Button>
            </p>
          </LevelItem>
        </LevelRight>
      </Level>
    </Box>
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

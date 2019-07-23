/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  Box,
  Content,
  Columns,
  Column,
  Delete,
  Hero,
  HeroBody,
  Icon,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  MediaContent,
  MediaLeft,
  MediaObject,
  MediaRight,
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
      <Hero isLight isBold>
        <HeroBody>
          <Title>Box</Title>
          <SubTitle as="p" is="4">
            A white <strong>box</strong> to contain other elements
          </SubTitle>
        </HeroBody>
      </Hero>

      <ElementsTabs />
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
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
                          <Icon isSmall fas icon="reply"></Icon>
                        </a>
                      </LevelItem>
                      <LevelItem>
                        <a>
                          <Icon isSmall fas icon="retweet"></Icon>
                        </a>
                      </LevelItem>
                      <LevelItem>
                        <a>
                          <Icon isSmall fas icon="heart"></Icon>
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
import {
  Box, Content, Columns, Column, Delete, Icon, Image, Level, LevelItem,
  LevelLeft, MediaContent, MediaLeft, MediaObject, MediaRight
} from '@brightleaf/elements'


export default () => {

  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut.
              Maecenas non massa sem. Etiam finibus odio quis feugiat
              facilisis.
            </p>
          </Content>
          <Level isMobile>
            <LevelLeft>
              <LevelItem>
                <a>
                  <Icon isSmall fas icon="reply"></Icon>
                </a>
              </LevelItem>
              <LevelItem>
                <a>
                  <Icon isSmall fas icon="retweet"></Icon>
                </a>
              </LevelItem>
              <LevelItem>
                <a>
                  <Icon isSmall fas icon="heart"></Icon>
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

/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useTitle } from '@brightleaf/react-hooks'
import {
  Box,
  Content,
  Delete,
  Icon,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  MediaContent,
  MediaLeft,
  MediaObject,
  MediaRight,
} from '../../src'

export default () => {
  useTitle('Level Component')
  return (
    <>
      <Box>
        <MediaObject>
          <MediaLeft>
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
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
      <Box>
        <Level>
          <LevelItem hasTextCentered>
            <div>
              <div>
                <p className="heading">Tweets</p>
                <p className="title">3,456</p>
              </div>
            </div>
          </LevelItem>
          <LevelItem hasTextCentered>
            <div>
              <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
              </div>
            </div>
          </LevelItem>
          <LevelItem hasTextCentered>
            <div>
              <div>
                <p className="heading">Followers</p>
                <p className="title">456K</p>
              </div>
            </div>
          </LevelItem>
          <LevelItem hasTextCentered>
            <div>
              <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </div>
          </LevelItem>
        </Level>
      </Box>
      <Box>
        <Level>
          <LevelLeft>
            <LevelItem>
              <div>
                <p className="subtitle is-5">
                  <strong>123</strong> posts
                </p>
              </div>
            </LevelItem>
            <LevelItem>
              <div>
                <div className="field has-addons">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Find a post"
                    />
                  </p>
                  <p className="control">
                    <button className="button">Search</button>
                  </p>
                </div>
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
                <a className="button is-success">New</a>
              </p>
            </LevelItem>
          </LevelRight>
        </Level>
      </Box>
    </>
  )
}

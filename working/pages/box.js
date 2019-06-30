/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Box,
  MediaContent,
  MediaLeft,
  MediaObject,
  MediaRight,
} from '../../src'

export default () => {
  return (
    <>
      <Box>
        <MediaObject>
          <MediaLeft title="Component" hasIcon></MediaLeft>
          <MediaContent>
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-reply"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-retweet"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-heart"></i>
                  </span>
                </a>
              </div>
            </nav>
          </MediaContent>
          <MediaRight>
            <button className="delete"></button>
          </MediaRight>
        </MediaObject>
      </Box>
    </>
  )
}

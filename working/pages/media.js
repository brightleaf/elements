/* eslint-disable spellcheck/spell-checker */
import React from 'react'
import {
  Delete,
  MediaObject,
  MediaLeft,
  MediaContent,
  MediaRight,
  Container,
  Column,
  Columns,
  FullColumn,
  Icon,
  Hero,
  HeroBody,
  Title,
  Section,
  SubTitle,
} from '../../src'
import { LayoutTabs } from '../components/tabs'

export default () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Media Object</Title>
          <SubTitle as="p" is="4">
            The famous media object prevalent in social media interfaces, but
            useful in any context
          </SubTitle>
        </HeroBody>
      </Hero>
      <LayoutTabs />
      <Container>
        <Columns>
          <Column isFourFifths>
            <MediaObject>
              <MediaLeft title="Component" hasIcon>
                {' '}
                <p className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </MediaLeft>
              <MediaContent>
                <div className="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item">
                      <Icon isSmall fas icon="reply" />
                    </a>
                    <a className="level-item">
                      <Icon isSmall fas icon="retweet" />
                    </a>
                    <a className="level-item">
                      <Icon isSmall fas icon="heart" />
                    </a>
                  </div>
                </nav>
              </MediaContent>
              <MediaRight>
                <Delete></Delete>
              </MediaRight>
            </MediaObject>
          </Column>
        </Columns>
        <br />
        <hr />
        <br />
        <FullColumn>
          <MediaObject>
            <MediaLeft>
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </MediaLeft>
            <MediaContent>
              <div className="content">
                <p>
                  <strong>Barbara Middleton</strong>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  porta eros lacus, nec ultricies elit blandit non. Suspendisse
                  pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                  tempus turpis.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 3 hrs
                  </small>
                </p>
              </div>

              <MediaObject>
                <MediaLeft>
                  <p className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" />
                  </p>
                </MediaLeft>
                <MediaContent>
                  <div className="content">
                    <p>
                      <strong>Sean Brown</strong>
                      <br />
                      Donec sollicitudin urna eget eros malesuada sagittis.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Aliquam blandit nisl a
                      nulla sagittis, a lobortis leo feugiat.
                      <br />
                      <small>
                        <a>Like</a> · <a>Reply</a> · 2 hrs
                      </small>
                    </p>
                  </div>

                  <MediaObject>
                    Vivamus quis semper metus, non tincidunt dolor. Vivamus in
                    mi eu lorem cursus ullamcorper sit amet nec massa.
                  </MediaObject>

                  <MediaObject>
                    Morbi vitae diam et purus tincidunt porttitor vel vitae
                    augue. Praesent malesuada metus sed pharetra euismod. Cras
                    tellus odio, tincidunt iaculis diam non, porta aliquet
                    tortor.
                  </MediaObject>
                </MediaContent>
              </MediaObject>

              <MediaObject>
                <MediaLeft>
                  <p className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" />
                  </p>
                </MediaLeft>
                <MediaContent>
                  <div className="content">
                    <p>
                      <strong>Kayli Eunice </strong>
                      <br />
                      Sed convallis scelerisque mauris, non pulvinar nunc mattis
                      vel. Maecenas varius felis sit amet magna vestibulum
                      euismod malesuada cursus libero. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere cubilia
                      Curae; Phasellus lacinia non nisl id feugiat.
                      <br />
                      <small>
                        <a>Like</a> · <a>Reply</a> · 2 hrs
                      </small>
                    </p>
                  </div>
                </MediaContent>
              </MediaObject>
            </MediaContent>
          </MediaObject>
          <MediaObject>
            <MediaLeft>
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
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
        </FullColumn>
      </Container>
    </Section>
  )
}

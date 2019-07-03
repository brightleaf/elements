/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Box,
  Content,
  Column,
  Columns,
  Container,
  Field,
  Tag,
  Tags,
  Control,
} from '../../src'
const Example = ({ children, isPrimary }) => {
  return <div className="bd-example">{children}</div>
}
export default () => {
  return (
    <Content>
      <Columns>
        <Column isHalf>
          <Example>
            <Tag>Tag</Tag>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tag isBlack>Black</Tag>
            <br />
            <Tag isDark>Dark</Tag>
            <br />
            <Tag isLight>Light</Tag>
            <br />
            <Tag isWhite>White</Tag>
            <br />
            <Tag isPrimary>Primary</Tag>
            <br />
            <Tag isLink>Link</Tag>
            <br />
            <Tag isInfo>Info</Tag>
            <br />
            <Tag isSuccess>Success</Tag>
            <br />
            <Tag isWarning>Warning</Tag>
            <br />
            <Tag isDanger>Danger</Tag>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tag isLink isNormal>
              Normal
            </Tag>
            <br />
            <br />
            <Tag isPrimary isMedium>
              Medium
            </Tag>
            <br />
            <br />
            <Tag isInfo isLarge>
              Large
            </Tag>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tags areMedium>
              <Tag>All</Tag>
              <Tag>Medium</Tag>
              <Tag>Size</Tag>
            </Tags>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tags areLarge>
              <Tag>All</Tag>
              <Tag>Medium</Tag>
              <Tag>Size</Tag>
            </Tags>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tags areMedium>
              <Tag>All</Tag>
              <Tag>Medium</Tag>
              <Tag>Size</Tag>
            </Tags>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tags areLarge>
              <Tag>Default (Large)</Tag>
              <Tag isMedium>Medium</Tag>
              <Tag>Default (Large)</Tag>
              <Tag isNormal>Normal</Tag>
            </Tags>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Tags hasAddons>
              <Tag>Package</Tag>
              <Tag isPrimary>Bulma</Tag>
            </Tags>
            <Tags hasAddons>
              <Tag isDanger>Alex Smith</Tag>
              <Tag isDelete></Tag>
            </Tags>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Field isGrouped isGroupedMultiline>
              <Control>
                <Tags hasAddons>
                  <Tag isDark>npm</Tag>
                  <Tag isInfo>0.5.0</Tag>
                </Tags>
              </Control>

              <Control>
                <Tags hasAddons>
                  <Tag isDark>build</Tag>
                  <Tag isSuccess>passing</Tag>
                </Tags>
              </Control>

              <Control>
                <Tags hasAddons>
                  <Tag isDark>chat</Tag>
                  <Tag isPrimary>on gitter</Tag>
                </Tags>
              </Control>
            </Field>
          </Example>
        </Column>
      </Columns>
      <Columns>
        <Column isHalf>
          <Example>
            <Field isGrouped isGroupedMultiline>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Technology</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>

              <Control>
                <Tags hasAddons>
                  <Tag isLink>CSS</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Flexbox</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Web Design</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Open Source</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Community</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
              <Control>
                <Tags hasAddons>
                  <Tag isLink>Documentation</Tag>
                  <Tag isDelete></Tag>
                </Tags>
              </Control>
            </Field>
          </Example>
        </Column>
      </Columns>
    </Content>
  )
}

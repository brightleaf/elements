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
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'
import Highlight from '../components/highlighter'

const Example = ({ children, isPrimary }) => {
  return <div className="example">{children}</div>
}
export default () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Image</Title>
          <SubTitle as="p" is="4">
            Images
          </SubTitle>
        </HeroBody>
      </Hero>

      <ElementsTabs />
      <Content>
        <Example>
          <Columns>
            <Column isHalf>
              <Tag>Tag</Tag>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag } from '@brightleaf/elements'

export default () => {
  return <Tag>Tag</Tag>
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
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
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Tag isBlack>Black</Tag>
      <Tag isDark>Dark</Tag>
      <Tag isLight>Light</Tag>
      <Tag isWhite>White</Tag>
      <Tag isPrimary>Primary</Tag>
      <Tag isLink>Link</Tag>
      <Tag isInfo>Info</Tag>
      <Tag isSuccess>Success</Tag>
      <Tag isWarning>Warning</Tag>
      <Tag isDanger>Danger</Tag>
    </>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
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
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Tag isLink isNormal>Normal</Tag>
      <Tag isPrimary isMedium>Medium</Tag>
      <Tag isInfo isLarge>Large</Tag>
    </>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              <Tags areMedium>
                <Tag>All</Tag>
                <Tag>Medium</Tag>
                <Tag>Size</Tag>
              </Tags>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (
    <Tags areMedium>
      <Tag>All</Tag>
      <Tag>Medium</Tag>
      <Tag>Size</Tag>
    </Tags>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              <Tags areLarge>
                <Tag>All</Tag>
                <Tag>Large</Tag>
                <Tag>Size</Tag>
              </Tags>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (
    <Tags areLarge>
      <Tag>All</Tag>
      <Tag>Large</Tag>
      <Tag>Size</Tag>
    </Tags>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              <Tags areLarge>
                <Tag>Default (Large)</Tag>
                <Tag isMedium>Medium</Tag>
                <Tag>Default (Large)</Tag>
                <Tag isNormal>Normal</Tag>
              </Tags>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (
    <Tags areLarge>
    <Tag>Default (Large)</Tag>
    <Tag isMedium>Medium</Tag>
    <Tag>Default (Large)</Tag>
    <Tag isNormal>Normal</Tag>
  </Tags>
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
              <Tags hasAddons>
                <Tag>Package</Tag>
                <Tag isPrimary>Bulma</Tag>
              </Tags>
              <Tags hasAddons>
                <Tag isDanger>Alex Smith</Tag>
                <Tag isDelete></Tag>
              </Tags>
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (<>
    <Tags hasAddons>
      <Tag>Package</Tag>
      <Tag isPrimary>Bulma</Tag>
    </Tags>
    <Tags hasAddons>
      <Tag isDanger>Alex Smith</Tag>
      <Tag isDelete></Tag>
    </Tags>
  </>)
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
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
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Control, Field, Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (
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
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
        <Example>
          <Columns>
            <Column isHalf>
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
            </Column>
            <Column isHalf>
              <Highlight className="javascript" languages={['javascript']}>
                {`
import React from 'react'
import { Control, Field, Tag, Tags } from '@brightleaf/elements'

export default () => {
  return (
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
  )
}
`}
              </Highlight>
            </Column>
          </Columns>
        </Example>
      </Content>
    </Section>
  )
}

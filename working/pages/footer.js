/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  Content,
  Footer,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { LayoutTabs } from '../components/tabs'
import Highlight from '../components/highlighter'
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
            <a href="#/layouts">Layout</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/footer">Footer</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Footer</Title>
          <SubTitle as="p" is="4">
            A simple responsive <strong>footer</strong>which can include
            anything: lists, headings, columns, icons, buttons, etc.
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <LayoutTabs />
      </div>
      <Columns>
        <Column isFull>
          <Footer>
            <Content hasTextCentered>
              <p>
                <strong>Bulma</strong> by{' '}
                <a href="https://jgthms.com">Jeremy Thomas</a>. The source code
                is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                . The website content is licensed{' '}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>
                .
              </p>
              <p>
                <strong>@brightleaf/elements</strong> by{' '}
                <a href="https://brightleaf.dev">Brightleaf JS</a>. The source
                code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                . The website content is licensed{' '}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>
                .
              </p>
            </Content>
          </Footer>
        </Column>
      </Columns>
      <Columns>
        <Column isFull>
          <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Tile } from '@brightleaf/elements'
export default () => {
  return (
    <Footer>
      <Content hasTextCentered>
        <p>
          <strong>Bulma</strong> by{' '}
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code
          is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          . The website content is licensed{' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
        <p>
          <strong>@brightleaf/elements</strong> by{' '}
          <a href="https://brightleaf.dev">Brightleaf JS</a>. The source
          code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          . The website content is licensed{' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </Content>
    </Footer>
  )
}
          `}</Highlight>
        </Column>
      </Columns>
    </Section>
  )
}

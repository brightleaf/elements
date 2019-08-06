/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'

import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  Icon,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
  TabItem,
  TabList,
  Tabs,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

export default () => {
  useTitle('Tabs example from @brightleaf/elements')
  useStyleSheet('code.css')
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/tabs">Tabs</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Tabs</Title>
          <SubTitle as="p" is="4">
            Simple responsive horizontal navigation <strong>tabs</strong>, with
            different styles
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isHalf>
            <Tabs>
              <TabList>
                <TabItem isActive>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs>
      <TabList>
        <TabItem isActive>
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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
            <Tabs isCentered>
              <TabList>
                <TabItem isActive>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs isCentered>
      <TabList>
        <TabItem isActive>
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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
            <Tabs isRight>
              <TabList>
                <TabItem isActive>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs isRight>
      <TabList>
        <TabItem isActive>
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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
            <Tabs isBoxed>
              <TabList>
                <TabItem>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem isActive>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs isBoxed>
      <TabList>
        <TabItem >
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem isActive>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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
            <Tabs isToggle>
              <TabList>
                <TabItem>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem isActive>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs isBoxed>
      <TabList>
        <TabItem >
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem isActive>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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
            <Tabs isToggle isToggleRounded>
              <TabList>
                <TabItem>
                  <a href="#/tabs">Pictures</a>
                </TabItem>
                <TabItem isActive>
                  <a href="#/tabs">Music</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Videos</a>
                </TabItem>
                <TabItem>
                  <a href="#/tabs">Documents</a>
                </TabItem>
              </TabList>
            </Tabs>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Tabs, TabList, TabItem } from '@brightleaf/elements'
export default () => {
  return (
    <Tabs isBoxed>
      <TabList>
        <TabItem >
          <a href="#/tabs">Pictures</a>
        </TabItem>
        <TabItem isActive>
          <a href="#/tabs">Music</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Videos</a>
        </TabItem>
        <TabItem>
          <a href="#/tabs">Documents</a>
        </TabItem>
      </TabList>
    </Tabs>
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

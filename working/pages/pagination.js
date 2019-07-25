/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'

import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useTitle } from '@brightleaf/react-hooks/lib/use-title'
import {
  Columns,
  Column,
  Hero,
  HeroBody,
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Section,
  SubTitle,
  Title,
  Content,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'

export default () => {
  useTitle('Pagination example from @brightleaf/elements')
  useStyleSheet('code.css')
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Pagination</Title>
          <SubTitle as="p" is="4">
            A composable <strong>panel</strong>, for compact controls
          </SubTitle>
        </HeroBody>
      </Hero>

      <ComponentsTabs />
      <Content>
        <p>The Pagination component consists of several elements:</p>
        <ul>
          <li>
            <code>Pagination</code> container
          </li>
          <li>
            <code>PaginationPrevious</code> and <code>PaginationNext</code> for
            incremental navigation
          </li>
          <li>
            <code>PaginationList</code> which displays page items:
            <ul>
              <li>
                <code>PaginationLink</code> for the page numbers
              </li>
              <li>
                <code>PaginationEllipsis</code> for range separators
              </li>
            </ul>
          </li>
        </ul>
        <p>
          All elements are optional so you can compose your pagination as you
          wish.
        </p>
      </Content>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Pagination>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Content>
        <p>
          You can disable some links if they are not active, or change the
          amount of page numbers available.{' '}
        </p>
      </Content>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Pagination>
              <PaginationPrevious
                label="Previous"
                disabled
              ></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} isCurrent />
                <PaginationLink page={2} />
                <PaginationLink page={3} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination>
    <PaginationPrevious
      label="Previous"
      disabled
    ></PaginationPrevious>
    <PaginationNext label="Next page"></PaginationNext>
    <PaginationList>
      <PaginationLink page={1} isCurrent />
      <PaginationLink page={2} />
      <PaginationLink page={3} />
    </PaginationList>
  </Pagination>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Content>
        <p>
          By default on <strong>tablet</strong>, the list is located on the
          left, and the previous/next buttons on the right. But you can change
          the <strong>order</strong> of these elements by using the{' '}
          <code>isCentered</code> and <code>isRight</code> attributes.
        </p>
      </Content>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Pagination isCentered>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isCentered>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
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
            <Pagination isRight>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isRight>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Title as="h3" is="4">
        Styles
      </Title>
      <Content>
        <p>
          Add the <code>isRounded</code> attribute to have rounded pagination
          items.
        </p>
      </Content>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Pagination isRounded>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isRounded>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Title as="h3" is="4">
        Sizes
      </Title>
      <Content>
        <p>
          The pagination comes in <strong>3 additional sizes</strong>.<br />
          You only need to append the <strong>attribute</strong>{' '}
          <code>isSmall</code>, <code>isMedium</code>, or <code>isLarge</code>{' '}
          to the <code>Pagination</code> component.
        </p>
      </Content>
      <Snippet>
        <Columns>
          <Column isHalf>
            <Pagination isSmall>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isSmall>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
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
            <Pagination isMedium>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isMedium>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
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
            <Pagination isLarge>
              <PaginationPrevious label="Previous"></PaginationPrevious>
              <PaginationNext label="Next page"></PaginationNext>
              <PaginationList>
                <PaginationLink page={1} />
                <PaginationEllipsis />
                <PaginationLink page={45} />
                <PaginationLink page={46} isCurrent />
                <PaginationLink page={47} />
                <PaginationEllipsis />
                <PaginationLink page={86} />
              </PaginationList>
            </Pagination>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'
export default () => {
  return (
    <Pagination isLarge>
      <PaginationPrevious label="Previous"></PaginationPrevious>
      <PaginationNext label="Next page"></PaginationNext>
      <PaginationList>
        <PaginationLink page={1} />
        <PaginationEllipsis />
        <PaginationLink page={45} />
        <PaginationLink page={46} isCurrent />
        <PaginationLink page={47} />
        <PaginationEllipsis />
        <PaginationLink page={86} />
      </PaginationList>
    </Pagination>
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

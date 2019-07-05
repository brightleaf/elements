# @brightleaf/elements

React based UI elements using bulma css.

## Currently Implemented

* AutoComplete
* Box
* Button
* Card
* Container
* Columns
* Column
* Container
* Content
* Delete
* DropDown
* Footer
* Hero
* Icon
* Level
* MediaObject
* Notification
* Section

## Getting Started

```javascript
import React from 'react'
import { Hero, HeroBody, Title, SubTitle  } from '@brightleaf/elements'
import { useStyleSheet , useScript } from '@brightleaf/react-hooks'

export default () => {
  useStyleSheet(
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'
  )
  useScript('https://kit.fontawesome.com/your-font-awesome-kit.js')
  return (
    <Hero isWarning>
      <HeroBody>
        <Title>Brightleaf Elements</Title>
        <SubTitle as="h4">Bulma Styled React Components</SubTitle>
      </HeroBody>
    </Hero>
  )
}
```
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useTitle } from '@brightleaf/react-hooks'
import { Box, Content, Icon } from '../../src'
export default () => {
  useTitle('Icons example from @brightleaf/elements')

  return (
    <Content>
      <Box>
        <Icon hasTextLink icon="rocket" fas />
        <Icon hasTextDanger icon="rebel" fab isLarge />
      </Box>
    </Content>
  )
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from './box'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Box',
  component: Box,
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Box Text',
}

export const AsASpan = Template.bind({})
AsASpan.args = {
  children: 'Box Text',
  as: 'span',
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubTitle } from './subtitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/SubTitle',
  component: SubTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubTitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args}>Subtitle Text</SubTitle>
)

export const SubTitleExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubTitleExample.args = {}

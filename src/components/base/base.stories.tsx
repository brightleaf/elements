import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Base } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Base',
  component: Base,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Base>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Base Element Text',
}

export const AsASpan = Template.bind({})
AsASpan.args = {
  children: 'BaseElement Text',
  as: 'span',
}

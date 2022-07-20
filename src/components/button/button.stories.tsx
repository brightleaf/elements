import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const Simple = Template.bind({})

Simple.args = {
  children: 'Simple Button',
}

export const Primary = Template.bind({})

Primary.args = {
  isPrimary: true,
  children: 'Primary Button',
}

export const Info = Template.bind({})
Info.args = {
  children: 'Info Button',
  isInfo: true,
}
export const Success = Template.bind({})
Success.args = {
  children: 'Success Button',
  isSuccess: true,
}
export const Inactive = Template.bind({})
Inactive.args = {
  children: 'Inactive Button',
  isStatic: true,
}

export const Large = Template.bind({})
Large.args = {
  isLarge: true,
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  isSmall: true,
  children: 'Button',
}

export const Link = Template.bind({})
Link.args = {
  isAnchor: true,
  children: 'Button',
}
export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  children: 'Button',
}
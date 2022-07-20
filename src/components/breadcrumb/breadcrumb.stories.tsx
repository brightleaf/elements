import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumb, BreadcrumbItem } from './breadcrumb'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb
    hasArrowSeparator={args.hasArrowSeparator}
    hasBulletSeparator={args.hasBulletSeparator}
    hasDotSeparator={args.hasDotSeparator}
    hasSucceedsSeparator={args.hasSucceedsSeparator}
  >
    <BreadcrumbItem>
      <a>Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem isActive>
      <a>Components</a>
    </BreadcrumbItem>
    <BreadcrumbItem isActive>
      <a>Hero</a>
    </BreadcrumbItem>
  </Breadcrumb>
)

export const SeperatorOptions = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SeperatorOptions.args = {
    hasArrowSeparator: false,
    hasBulletSeparator: false,
    hasDotSeparator: false,
    hasSucceedsSeparator: false,
}

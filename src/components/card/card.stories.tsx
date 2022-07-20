import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card, CardBody, CardHeader, CardHeaderIcon, CardFooter, CardFooterItem } from './card'
// import { Content } from '../content'


export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card>
    <CardHeader title="Component" hasIcon></CardHeader>
    <CardBody>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </CardBody>
    <CardFooter>
      <CardFooterItem>
        <a
          href="#"
          onClick={(e) => {
            console.info('clicked')
            e.preventDefault()
          }}
        >
          Save
        </a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">Edit</a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">Delete</a>
      </CardFooterItem>
    </CardFooter>
  </Card>
)

export const FullCardExample = Template.bind({})

FullCardExample.args = {

}

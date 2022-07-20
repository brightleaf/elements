import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutoComplete } from "./";

export default {
  title: "Components/AutoComplete",
  component: AutoComplete,
  argTypes: {},
} as ComponentMeta<typeof AutoComplete>;

const items = [
  { name: "First", id: 1 },
  { name: "Second", id: 2 },
  { name: "Third", id: 3 },
];

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete
    htmlId="TheAUtoId"
    list={items}
    onSelect={(item) => {
      console.info("Selected Item", item);
    }}
  />
);

export const BasicExample = Template.bind({});
BasicExample.args = {};

import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    variant: {
      options: ["outline", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "primary", "secondary", "danger"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  ...Default.args,
  variant: "outline",
};

export const VariantText = Template.bind({});
VariantText.args = {
  ...Default.args,
  variant: "text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  ...Default.args,
  variant: "text",
  disabled: true,
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  ...Default.args,
  disableShadow: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...Default.args,
  startIcon: "local_grocery_store",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  ...Default.args,
  endIcon: "local_grocery_store",
};

export const SizeSM = Template.bind({});
SizeSM.args = {
  ...Default.args,
  size: "sm",
};
export const SizeMD = Template.bind({});
SizeMD.args = {
  ...Default.args,
  size: "md",
};
export const SizeLG = Template.bind({});
SizeLG.args = {
  ...Default.args,
  size: "lg",
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  ...Default.args,
  color: "default",
};
export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  ...Default.args,
  color: "primary",
};
export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  ...Default.args,
  color: "secondary",
};
export const ColorDanger = Template.bind({});
ColorDanger.args = {
  ...Default.args,
  color: "danger",
};

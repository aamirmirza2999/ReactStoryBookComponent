import React from 'react';
import SABTextField from './SABTextField';
import DumyComponent from '../DumyComponent';

export default {
  title: 'Components/SABTextField',
  component: DumyComponent,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText:{ control: 'boolean' },
    isArabic: { control: 'boolean' }, // Add new prop for Arabic support
    theme: { control: { type: 'select', options: ['light', 'dark'] } },
    hideLinkButton: {control : 'boolean'},
    link: { control: 'object' },
  },
};

const Template = (args) => <DumyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '', // Empty value for red border in the default state
  error: false,
  disabled: false,
  isArabic: false, // Default is not Arabic
  theme: 'light',
  helperText: true,
  hideLinkButton: false,
  onChange: (text) => { console.log("Input changed:", text); },
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  value: ' ',
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Fetched = Template.bind({});
Fetched.args = {
  ...Default.args,
  disabled: true,
  hideLinkButton: true,
  link: {
    text: 'Link Here',
    iconRight: true,
    iconLeft: false,
    type: 'default',
    size: 'medium',
},
};

export const FetchedLinkInActive = Template.bind({});
FetchedLinkInActive.args = {
  ...Default.args,
  disabled: true,
  hideLinkButton: true,
  link: {
    text: 'Link Here',
    iconRight: true,
    iconLeft: false,
    type: 'active',
    size: 'large',
},
};
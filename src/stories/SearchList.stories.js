import React from 'react';
import SearchList from './SearchList';

// Default export to configure the story
export default {
  title: 'Components/SearchList',
  component: SearchList,
};

// Template for rendering the SearchList component
const Template = (args) => <SearchList {...args} />;

// Default story with a list of items
export const Default = Template.bind({});
Default.args = {
  items: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple'],
};

// Story with more items
export const WithMoreItems = Template.bind({});
WithMoreItems.args = {
  items: ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Mumbai', 'Berlin', 'Rome', 'Dubai', 'Toronto'],
};

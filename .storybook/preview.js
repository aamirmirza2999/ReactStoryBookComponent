import React from 'react';
import { ThemeProvider } from '../src/ThemeContext'; // Adjust the path based on your folder structure
import '../src/theme.css'; // Import the theme styles

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

// // Add ThemeProvider as a decorator to wrap all stories
// export const decorators = [
//   (Story) => (
//     <ThemeProvider>
//       <Story />
//     </ThemeProvider>
//   ),
// ];

export default preview;

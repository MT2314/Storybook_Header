
// Button.stories.ts|tsx  
// Onblur event handle

import type { Meta, StoryObj } from '@storybook/react';

import { Header } from "../Header.js"


const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    rows: [
        ['This', 'is', 'just', 'a', 'test'],
        ['This', 'is', 'also', 'a', 'test'],
        ['Just', 'a', 'little', 'more', 'data'],
        ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    // label: '😄👍😍💯',
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    // label: '📚📕📈🤓',
  },
};
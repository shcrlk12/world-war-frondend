// BackButton.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3';

import BackButton from './BackButton.vue';

const meta: Meta<typeof WorldMap> = {
  name: 'BackButton',
  component: BackButton,
  tags: ['autodocs']

};

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
 export const Small: Story = {

};

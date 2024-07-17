import { Meta } from '@storybook/react';
import { TopBar } from '.';

export default {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <TopBar />;

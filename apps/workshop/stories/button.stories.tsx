import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '@coobeet/ui';

export default {
  title: `Example/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;

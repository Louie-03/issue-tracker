/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'common/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Active = Template.bind({});
Active.args = { active: true };

export const Disabled = Template.bind({});
Disabled.args = { active: false };

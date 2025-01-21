import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TextBlock from '../TextBlock.vue';

describe('TextBlock.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'Use this space to add more details about your site, a customer quote, or to talk about important news.';
    const wrapper = mount(TextBlock, {
      props: { text }
    });
    expect(wrapper.text()).toContain(text);
  });

  it('renders default text when no props are passed', () => {
    const defaultText = 'Use this space to add more details about your site, a customer quote, or to talk about important news.';
    const wrapper = mount(TextBlock);
    expect(wrapper.text()).toContain(defaultText);
  });

  it('emits an event when clicked', async () => {
    const wrapper = mount(TextBlock);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

});

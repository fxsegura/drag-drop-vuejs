import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ImageBlock from '../ImageBlock.vue';

describe('ImageBlock.vue', () => {
  it('renders an image', () => {
    const wrapper = mount(ImageBlock, {
      props: {
        src: 'src/assets/placeholderimage.png',
        alt: 'Image Block'
      }
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('src/assets/placeholderimage.png');
    expect(img.attributes('alt')).toBe('Image Block');
  });

  it('emits an event when clicked', async () => {
    const wrapper = mount(ImageBlock);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});

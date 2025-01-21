import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BuilderCanvas from '../BuilderCanvas.vue';

describe('BuilderCanvas', () => {
  it('renders properly', () => {
    const wrapper = mount(BuilderCanvas);
    expect(wrapper.exists()).toBe(true);
  });


});

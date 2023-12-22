/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import HeaderApp from '@/components/HeaderApp.vue'

describe('HeaderApp', () => {
	it('renders text from Header', () => {
		const wrapper = shallowMount(HeaderApp)
		expect(wrapper.text()).toMatch('MagaNets')
	})
})

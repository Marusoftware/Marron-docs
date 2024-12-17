// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Marron',
			social: {
				github: 'https://github.com/Marusoftware/Marron',
			},
			sidebar: [
				{
					label: 'About Marron',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Core cocepts', slug: 'about/core' },
						{ label: 'Contribution', slug: 'about/contribution' },
					],
				},
			],
		}),
	],
});

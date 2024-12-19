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
			logo: {
				src: "./src/assets/marron.png"
			},
			favicon: "favicon.png",
			defaultLocale:"root",
			locales: {
				root: {
					label: "English",
					lang: "en"
				},
				ja: {
					label: "Japanese",
					lang: "ja"
				}
			},
			sidebar: [
				{
					label: 'About Marron',
					translations: {
						ja: "Marron について"
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Core cocepts', 
						  translations:{ja: "全体設計"}, 
						  slug: 'about/core' },
						{ label: 'Contribution', 
						  translations:{ja:"Marron プロジェクトへの参加"}, 
						  slug: 'about/contribution' },
						{ label: 'Relation to Policy', 
						  translations:{ja:"ポリシーとの関係性"}, 
						  slug: 'about/policy' },
					],
				},
				{
					label: 'About Marron Components',
					translations: {
						ja: "Marron の各機能について"
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Core and Auth', 
						  translations: {ja:"Core と Auth"},
						  slug: 'components/core' },
					],
				},
			],
		}),
	],
});

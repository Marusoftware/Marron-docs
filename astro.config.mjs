// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: "https://marron.marusoftware.net",
	trailingSlash:"always",
	integrations: [
		starlight({
			title: 'Marron',
			social: {
				discord: 'https://discord.gg/hkBKdQy3AD',
				github: 'https://github.com/Marusoftware/Marron',
			},
			logo: {
				src: "./src/assets/marron.png"
			},
			favicon: "favicon.png",
			editLink: {
				baseUrl: "https://github.com/Marusoftware/Marron-docs/edit/main/"
			},
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
					autogenerate: {directory: 'about'}
				},
				{
					label: 'About Marron Components',
					translations: {
						ja: "Marron の各機能について"
					},
					autogenerate: {directory: 'components'}
				},
			],
			plugins: [starlightLinksValidator({errorOnRelativeLinks:false})],
		}),
	],
});

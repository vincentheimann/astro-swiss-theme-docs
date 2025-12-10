// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.astroswiss.com',
	integrations: [
		starlight({
			title: 'Astro Swiss Theme',
			description: 'Documentation for the Astro Swiss multilingual starter theme with Starwind UI and i18n support',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vincentheimann/astro-swiss-free-starter-theme' },
				{ icon: 'email', label: 'Email', href: 'mailto:hello@astroswiss.com' },
			],
			editLink: {
				baseUrl: 'https://github.com/vincentheimann/astro-swiss-free-starter-theme/edit/main/docs/',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Quick Start', slug: 'getting-started', badge: { text: '10 min', variant: 'tip' } },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Configuration', slug: 'guides/configuration' },
						{ label: 'Customization', slug: 'guides/customization' },
						{ label: 'Data Management', slug: 'guides/data-management' },
						{ label: 'Styling', slug: 'guides/styling' },
						{ label: 'Adding Languages', slug: 'guides/adding-languages' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Deploy to Production', slug: 'deployment' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Browser Support', slug: 'reference/browser-support' },
						{ label: 'Contributing', slug: 'reference/contributing' },
						{ label: 'Support & FAQ', slug: 'reference/support' },
					],
				},
			],
		}),
	],
});

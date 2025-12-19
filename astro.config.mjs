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
			// editLink: {
			// 	baseUrl: 'https://github.com/vincentheimann/astro-swiss-free-starter-theme/edit/main/docs/',
			// },
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started', badge: { text: '10 min', variant: 'tip' } },
				{ label: 'Configuration', slug: 'guides/configuration' },
				{ label: 'Customization', slug: 'guides/customization' },
				{ label: 'Data Management', slug: 'guides/data-management' },
				{ label: 'Adding Languages', slug: 'guides/adding-languages' },
				{ label: 'Styling', slug: 'guides/styling' },
				{ label: 'Deployment', slug: 'deployment' },
				{ label: 'Analytics & Tracking', slug: 'guides/analytics' },
				// { label: 'Contributing', slug: 'reference/contributing' },
				{ label: 'Support & FAQ', slug: 'reference/support' },
			],
			components: {
				Head: './src/components/Head.astro',
			},
		}),
	],
});

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
				{ label: 'Setup Wizard', slug: 'guides/setup-wizard', badge: { text: 'Paid', variant: 'note' } },
				{ label: 'Configuration', slug: 'guides/configuration' },
				{ label: 'Customization', slug: 'guides/customization' },
				{ label: 'Styling', slug: 'guides/styling' },
				{ label: 'Data Management', slug: 'guides/data-management' },
				{ label: 'Adding Languages', slug: 'guides/adding-languages' },
				{ label: 'Deployment', slug: 'deployment' },
				{ label: 'Website Migration', slug: 'guides/migration', badge: { text: '4-6h', variant: 'note' } },
				{ label: 'Theme Update Guide', slug: 'guides/theme-update', badge: { text: '20-60 min', variant: 'caution' } },
				{ label: 'Analytics & Tracking', slug: 'guides/analytics' },
				{ label: 'Support & FAQ', slug: 'reference/support' },
			],
			components: {
				Head: './src/components/Head.astro',
			},
		}),
	],
});

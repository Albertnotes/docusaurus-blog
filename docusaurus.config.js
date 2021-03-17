module.exports = {
	title: 'AlbertNotes',
	tagline: '',
	url: 'https://albertnotes.github.io/',
	baseUrl: '/docusaurus-blog/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'albertnotes', // Usually your GitHub org/user name.
	projectName: 'docusaurus-blog', // Usually your repo name.
	themes: ['@docusaurus/theme-live-codeblock'],
	plugins: [
		[
			'@docusaurus/plugin-client-redirects',
			{
				createRedirects: function (existingPath) {
					console.log(existingPath);
					if (existingPath === '/docs/newDocPath2') {
						return ['/docs/oldDocPath2'];
					}
				},
			},
		],
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/albertnotes/docusaurus-blog/edit/master/',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: {
					routeBasePath: '/',
					// Please change this to your repo.
					editUrl:
						'https://github.com/albertnotes/docusaurus-blog/edit/master/',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						copyright: `Copyright © ${new Date().getFullYear()} Albert, All rights reserved.`,
					},
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'All our posts',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],

	themeConfig: {
		hideableSidebar: true,
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
		},
		// algolia: {
		// 	apiKey: '',
		// 	indexName: 'docusaurus-blog',
		// 	contextualSearch: true,
		// },
		navbar: {
			hideOnScroll: true,
			title: 'AlbertNotes',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{ to: '/tags', label: 'Tags', position: 'left' },
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					href: 'https://github.com/albertnotes/docusaurus-blog',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},
		footer: {
			style: 'light',
			// links: [
			// 	{
			// 		title: 'Docs',
			// 		items: [
			// 			{
			// 				label: 'Style Guide',
			// 				to: 'docs/',
			// 			},
			// 			{
			// 				label: 'Second Doc',
			// 				to: 'docs/doc2/',
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: 'More',
			// 		items: [
			// 			{
			// 				label: 'Tags',
			// 				to: '/tags',
			// 			},
			// 			{
			// 				label: 'GitHub',
			// 				href: 'https://github.com/albertnotes',
			// 			},
			// 		],
			// 	},
			// ],
			copyright: `Copyright © ${new Date().getFullYear()} Albert, All rights reserved.`,
		},
	},
};

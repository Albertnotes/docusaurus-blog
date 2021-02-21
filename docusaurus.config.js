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
	themeConfig: {
		navbar: {
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
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
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
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/albertnotes/docusaurus-blog/edit/master/',
				},
				blog: {
					showReadingTime: true,
					routeBasePath: '/',
					// Please change this to your repo.
					editUrl:
						'https://github.com/albertnotes/docusaurus-blog/edit/master/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
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
};

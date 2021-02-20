module.exports = {
	title: '前端日誌',
	tagline: '希望嘿嘿',
	url: 'https://albertnotes.github.io/',
	baseUrl: '/docusaurus-blog/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'albertnotes', // Usually your GitHub org/user name.
	projectName: 'docusaurus-blog', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'My Site',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/albertnotes/docusaurus-blog',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/',
						},
						{
							label: 'Second Doc',
							to: 'docs/doc2/',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: 'blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/albertnotes',
						},
					],
				},
			],
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
				redirects: [
					{
						to: '/blog', // string
						from: 'index', // string | string[]
					},
				],
			},
		],
	],
};

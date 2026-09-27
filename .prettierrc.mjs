/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	printWidth: 140,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
	],
};

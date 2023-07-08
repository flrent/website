/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [],
	darkMode: "class",
	colors: {
		orange: '#e45b00'
	},
	theme: {
		extend: {
		  screens: { 'sm': { 'max': '640px' } },
		},
	}
}

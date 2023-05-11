/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'text-xxs': '0.8rem',
				'text-xs': '1rem',
				'text-sm': '1.2rem',
				'text-2sm': '1.35rem',
				'text-base': '1.5rem',
				'text-md': '1.75rem',
				'text-lg': '1.875rem',
				'text-xl': '2rem',
				'text-2xl': '2.25rem',
				'text-3xl': '2.5rem',
				'text-4xl': '3rem',
				'text-5xl': '4rem',
			},
			screens:{
				'2lg': '1200px',
			}
		},
		colors: {
			'accent-dark': "#824e39",
			'accent-light': '#eccfc1',
			'transparent': 'transparent',
			'accent-lighter': '#ffe5d0',
			'dark-green': '#1f4646',
			'dark-brown': '#4c311c',
		},
	},
	plugins: [require("flowbite/plugin"), require('prettier-plugin-tailwindcss')],
}

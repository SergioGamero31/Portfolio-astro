/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				'portage': {
					DEFAULT: '#7A9CFA',
					300: '#A3C3Fe',
					500: '#607EF4'
				}
			},
			fontFamily: {
				'geist': ['Geist Sans', 'system-ui']
			}
		},
	},
	plugins: [],
}

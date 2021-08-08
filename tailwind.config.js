module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#0b79bf',
				secondary: '#ecc94b',
				'ecolap-gray': '#4d4d4d',
				'ecolap-green': '#25CD66',
				'ecolap-gray-h': '#404042',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

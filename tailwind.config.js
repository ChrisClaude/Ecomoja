module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				heartbeat: 'heartbeat 1.5s ease-in-out',
			},
			backgroundImage: {
				'footer-img': "url('/assets/EcoMojaFooter_banner.png')",
			},
			colors: {
				primary: '#0b79bf',
				secondary: '#059669',
				success: '#6bc134',
				'ecolap-gray': '#4d4d4d',
				'ecolap-green': '#25CD66',
				'ecolap-gray-h': '#404042',
			},
			keyframes: {
				heartbeat: {
					'0%': {
						transform: 'scale(1)',
					},
					'14%': {
						transform: 'scale(1.05)',
					},
					'20%': {
						transform: 'scale(1)',
					},
					'42%': {
						transform: 'scale(1.05)',
					},
					'70%': {
						transform: 'scale(1)',
					},
					'100%': {
						transform: 'scale(1.05)',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

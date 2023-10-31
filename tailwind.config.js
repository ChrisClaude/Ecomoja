module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				heartbeat: 'heartbeat 1.5s ease-in-out',
			},
			colors: {
				primary: '#0b79bf',
				secondary: '#6BC134',
				success: '#6bc134',
				danger: '#e84b4b',
				'ecolap-gray': '#4d4d4d',
				'ecolap-green': '#6BC134',
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
			screens:{
				'sm':'360px',
				'lg':'1024px',
			},
		},
	},
	variants: {
		extend: {},
	},
	screens:{
		'sm': '576px',
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	}
};

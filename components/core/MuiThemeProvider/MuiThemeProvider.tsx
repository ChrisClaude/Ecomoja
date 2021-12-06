import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: '#0b79bf',
		},
		secondary: {
			// This is green.A700 as hex.
			main: '#6BC134',
		},
	},
});

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => <ThemeProvider
	theme={theme}>
	{children}
</ThemeProvider>;

export default MuiThemeProvider;

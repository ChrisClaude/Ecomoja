import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0b79bf',
		},
		secondary: {
			main: '#6BC134',
		},
	},
});

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => <ThemeProvider
	theme={theme}>
	{children}
</ThemeProvider>;

export default MuiThemeProvider;

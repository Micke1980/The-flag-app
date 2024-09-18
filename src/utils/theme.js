import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		fontFamily: 'Open Sans'
	}
});

export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: 'rgba(0, 0, 0, 0.87)'
					},
					secondary: {
						main: '#9c27b0'
					},
					background: {
						default: '#f2f2f2',
						default: '#fff'
					}
			  }
			: {
					// palette values for dark mode
					primary: {
						main: '#ffffff'
					},
					secondary: {
						main: '#9c27b0'
					},
					background: {
						default: '#202c36',
						paper: '#2B3844'
					}
			  })
	}
});

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, createContext, useMemo } from 'react';
import { getDesignTokens } from '../utils/theme';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home, { allCountrysLoader } from '../pages/Home';
import CountryDetails, { countryDetailsLoader } from '../pages/CountryDetails';
import NotFound from '../pages/Notfound';
import RootLayout from '../layouts/Rootlayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} errorElement={<NotFound />} loader={allCountrysLoader} />
			<Route
				path="country/:code"
				element={<CountryDetails />}
				errorElement={<NotFound />}
				loader={countryDetailsLoader}
			/>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

export const ColorModeContext = createContext({});

function App() {
	const [mode, setMode] = useState('dark');
	const [themeIndex, setThemeIndex] = useState(0);
	const [loadingOverride, setLoadingOverride] = useState(false);
	const [noContainer, setNoContainer] = useState(false);
	const [isAligned, setisAligned] = useState(false);

	const context = useMemo(() => ({
		toggleColorMode: () => {
			setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
		},
		toggleColorTheme: (index) => {
			setThemeIndex(index);
		},
		toggleLoadingOverride: (value) => {
			setLoadingOverride(value);
		},
		toggleNoContainer: (value) => {
			setNoContainer(value);
		},
		toggleisAligned: (value) => {
			setisAligned(value);
		},
		loadingOverride,
		noContainer,
		isAligned
	}));

	const projectTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const themes = [projectTheme ];

	return (
		<ColorModeContext.Provider value={context}>
			<ThemeProvider theme={themes[themeIndex]}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;

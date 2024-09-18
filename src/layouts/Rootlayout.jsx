import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import { Container, Box } from '@mui/material';
import { unStyleContainer } from '../utils/unstyle';
import { ColorModeContext } from '../components/App';
import { useContext } from 'react';

export default function RootLayout() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	return (
		<Box className="root-layout" sx={{ bgcolor: theme.palette.background.default }}>
			<Navbar />
			<main>
				<Container style={colorMode.noContainer ? unStyleContainer : {}}>
					<Outlet />
				</Container>
			</main>
		</Box>
	);
}

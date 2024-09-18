import React from 'react';
import { useTheme } from '@mui/material/styles';
import './Navbar.css';
import { ColorModeContext } from './App';
import { Button, Box, Container, Typography, AppBar } from '@mui/material';
import techoverLogoDark from '../assets/techover-logo-dark.png';
import techoverLogo from '../assets/techover-logo.png';
import moonIcon from '../assets/moon.svg';
import moonBorderedIcon from '../assets/moon-bordered.svg';
import { unStyleContainer } from '../utils/unstyle';

export default function Navbar() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: theme.palette.background.paper
			}}
		>
			<Container style={colorMode.noContainer ? unStyleContainer : {}}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="h6" component="div" color={'primary'}>
						The Flag App
					</Typography>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						{theme.palette.mode === 'dark' ? (
							<img src={techoverLogo} alt="Techover" />
						) : (
							<img src={techoverLogoDark} alt="Techover" />
						)}
					</Box>

					<Button
						color="primary"
						variant="text"
						onClick={colorMode.toggleColorMode}
						startIcon={
							<img
								src={theme.palette.mode === 'dark' ? moonIcon : moonBorderedIcon}
								alt="Mode icon"
								style={{ width: '24px', height: '24px' }} // Anpassa storleken om det behövs
							/>
						}
					>
						{theme.palette.mode} mode
					</Button>
				</Box>
			</Container>
		</AppBar>
	);
}


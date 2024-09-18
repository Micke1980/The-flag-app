import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Box className="Home">
			<Grid container mt={4}>
				<Grid item xs={4}>
					<Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
						Back
					</Button>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={4}
				rowGap={4}
				flexDirection={{ xs: 'column', md: 'row' }}
				alignContent={{ xs: 'center', md: 'start' }}
			>
				<Grid item>
					<Typography gutterBottom variant="body1" component="div" color="primary">
						Could not find that country!
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

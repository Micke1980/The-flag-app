import * as React from 'react';
import { Stack, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CountryChips({ borders }) {
	const navigate = useNavigate();

	const handleClick = (border) => {
		navigate(`/country/${border}`);
	};

	if (!borders || borders.length === 0) {
		return (
			<Typography gutterBottom variant="body1" component="div" color="primary">
				This country has no border Border Countries
			</Typography>
		);
	}
	return (
		<Stack direction="row" spacing={1} sx={{ overflowX: 'auto', maxWidth: '100%' }}>
			{borders.map((border, i) => (
				<Chip key={i} label={border} onClick={() => handleClick(border)} />
			))}
		</Stack>
	);
}

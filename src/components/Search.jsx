import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({ setSearchParams }) {
	const handleChnage = (event) => {
		if (event.target.value === '') {
			setSearchParams({});
		} else {
			setSearchParams({ search: event.target.value });
		}
	};

	return (
		<Box
			component="form"
			sx={{
				width: '100%'
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Search for a country"
				variant="outlined"
				onChange={(event) => handleChnage(event)}
				sx={{
					width: '100%'
				}}
			/>
		</Box>
	);
}
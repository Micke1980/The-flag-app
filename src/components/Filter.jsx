import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ setSearchParams }) {
	const [region, setRegion] = React.useState('');

	const handleChange = (event) => {
		setRegion(event.target.value);

		if (event.target.value === 'All') {
			setSearchParams({});
			return;
		}
		setSearchParams({ region: event.target.value });
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="select-region">Region</InputLabel>
				<Select
					labelId="select-region"
					id="select-region"
					value={region}
					label="Region"
					onChange={handleChange}
				>
					<MenuItem value={'All'}>All</MenuItem>
					<MenuItem value={'africa'}>Africa</MenuItem>
					<MenuItem value={'america'}>America</MenuItem>
					<MenuItem value={'asia'}>Asia</MenuItem>
					<MenuItem value={'europ'}>Europ</MenuItem>
					<MenuItem value={'oceania'}>Oceania</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Box, Grid, Stack, Typography, Button, Skeleton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CountryChips from '../components/CountryChip';
import { ColorModeContext } from '../components/App';
import { useContext } from 'react';

export default function CountryDetails() {
	const { loadingOverride, isAligned } = useContext(ColorModeContext);
	const { state } = useNavigation();
	const navigate = useNavigate();
	const [country] = useLoaderData();

	return (
		<Box className="CountryDetails" pb={20}>
			<Grid container mt={4}>
				<Grid item xs={4}>
					<Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
						Back
					</Button>
				</Grid>
			</Grid>
			<Grid container columnSpacing={8} mt={4} rowSpacing={8}>
				<Grid item md={6} xs={12} sx={{ transform: `translateY(${isAligned ? '-100px' : ''})` }}>
					{loadingOverride || state === 'loading' ? (
						<Skeleton variant="rounded" width={'100%'} height={'100%'} />
					) : (
						<img
							src={country.flags.svg}
							alt={country.flags.alt}
							width="100%"
							style={{ borderRadius: '10px' }}
						/>
					)}
				</Grid>
				<Grid item md={6} xs={12} sx={{ transform: `translateY(${isAligned ? '100px' : ''})` }}>
					<Stack justifyContent="center" alignItems="start">
						<Typography gutterBottom variant="h3" component="div" color={'primary'}>
							{loadingOverride || state === 'loading' ? <Skeleton width={200} /> : country.name.common}
						</Typography>
						<Grid container sapce={2} mb={8}>
							<Grid item md={6} xs={12}>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Population: </strong>{' '}
									{loadingOverride ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : (
										country.population
									)}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Region: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : (
										country.region
									)}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Capital: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : (
										country.capital
									)}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Native name: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : country.name?.nativeName ? (
										country.name?.nativeName[Object.keys(country.name?.nativeName)[0]].common
									) : (
										'Not available'
									)}
								</Typography>
							</Grid>
							<Grid item md={6} xs={12}>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Top Level Domain: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : (
										country.tld
									)}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Currencies: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : country.currencies ? (
										country?.currencies[Object.keys(country.currencies)[0]].name
									) : (
										'Not available'
									)}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Language: </strong>
									{loadingOverride || state === 'loading' ? (
										<Skeleton
											variant="text"
											width={60}
											sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
										/>
									) : country?.languages ? (
										country?.languages[Object.keys(country.languages)[0]]
									) : (
										'Not available'
									)}
								</Typography>
							</Grid>
						</Grid>
						<Stack direction="row" alignItems="center" spacing={2} sx={{ maxWidth: '100%' }}>
							<Typography gutterBottom variant="body1" component="div" color={'primary'}>
								<strong>Border Countries: </strong>
							</Typography>
							{loadingOverride || state === 'loading' ? (
								<>
									<Skeleton variant="rounded" width={50} height={25} />
									<Skeleton variant="rounded" width={50} height={25} />
								</>
							) : (
								<CountryChips borders={country.borders} />
							)}
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}

// data loader
export const countryDetailsLoader = async ({ params }) => {
	const { code } = params;
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	if (!res.ok) {
		throw Error('Could not find that country');
	}
	return res.json();
};
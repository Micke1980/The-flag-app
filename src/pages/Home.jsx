import { useLoaderData, useSearchParams, useNavigation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CountryCard from '../components/CountryCard';
import { sortAlphabetically } from '../utils/functions';
import SkeletonCard from '../components/SkeltonCard';
import { ColorModeContext } from '../components/App';

export default function Home() {
    const { loadingOverride } = useContext(ColorModeContext);
    const [searchParams, setSearchParams] = useSearchParams(); 
    const dataArray = useLoaderData();
    const { state } = useNavigation();
    const searchTerm = searchParams.get('search') || '';
    const region = searchParams.get('region') || '';

    const filteredData = dataArray
        .filter(country => 
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (region ? country.region === region : true)
        )
        .sort(sortAlphabetically);

    return (
        <Box className="Home" pt={4}>
            <Grid container mb={4} justifyContent="space-between" spacing={2}>
                <Grid item xs={12} md={4}>
                    <Search setSearchParams={setSearchParams} />
                </Grid>
                <Grid item xs={6} md={2}>
                    <Filter setSearchParams={setSearchParams} />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                rowGap={4}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignContent={{ xs: 'center', md: 'start' }}
            >
                {state === 'loading' || loadingOverride
                    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => <SkeletonCard key={i} />)
                    : filteredData.map((country, i) => <CountryCard country={country} key={i} />)}
            </Grid>
        </Box>
    );
}

async function getAllCountrys() {
	return await fetch(`https://restcountries.com/v3.1/all`);
}

async function getCountrysByFilters(searchTerm, region) {
	if (region) {
		return await fetch(`https://restcountries.com/v3.1/region/${region}`);
	} else if (searchTerm) {
		return await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
	} else {
		throw Error('Kunde inte hitta den profilen.');
	}
}

// data loader
export const allCountrysLoader = async ({ request }) => {
	const url = new URL(request.url);
	const { searchParams } = url;
	const searchTerm = searchParams.get('search');
	const region = searchParams.get('region');
	const res = searchParams.size > 0 ? await getCountrysByFilters(searchTerm, region) : await getAllCountrys();

	if (!res.ok) {
		throw Error('Could not find that country');
	}
	return res.json();
};

import React from 'react';
import { Skeleton, Typography, CardContent, Card, Grid, CardActionArea } from '@mui/material';

export default function SkeletonCard({ i }) {
	return (
		<Grid item xs={12} md={4} lg={3} sm={6} key={i}>
			<Card sx={{ maxWidth: 345 }} elevation={6}>
				<CardActionArea>
					<Skeleton variant="rectangular" width={'100%'} height={140} />

					<CardContent>
						<Typography gutterBottom variant="subtitle1" component="div" noWrap={true}>
							<Skeleton variant="text" />
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Population: </strong>
							<Skeleton
								variant="text"
								width={60}
								sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
							/>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Region: </strong>
							<Skeleton
								variant="text"
								width={85}
								sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
							/>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Capital: </strong>
							<Skeleton
								variant="text"
								width={85}
								sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
							/>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
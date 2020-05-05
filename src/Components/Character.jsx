import React, { Fragment } from "react";
import { Grid, Box, Typography } from "@material-ui/core/";

function Character({ character }) {
	const { loading = false } = character;
	return (
		<Fragment>
			<Grid container wrap="nowrap">
				{(loading ? Array.from(new Array(3)) : character).map((item, index) => (
					<Box key={index} width={210} marginRight={0.5} my={5}>
						{item ? (
							<img
								style={{ width: 210, height: 118 }}
								alt={item.title}
								src={item.src}
							/>
						) : (
							{
								/* <Skeleton variant="rect" width={210} height={118} /> */
							}
						)}

						{item ? (
							<Box pr={2}>
								<Typography gutterBottom variant="body2">
									{item.title}
								</Typography>
								<Typography
									display="block"
									variant="caption"
									color="textSecondary"
								>
									{item.channel}
								</Typography>
								<Typography variant="caption" color="textSecondary">
									{`${item.views} • ${item.createdAt}`}
								</Typography>
							</Box>
						) : (
							<Box pt={0.5}>{/* <Skeleton />
								<Skeleton width="60%" /> */}</Box>
						)}
					</Box>
				))}
			</Grid>
		</Fragment>
	);
}

export default Character;

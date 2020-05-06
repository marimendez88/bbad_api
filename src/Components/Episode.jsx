import React from "react";
import {
	makeStyles,
	Paper,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		maxWidth: 300,
		margin: 20,
	},
	image: {
		width: 128,
		height: 128,
	},
}));

const Episode = ({ data }) => {
	const classes = useStyles();

	const { title, season, episode, air_date } = data;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Card className={classes.root}>
					<CardActionArea>
						<CardContent>
							<Typography className={classes.title} color="textSecondary">
								Name: {title}
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Season: {season}
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Episode: {episode}
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Air Date: {air_date}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Paper>
		</div>
	);
};

export default Episode;

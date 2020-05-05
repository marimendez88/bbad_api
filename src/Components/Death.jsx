import React, { Fragment } from "react";
import { makeStyles, Typography, Card, CardContent } from "@material-ui/core/";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: 10,
	},
	bullet: {
		display: "inline-block",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 20,
	},
	pos: {
		marginBottom: 12,
	},
});

function Deaths({ death }) {
	const { death: d, cause, responsible, last_words } = death;
	const classes = useStyles();

	return (
		<Fragment>
			<Card className={classes.root}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						{d}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Cause: {cause}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Responsible: {responsible}
					</Typography>
					<Typography variant="body2" component="p">
						Last Words: {last_words}
					</Typography>
				</CardContent>
			</Card>

			<br></br>
		</Fragment>
	);
}

export default Deaths;

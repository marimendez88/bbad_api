import React, { Fragment } from "react";
import {
	makeStyles,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
} from "@material-ui/core/";

const useStyles = makeStyles({
	root: {
		maxWidth: 172,
		margin: 20,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	title: {
		fontSize: 18,
	},
	pos: {
		marginBottom: 10,
	},
});

function Character({ character }) {
	const { name, occupation, status, birthday, img } = character;
	const classes = useStyles();
	return (
		<Fragment>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={img} title={name} />
					<CardContent>
						<Typography className={classes.title} color="textSecondary">
							{name}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{occupation}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{status}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{birthday}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Fragment>
	);
}

export default Character;

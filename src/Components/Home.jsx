import React, { Fragment } from "react";
import {
	Paper,
	Grid,
	makeStyles,
	Container,
	GridList,
	Typography,
	Button,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
	},
	paper: {
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));
function Home() {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Paper className={classes.paper}>
							<Typography>
								<h3 className=" MuiTypography-h3 MuiTypography-colorTextPrimary">
									Personajes
								</h3>
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<Typography>
								<h3 className=" MuiTypography-h3 MuiTypography-colorTextPrimary">
									Total Deaths:
								</h3>
								<h4 className=" MuiTypography-h4 MuiTypography-colorTextSecondary">
									Deaths
								</h4>
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}

export default Home;

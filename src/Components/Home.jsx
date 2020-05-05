import React, { useState, useEffect, Fragment } from "react";
import {
	Paper,
	Grid,
	makeStyles,
	Container,
	GridList,
	Typography,
	Button,
} from "@material-ui/core/";
import useHome from "../Hooks/useHome";
import Character from "./Character";

import Death from "./Death";

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
	const { characters, deaths, count } = useHome();
	const [data, setData] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		if (characters.length) setData(characters);
	}, [characters]);

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

								{deaths.map((death) => (
									<Death key={death.death_id} death={death} count={count} />
								))}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}

export default Home;

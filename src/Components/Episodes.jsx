import React, { useState, useEffect, Fragment } from "react";
import {
	Paper,
	Grid,
	makeStyles,
	GridList,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core/";
import useEpisodes from "../Hooks/useEpisodes";
import Episode from "./Episode";

const options = ["Season 1", "Season 2", "Season 3", "Season 4"];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const Episodes = () => {
	const classes = useStyles();
	const { episodes } = useEpisodes();
	const [age, setSeason] = React.useState("");

	const handleChange = (event) => {
		setSeason(event.target.value);
	};
	return (
		<Fragment>
			<Grid item xs={10}>
				<Paper className={classes.paper}>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="demo-simple-select-outlined-label">
							Season
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							value="season"
							label="Season"
							onChange={handleChange}
						>
							{options.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<div>
						<h3>FILTER</h3>
						<select>
							<option value="" />
							{options.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<GridList cellHeight="auto" className={classes.gridList}>
						{episodes.map((data) => (
							<Episode data={data} key={data.episode_id} />
						))}
					</GridList>
				</Paper>
			</Grid>
		</Fragment>
	);
};

export default Episodes;

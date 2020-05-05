import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

function Header() {
	return (
		<Fragment>
			<AppBar position="static" color="default">
				<Toolbar variant="dense">
					<IconButton edge="start" color="inherit">
						<NavLink to="/" activeClassName="selected">
							Home
						</NavLink>
					</IconButton>
					<IconButton color="inherit">
						<NavLink to="/episodes" activeClassName="selected">
							Episodes
						</NavLink>
					</IconButton>
				</Toolbar>
			</AppBar>
			<br></br>
		</Fragment>
	);
}

export default Header;

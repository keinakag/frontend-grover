import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import { Button } from "mdbreact";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Searchbar from "./searchbar";

class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
							<a className="navbar-brand">
								<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
							</a>
							<Searchbar />

							<ul className="navbar-nav ml-auto nav-flex-icons">
								<li id="avatar" className="nav-item avatar dropdown">
									<a
										className="nav-link dropdown-toggle"
										id="navbarDropdownMenuLink-55"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<img
											src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
											alt="Avatar"
											className="md-avatar rounded-circle size-1"
										/>
									</a>

									<div
										className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
										aria-labelledby="navbarDropdownMenuLink-55">
										<a className="dropdown-item" href="#">
											My Profile
										</a>
										<a className="dropdown-item" href="#">
											Account details
										</a>
										<a className="dropdown-item" href="#">
											Help Center
										</a>

										<a
											className="dropdown-item"
											href="#"
											onClick={() => actions.logout(this.props.history)}>
											Log Out
										</a>
									</div>
								</li>
							</ul>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
Navbar.propTypes = {
	history: PropTypes.object
};

export default withRouter(Navbar);

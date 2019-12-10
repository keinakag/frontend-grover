import React from "react";
import Cards from "../component/cards";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron";
import Navbar from "../component/navbar";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "../component/searchbar";
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>

				<Jumbotron />
				<div className="container-fluid ">
					<Searchbar />
				</div>
				<div className="card-columns">
					<Cards />
				</div>
			</div>
		);
	}
}

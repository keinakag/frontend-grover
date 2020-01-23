import React from "react";
import Cards from "../component/cards";
import Tvcards from "../component/tvcards";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Jumbotron from "../component/jumbotron";
import Navbar from "../component/navbar";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import Searchbar from "../component/searchbar";
import { SearchResult } from "./searchResults";
import Footer from "../component/footer";
export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="home">
							<div>
								<Navbar />
							</div>
							<Jumbotron />
							<div className="movies-title">
								<h3>Movies</h3>
							</div>
							<div className="card-columns w-100 p-3">
								<Cards />
							</div>
							<div className="tv-title">
								<h3>Tv Shows</h3>
							</div>
							<div className="card-columns w-100 p-3">
								<Tvcards />
							</div>
							<div>
								<Footer />
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

import React from "react";
import Cards from "../component/cards";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron";
import Navbar from "../component/navbar";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import Searchbar from "../component/searchbar";
import { SearchResult } from "./searchResults";
export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div>
							<div>
								<Navbar />
							</div>

							<Jumbotron />
							<div className="movies-title">
								<h3>Movies</h3>
							</div>
							{store.search.length > 0 ? (
								<SearchResult />
							) : (
								<div className="card-columns w-100 p-3">
									<Cards />
								</div>
							)}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

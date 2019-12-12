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
							<div className="container-fluid ">
								<Searchbar />
							</div>

							{store.search.length > 0 ? (
								<SearchResult />
							) : (
								<div className="card-columns">
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

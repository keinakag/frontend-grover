import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.scss";
import Searchbar from "../component/searchbar";
import Searchbk from "../../img/searchbk.png";
import { Context } from "../store/appContext.js";
import Navbar from "../component/navbar";
import { SearchResult } from "./searchResults";

export class Search extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="search">
							<div>
								<Navbar />
							</div>
							{store.search.length > 0 ? <SearchResult /> : <div />}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Context } from "../store/appContext";

export default class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: null
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<>
							<div className="input-group mb-3">
								<input
									onChange={e => this.setState({ searchInput: e.target.value })}
									type="text"
									className="form-control"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<div className="input-group-append">
									<button
										onClick={() => actions.searchMovie(this.state.searchInput)}
										className="btn btn-outline-secondary"
										type="button"
										id="button-addon2">
										<i className="fas fa-search fa-2x" />
									</button>
								</div>
							</div>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}

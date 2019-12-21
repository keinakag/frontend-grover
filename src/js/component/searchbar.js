import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Context } from "../store/appContext";

export default class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchboxStyle: {
				width: "120px",
				background: "#eee"
			}
		};

		this._handleTextFocus = this._handleTextFocus.bind(this);
		this._handleClick = this._handleClick.bind(this);
		this._handleTextBlur = this._handleTextBlur.bind(this);
		this.state = {
			searchInput: null
		};
	}

	_handleTextFocus(e) {
		e.preventDefault();

		this.setState({
			searchboxStyle: {
				width: "100%",
				background: "#fff"
			}
		});
	}

	_handleTextBlur(e) {
		e.preventDefault();
		if (!this._searchBox.value && !this._searchBox.value.length > 0)
			this.setState({
				searchboxStyle: {
					width: "120px",
					background: "#eee"
				}
			});
	}

	_handleClick(e) {
		e.preventDefault();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<form onSubmit={this._handleClick}>
								<div className="search-box" style={this.state.searchboxStyle}>
									<div className="textbox">
										<input
											onChange={e => this.setState({ searchInput: e.target.value })}
											type="text"
											name="search"
											ref={f => (this._searchBox = f)}
											placeholder="Search"
											autoComplete="off"
											onFocus={this._handleTextFocus}
											onBlur={this._handleTextBlur}
											className="auto-expand"
										/>
									</div>
									<button
										className="search-button"
										onClick={() => actions.searchMovie(this.state.searchInput)}>
										<span className="icon" />
									</button>
								</div>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

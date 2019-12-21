import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";

import Searchbar from "../component/searchbar";
import Searchbk from "../../img/searchbk.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Context } from "../store/appContext.js";

export class Search extends React.Component {
	// 	render() {
	// 		return (
	// 			<Context.Consumer>
	// 				{({ store, actions }) => {
	// 					if (store.moviesList == undefined || store.moviesList == null) console.log(<h1>Loading</h1>);
	// 					else {
	// 						return (
	// 							<div id="carrusel" className="wrapper">
	// 								<Slider>
	// 									{store.moviesList.map((article, index) => {
	// 										const style = {
	// 											backgroundImage: `url(https://image.tmdb.org/t/p/w300${
	// 												article.poster_path
	// 											})`,
	// 											backgroundRepeat: "no-repeat",
	// 											backgroundSize: "auto",
	// 											backgroundPosition: "500px"
	// 										};
	// 										return (
	// 											<div style={style} key={index} className="">
	// 												<div id="infomovie" className="">
	// 													<h2>{article.title}</h2>

	// 													<div>{article.overview}</div>
	// 													<div>{article.vote_average}</div>
	// 												</div>
	// 											</div>
	// 										);
	// 									})}
	// 								</Slider>
	// 							</div>
	// 						);
	// 					}
	// 				}}
	// 			</Context.Consumer>
	// 		);
	// 	}
	// }
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
							<h1>Search Form</h1>
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

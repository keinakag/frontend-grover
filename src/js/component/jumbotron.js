import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";

import Searchbar from "../component/searchbar";
import Searchbk from "../../img/searchbk.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Context } from "../store/appContext.js";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.moviesList == undefined || store.moviesList == null) console.log(<h1>Loading</h1>);
					else {
						return (
							<div id="carrusel" className="wrapper">
								<Slider>
									{store.moviesList.map((article, index) => {
										const style = {
											backgroundImage: `url(https://image.tmdb.org/t/p/w300${
												article.poster_path
											})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "auto",
											backgroundPosition: "500px"
										};
										return (
											<div style={style} key={index} className="">
												<div id="infomovie" className="">
													<h2>{article.title}</h2>

													<div>{article.overview}</div>
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}

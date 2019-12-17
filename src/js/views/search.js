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

export const Search = () => {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				if (store.moviesList == undefined || store.moviesList == null) console.log(<h1>Loading</h1>);
				else {
					return (
						<div className="container-fluid bk">
							<Slider>
								{store.moviesList.map((article, index) => {
									const style = {
										backgroundImage: `url(https://image.tmdb.org/t/p/w500${article.poster_path})`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										bavkgroundPosition: "center"
									};
									return (
										<div style={style} key={index} className="slider-content">
											<h2>{article.title}</h2>
											<div>{article.overview}</div>
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
};

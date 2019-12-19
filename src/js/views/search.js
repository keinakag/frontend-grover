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
											backgroundImage: `url(https://image.tmdb.org/t/p/w780${
												article.poster_path
											})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "auto",
											backgroundPosition: "center"
										};
										return (
											<div
												style={style}
												key={index}
												className="row justify-content-center align-self-center">
												<div className="row">
													<div className=" col-6">
														<h2>{article.title}</h2>

														<div>{article.overview}</div>

														<span>
															<a href="/movie/330457-frozen-ii">
																<h2 className="9">Frozen II</h2>
															</a>{" "}
															<span className={article.release_date}>(2019)</span>
														</span>
													</div>
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

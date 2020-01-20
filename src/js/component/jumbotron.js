import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";
import BeautyStars from "beauty-stars";
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
										const styleBig = {
											backgroundImage: `url(https://image.tmdb.org/t/p/w300${
												article.poster_path
											})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
											backgroundPosition: "center",
											overflow: "hidden"
										};
										const styleSmall = {
											backgroundImage: `url(https://image.tmdb.org/t/p/w300${
												article.poster_path
											})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "500px",
											backgroundPosition: "center",
											overflow: "hidden",
											borderRadius: 50,
											height: "100px"
										};
										return (
											<>
												<div style={styleBig} key={index} className="">
													<div id="infomovie" className="">
														<div style={styleSmall} />
														<h2>{article.title}</h2>
														<div id="stars">
															<BeautyStars
																maxStars={10}
																editable={false}
																size="17px"
																inactiveColor="transparent"
																border="1px"
																value={article.vote_average}
															/>
															<p>({article.popularity})</p>
														</div>

														<span className="badge badge-info">
															{article.original_language}
														</span>

														<h3>overview</h3>
														<div>{article.overview}</div>
													</div>
												</div>

												<div className="container">
													<div className="row">
														<div className="col-sm-9">
															Level 1: .col-sm-9
															<div className="row">
																<div className="col-8 col-sm-6">
																	Level 2: .col-8 .col-sm-6
																</div>
																<div className="col-4 col-sm-6">
																	Level 2: .col-4 .col-sm-6
																</div>
															</div>
														</div>
													</div>
												</div>
											</>
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

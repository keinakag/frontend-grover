import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";
import Noposter from "../../img/noposter.jpg";
export default class Tvcards extends React.Component {
	render() {
		return (
			<MDBContainer>
				<div className="w-auto">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<>
									{store.tvList != undefined &&
										store.tvList.map((item, index) => {
											return (
												<div id="tvcards" key={index} className="card mb-4">
													<div className="view overlay">
														{item.poster_path ? (
															<img
																className="card-img-top"
																src={
																	"https://image.tmdb.org/t/p/w342" + item.poster_path
																}
																alt="Card image cap"
															/>
														) : (
															<img
																className="card-img-top"
																src={Noposter}
																alt="Card image cap"
															/>
														)}
														<Link to={"/details/" + index}>
															<div className="mask rgba-white-slight" />
														</Link>
													</div>
													{/* <div className="card-body">
                                                        <h4 className="card-title">{item.title}</h4>
                                                        <p className="card-text">{item.overview}</p>
                                                    </div> */}
												</div>
											);
										})}
								</>
							);
						}}
					</Context.Consumer>
				</div>
			</MDBContainer>
		);
	}
}

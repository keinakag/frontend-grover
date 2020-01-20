import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import image from "../../img/rigo-baby.jpg";
export class SearchResult extends React.Component {
	render() {
		return (
			<div className="container-fluid ">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<>
								<div className="row">
									{store.search != undefined &&
										store.search.map((item, index) => {
											return (
												<>
													<div key={item.id} className="col-3">
														<section id="section1">
															<a href="#section3" className="arrow__btn">
																‹
															</a>
															<div className="item">
																<img
																	src={item.picture}
																	alt={item.name}
																	style={{ width: "400px" }}
																/>
															</div>
														</section>
													</div>

													{/* <div className="view overlay">
														{item.picture ? (
															<img
																className="card-img-top"
																src={item.picture}
																alt="Card image cap"
															/>
														) : (
															<img
																className="card-img-top"
																src={image}
																alt="Card image cap"
															/>
														)}
														<a href="#!">
															<div className="mask rgba-white-slight" />
														</a>
													</div> */}
													{item.locations.map((item, index) => {
														return (
															<>
																<a
																	key={index}
																	href={item.url}
																	target="_blank"
																	rel="noopener noreferrer">
																	<div>{item.display_name}</div>
																</a>
															</>
														);
													})}
												</>
											);
										})}
								</div>
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

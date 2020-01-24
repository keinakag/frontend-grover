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
			<div className="container-fluid " style={{ background: "#024752" }}>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<>
								<div className="filapeli d-flex align-items-stretch" style={{ background: "#024752" }}>
									{store.search != undefined &&
										store.search.map((item, index) => {
											return (
												<>
													<div key={item.id} className="peli d-flex mb-3">
														<Link to={"/details/" + index}>
															<div className="item">
																<img
																	src={item.picture}
																	alt={item.name}
																	style={{
																		width: "400px",
																		flex: 1,
																		aspectRatio: 1.5,
																		resizeMode: "contain"
																	}}
																/>
															</div>
														</Link>
													</div>
													{/* 
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
													})} */}
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

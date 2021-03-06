import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.scss";
import Searchbar from "../component/searchbar";
import PropTypes from "prop-types";
import Searchbk from "../../img/searchbk.png";
import { Context } from "../store/appContext.js";
import Navbar from "../component/navbar";
import { SearchResult } from "./searchResults";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBFormInline } from "mdbreact";
export class Details extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					let item = store.search[this.props.match.params.theindex];
					return (
						<>
							<div className="flex-container">
								<div className="flex-container" style={{ background: " #02505c", height: "85px" }}>
									<Navbar />
								</div>
								<div className="row" style={{}}>
									<div className="col-4 left p-0" style={{ height: "600px" }}>
										<h1
											style={{
												color: "white",
												textAlign: "left",
												marginTop: "34px",
												marginLeft: "49px"
											}}>
											{item.name}
										</h1>

										{item.locations.map((item, index) => {
											return (
												<>
													<a
														key={index}
														href={item.url}
														target="_blank"
														rel="noopener noreferrer">
														<MDBBtn color="amber">{item.display_name}</MDBBtn>
													</a>
												</>
											);
										})}
									</div>
									<div className="col-8 right" style={{ height: "600px" }}>
										<div>
											<img
												src={item.picture}
												alt={item.name}
												style={{
													width: "100%",
													height: "600px",
													flex: 1,
													aspectRatio: 1.5,
													resizeMode: "contain"
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.scss";
import Searchbar from "../component/searchbar";

import Searchbk from "../../img/searchbk.png";
import { Context } from "../store/appContext.js";
import Navbar from "../component/navbar";
import { SearchResult } from "./searchResults";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBFormInline } from "mdbreact";
export class Text extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: null
		};
	}
	state = {
		modal10: false,
		modal11: false
	};

	toggle = nr => () => {
		let modalNumber = "modal" + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="" style={{ background: "#024752", height: "100px", paddingTop: "33px" }}>
							<MDBContainer>
								<div className="row justify-content-end">
									<div className="col-3">
										<i
											className="fas fa-search"
											style={{ cursor: "pointer", fontSize: "35px", color: "#E48B18" }}
											onClick={this.toggle(11)}
										/>
									</div>
								</div>

								<MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top ">
									<div className="row justify-content-end" style={{ background: "#024752" }}>
										<div className="col-8">
											<MDBFormInline className="md-form mr-auto mb-4">
												<input
													style={{
														fontSize: "30px",
														width: "450px"
													}}
													align="center"
													className="form-control mr-sm-2"
													type="text"
													placeholder="Search for Movies or Tv Shows"
													aria-label="Search"
													onChange={e => this.setState({ searchInput: e.target.value })}
												/>
												<div className="col-1 ">
													<Link to="/text">
														<i
															className="fas fa-search"
															style={{ fontSize: "34px", color: "#E48B18" }}
															onClick={() => actions.searchMovie(this.state.searchInput)}
														/>
													</Link>
												</div>
												<div className="col-1 ">
													<i
														className="fas fa-times"
														style={{ cursor: "pointer", fontSize: "34px" }}
														onClick={this.toggle(11)}
													/>
												</div>
											</MDBFormInline>
										</div>
									</div>
									<SearchResult />
								</MDBModal>
							</MDBContainer>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

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
							<Navbar />
							<div>{item.name}</div>
							{item.locations.map((i, index) => {
								return <div key={index}>{i.display_name}</div>;
							})}
							<div className="flex-container">
								<div className="row">
									<div className="col-4 left" style={{ height: "600px" }}>
										<h1>hol</h1>
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

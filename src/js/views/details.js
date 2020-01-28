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
									<div className="col-4 left" style={{ height: "600px" }}>
										<div>{item.name}</div>
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

									{item.locations.map((i, index) => {
										return <div key={index}>{i.display_name}</div>;
									})}
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

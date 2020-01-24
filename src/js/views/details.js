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
							<div>{item.name}</div>
							{item.locations.map((i, index) => {
								return <div key={index}>{i.display_name}</div>;
							})}
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

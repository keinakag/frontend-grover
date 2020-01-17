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
						<MDBContainer>
							<button
								color="secondary"
								onClick={this.toggle(11)}
								type="button"
								className="btn btn-default btn-circle btn-xl">
								<i className="fas fa-search" />
							</button>
							<MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
								<MDBFormInline className="md-form mr-auto mb-4">
									<input
										className="form-control mr-sm-2"
										type="text"
										placeholder="Search"
										aria-label="Search"
										onChange={e => this.setState({ searchInput: e.target.value })}
									/>
									<Link to="/text">
										<button
											type="button"
											className="btn btn-default btn-circle btn-xl"
											onClick={() => actions.searchMovie(this.state.searchInput)}>
											<i className="fas fa-search" />
										</button>
									</Link>
									<MDBBtn color="secondary" onClick={this.toggle(11)}>
										Close
									</MDBBtn>
								</MDBFormInline>
							</MDBModal>
						</MDBContainer>
					);
				}}
			</Context.Consumer>
		);
	}
}

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
			<MDBContainer>
				<MDBBtn color="warning" onClick={this.toggle(10)}>
					Bottom
				</MDBBtn>
				<MDBModal isOpen={this.state.modal10} toggle={this.toggle(10)} frame position="bottom">
					<MDBModalBody className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
						<MDBBtn color="secondary" onClick={this.toggle(10)}>
							Close
						</MDBBtn>
						<MDBBtn color="primary">Save changes</MDBBtn>
					</MDBModalBody>
				</MDBModal>

				<MDBBtn color="secondary" onClick={this.toggle(11)}>
					search
				</MDBBtn>
				<MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
					<MDBFormInline className="md-form mr-auto mb-4">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
						<MDBBtn color="secondary" onClick={this.toggle(11)}>
							Close
							<Link to="/text">
								<button
									className="search-button"
									onClick={() => actions.searchMovie(this.state.searchInput)}>
									<span className="icon" />
								</button>
							</Link>
						</MDBBtn>
					</MDBFormInline>
				</MDBModal>
			</MDBContainer>
		);
	}
}

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";

import Searchbar from "../component/searchbar";
import Searchbk from "../../img/searchbk.png";

export class Search extends React.Component {
	render() {
		return (
			<div className="container-fluid bk">
				<div className="nav">
					<Searchbar />
				</div>
			</div>
		);
	}
}

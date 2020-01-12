import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class SearchResult extends React.Component {
	render() {
		return (
			<div className="container-fluid ">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<>
								{store.search != undefined &&
									store.search.map((item, index) => {
										return (
											<div key={index} className="results">
												<h2>{item.name}</h2>
												<h1>{item.display_name}</h1>
											</div>
										);
									})}
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

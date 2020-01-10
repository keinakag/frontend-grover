import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";
import BeautyStars from "beauty-stars";
import Searchbar from "../component/searchbar";
import Searchbk from "../../img/searchbk.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Context } from "../store/appContext.js";

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<BeautyStars
								value={this.state.value}
								moviesList={this.state.value}
								onChange={value => this.setState({ value })}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

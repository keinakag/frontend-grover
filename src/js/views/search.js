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
import { MDBContainer } from "mdbreact";

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	render() {
		return (
			<MDBContainer>
				<div className="w-auto">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<>
									{store.tvList != undefined &&
										store.tvList.map((item, index) => {
											return (
												<div key={index} className="card mb-4">
													<div className="view overlay">
														<img
															className="card-img-top"
															src={"https://image.tmdb.org/t/p/w342" + item.poster_path}
															alt="Card image cap"
														/>
														<a href="#!">
															<div className="mask rgba-white-slight" />
														</a>
													</div>
													{/* <div className="card-body">
														<h4 className="card-title">{item.title}</h4>
														<p className="card-text">{item.overview}</p>
													</div> */}
												</div>
											);
										})}
								</>
							);
						}}
					</Context.Consumer>
				</div>
			</MDBContainer>
		);
	}
}

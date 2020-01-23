import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";
import Image from "../../img/rigo-baby.jpg";

export default class CardsPng extends React.Component {
	render() {
		return (
			<div className="flex-container">
				<div className="row justify-content-center">
					<div className="col-8">
						<div className="card-deck ">
							<div className="card  border-0" style={{ backgroundColor: "transparent" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body ">
									<h3 className="card-title">TV</h3>
									<p className="card-text">
										<p>Amazon Fire TV</p>
										<p>Android TV </p>
										<p>AppleTV </p>
										<p>Chromecast</p>
										<p>LG TVs</p>
										<p>Samsung</p>
										<p>Roku</p>
									</p>
								</div>
							</div>
							<div className="card border-0" style={{ backgroundColor: "transparent" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body border-0">
									<h3 className="card-title">Computer</h3>
									<p className="card-text">
										<p>Chrome OS</p>
										<p>MacOS</p>
										<p> Windows PC</p>
									</p>
								</div>
							</div>
							<div className="card border-0" style={{ backgroundColor: "transparent" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h3 className="card-title">Mobile & Tablet</h3>
									<p className="card-text">
										<p>Amazon Fire Tablets</p>
										<p>Android Phones & Tablets</p>
										<p>iPhone and iPad</p>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

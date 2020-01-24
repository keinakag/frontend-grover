import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";
import Tablet from "../../img/tablet.png";
import Laptop from "../../img/laptop.png";
import Tvlogo from "../../img/tvlogo.png";

export default class CardsPng extends React.Component {
	render() {
		return (
			<div className="w-auto">
				<section className="text-center my-5">
					<h2 className="grey-text text-center w-responsive mx-auto mb-5" style={{ fontSize: "40px" }}>
						Available on your favorite devices
					</h2>
				</section>

				<div className="flex-container">
					<div className="row justify-content-center">
						<div className="col-8">
							<div className="card-deck ">
								<div
									className="card  h-100 border-0"
									style={{ backgroundColor: "transparent", textAlign: "center" }}>
									<img
										src={Tvlogo}
										className="card-img-top smallimg mx-auto"
										alt="..."
										style={{ width: "237px" }}
									/>
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
								<div
									className="card border-0"
									style={{ backgroundColor: "transparent", textAlign: "center" }}>
									<img
										src={Laptop}
										className="card-img-top smallimg mx-auto"
										alt="..."
										style={{ width: "248px" }}
									/>
									<div className="card-body border-0">
										<h3 className="card-title">Computer</h3>
										<p className="card-text">
											<p>Chrome OS</p>
											<p>MacOS</p>
											<p> Windows PC</p>
										</p>
									</div>
								</div>
								<div
									className="card border-0"
									style={{ backgroundColor: "transparent", textAlign: "center" }}>
									<img
										src={Tablet}
										className="card-img-top smallimg mx-auto"
										alt="..."
										style={{ width: "150px" }}
									/>
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
			</div>
		);
	}
}

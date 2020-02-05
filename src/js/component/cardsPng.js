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
			<div className="w-auto custom ">
				<section className="text-center my-5">
					<h2 className="white-text text-center w-responsive mx-auto mb-5" style={{ fontSize: "40px" }}>
						Available on your favorite devices
					</h2>
				</section>

				<div className="flex-container">
					<div className="row justify-content-center">
						<div className="col-md-6 col-lg-4 col-xl-3">
							<div
								id="png"
								className="card png h-100 w-75 "
								style={{ backgroundColor: "#024752", textAlign: "center" }}>
								<img
									src={Tvlogo}
									className="card-img-top  img-fluid smallimg mx-auto pt-4"
									alt="..."
									style={{ width: "237px", display: "block" }}
								/>
								<div className="card-body ">
									<h3 className="card-title" style={{ color: "white" }}>
										TV
									</h3>
									<p className="card-text" style={{ color: "white" }}>
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
						</div>
						<div className="col-md-6 col-lg-4 col-xl-3">
							<div
								id="png"
								className="card png h-100 w-75"
								style={{ backgroundColor: "#024752", textAlign: "center" }}>
								<img
									src={Laptop}
									className="card-img-top  img-fluid smallimg mx-auto pt-4"
									alt="..."
									style={{ width: "237px", display: "block" }}
								/>
								<div className="card-body border-0">
									<h3 className="card-title" style={{ color: "white" }}>
										Computer
									</h3>
									<p className="card-text" style={{ color: "white" }}>
										<p>Chrome OS</p>
										<p>MacOS</p>
										<p> Windows PC</p>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-xl-3">
							<div
								id="png"
								className="card png h-100 w-75"
								style={{ backgroundColor: "#024752", textAlign: "center" }}>
								<img
									src={Tablet}
									className="card-img-top img-fluid smallimg mx-auto pt-4"
									alt="..."
									style={{ width: "150px", display: "block" }}
								/>
								<div className="card-body">
									<h3 className="card-title" style={{ color: "white" }}>
										Mobile & Tablet
									</h3>
									<p className="card-text" style={{ color: "white" }}>
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

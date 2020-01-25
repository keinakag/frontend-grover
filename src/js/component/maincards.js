import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Maincards extends React.Component {
	render() {
		return (
			<div className="w-auto">
				<section className="text-center my-5">
					<h1 className="h1-responsive text-center my-5" style={{ color: "white" }}>
						WHY GROVER?
					</h1>
					<h2 className="white-text text-center w-responsive mx-auto mb-5">
						No contracts, commitments, or equipment rentals.
					</h2>
				</section>

				<div className="flex-container">
					<div className="row justify-content-center">
						<div className="col-8">
							<div className="card-deck" style={{ textAlign: "center" }}>
								<div className="card " style={{ backgroundColor: "#024752" }}>
									<div className="card-body mt-2">
										<h5 className="card-title" style={{ color: "white" }}>
											GREAT FREE MOVIES
										</h5>
										<ul className="striped mb-0" style={{ color: "grey" }}>
											<li>
												<p>
													Grover constantly searching all over the web for the best torrents
													from the most important sites.
												</p>
											</li>
											<li>
												<p>Watch on your laptop, TV, phone and tablet</p>
											</li>
											<li>
												<p>Unlimited movies and TV shows</p>
											</li>
											<li>
												<p>best content on the web</p>
											</li>
											<li>
												<p>always free</p>
											</li>
										</ul>
									</div>
									<div
										className="card-footer "
										style={{ borderTop: "none", backgroundColor: "#024752" }}>
										<MDBBtn outline color="white">
											SUBCRIBE
										</MDBBtn>
									</div>
								</div>
								<div className="card" style={{ backgroundColor: "#024752" }}>
									<div className="card-body mt-2">
										<h5 className="card-title" style={{ color: "white" }}>
											NO RESTRICTIONS
										</h5>
										<ul className="striped mb-0" style={{ color: "grey" }}>
											<li>
												<p>HD available</p>
											</li>
											<li>
												<p>
													<strong>all</strong>
													Screens you can watch on at the same time
												</p>
											</li>
											<li>
												<p>
													Watch any movie or TV show as many times as you want. All you need
													to get started is a proper internet connection
												</p>
											</li>
											<li>
												<p>Select quality and subtitles</p>
											</li>
										</ul>
									</div>
									<div
										className="card-footer"
										style={{ borderTop: "none", backgroundColor: "#024752" }}>
										<MDBBtn outline color="white">
											SUBCRIBE
										</MDBBtn>
									</div>
								</div>
								<div className="card" style={{ backgroundColor: "#024752" }}>
									<div className="card-body mt-2">
										<h5 className="card-title" style={{ color: "white" }}>
											THE BEST QUALITY
										</h5>

										<ul className="striped mb-0" style={{ color: "grey" }}>
											<li>
												<p>
													Watch your movie or episode instantly in HD and with subtitles. And
													then keep watching.
												</p>
											</li>
											<li>
												<p>Awesome catalogue</p>
											</li>
											<li>
												<p>
													No wait or download time. Instant playback of your favorite free
													movies and TV shows.
												</p>
											</li>
											<li>
												<p>
													If the movie or TV show is out there, Grover Time will find the best
													version possible and start streaming it right away.
												</p>
											</li>
										</ul>
									</div>
									<div
										className="card-footer"
										style={{ borderTop: "none", backgroundColor: "#024752" }}>
										<MDBBtn outline color="white">
											SUBCRIBE
										</MDBBtn>
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

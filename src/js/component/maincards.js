import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";

export default class Maincards extends React.Component {
	render() {
		return (
			<MDBContainer>
				<div className="w-auto">
					<section className="text-center my-5">
						<h1 className="h1-responsive text-center my-5" style={{ color: "white" }}>
							WHY GROVER?
						</h1>
						<h2 className="white-text text-center w-responsive mx-auto mb-5">
							No contracts, commitments, or equipment rentals.
						</h2>
						<MDBRow>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>GREAT FREE MOVIES </h5>

											<ul className="striped mb-0">
												<li>
													<p>
														Grover constantly searching all over the web for the best
														torrents from the most important sites.
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
											<MDBBtn outline color="white">
												SUBCRIBE
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>NO RESTRICTIONS</h5>

											<ul className="striped mb-0">
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
														Watch any movie or TV show as many times as you want. All you
														need to get started is a proper internet connection
													</p>
												</li>
												<li>
													<p>Select quality and subtitles</p>
												</li>
											</ul>
											<MDBBtn outline color="white">
												SUBCRIBE
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>THE BEST QUALITY</h5>

											<ul className="striped mb-0">
												<li>
													<p>
														Watch your movie or episode instantly in HD and with subtitles.
														And then keep watching.
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
														If the movie or TV show is out there, Grover Time will find the
														best version possible and start streaming it right away.
													</p>
												</li>
											</ul>
											<MDBBtn outline color="white">
												Select Plan
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</section>
				</div>
			</MDBContainer>
		);
	}
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div
				id="jumbotron"
				className="card card-image"
				style={{
					backgroundImage:
						"url(http://images.pushsquare.com/69443f19f8f70/avengers-endgame-marvels-avengers-ps4-playstation-4.original.jpg)"
				}}>
				<div className="container d-flex h-100">
					<div className="row justify-content-center align-self-center">
						<div className="row">
							<div id="infojumbo" className=" col-6">
								<p>ALL EPISODES NOW STREAMING</p>
								<h1>Catch-22</h1>
								<h2>S1 E1 - Episode 1</h2>
								<h5>
									Young American flyers arrive in war and discover that the bureaucracy is more deadly
									than the enemy.
								</h5>
								<span>
									<Link to={"/search"}>
										<i className="text-white far fa-play-circle  fa-3x mr-3" />
									</Link>
									START WATCHING
								</span>
								<div
									className="user_score_chart"
									data-percent={70.0}
									data-track-color="#204529"
									data-bar-color="#21d07a">
									<div className="percent">
										<span className="icon icon-r70" />
									</div>
									<canvas height={60} width={60} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

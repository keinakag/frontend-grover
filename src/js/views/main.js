import React from "react";
import "../../styles/home.scss";
import Mainjumbo from "../component/mainjumbo";
import Maincards from "../component/maincards";
import CardsPng from "../component/cardsPng";
import Stickynab from "../component/stickynab";
import Footer from "../component/footer";

import "bootstrap/dist/css/bootstrap.min.css";

export class Main extends React.Component {
	render() {
		return (
			<div className="maindiv">
				<div>
					<Stickynab />
				</div>
				<div>
					<Mainjumbo />
				</div>
				<div>
					<Maincards />
				</div>
				<div>
					<CardsPng />
				</div>
				<hr className="rgba-white-light" style={{ margin: "0 0" }} />
				<div>
					<Footer />
				</div>
			</div>
		);
	}
}

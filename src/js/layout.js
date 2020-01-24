import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Main } from "./views/main";
import Registration from "./views/registration";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { Search } from "./views/search";
import { Text } from "./views/text";
import { Details } from "./views/details";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Main} />
							<Route exact path="/home" component={Home} />
							<Route path="/registration" component={Registration} />
							<Route path="/search" component={Search} />
							<Route path="/text" component={Text} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/details/:theindex" component={Details} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);

import React from "react";
import getState from "./flux.js";
import PropTypes from "prop-types";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch(process.env.HOST + "/person")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.users2 = data;
					this.setState({ store });
				});
			fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc", {
				headers: {
					"Content-type": "application/json",
					authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmVhZGY1YzUzMTNkMDgyNzI5OWI5NzY5NmYyODlhMCIsInN1YiI6IjVkZDQ0OTEwMzU2YTcxMDAxN2VkOGRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tPvMezqB7ee7kV42Z5Rqu1T0c7wWl5srBEtqzccI_DE"
				}
			})
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.moviesList = data.results;
					this.setState({ store });
				});

			// this.setState({ isModalOpen: false });
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here
			 **/
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;

import PropTypes from "prop-types";
import injectContext from "../store/appContext";
import React from "react";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			users2: [],
			users: [],
			login: [],
			logUser: null,
			movies: [],
			search: [],
			moviesList: []
		},
		actions: {
			searchMovie: searchInput => {
				fetch(
					"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
						searchInput +
						"&country=us",
					{
						method: "GET",
						mode: "cors",
						headers: {
							"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
							"x-rapidapi-key": "4b163e8de9msh34d173f43af6362p110f46jsn1eb3510fbb20"
						}
					}
				)
					.then(response => response.json())
					.then(data => setStore({ search: data.results }))
					.catch(err => {
						console.log(err);
					});
			},
			loginUser: (route, email, password) => {
				const store = getStore();
				let logUser = store.users2.find(item => {
					return item.email == email && item.password == password;
				});
				fetch("https://3000-b598d4a4-b550-4f48-9647-c68992f1dab2.ws-us02.gitpod.io/login", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(data => {
						setStore({ login: data, logUser: data.id });
					});

				if (store.login.jwt) {
					route.push("/home");
				} else if (store.login.msg == "Bad email or password") {
					alert("wrong email or password");
				} else if (
					store.login.msg == "Missing email parameter" ||
					store.login.msg == "Missing password parameter"
				) {
					alert("missing password or email");
				}
			},

			registerUser: (email, password, username, birthday, gender) => {
				fetch(process.env.HOST + "/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						birthday: birthday,
						email: email,
						gender: gender,
						password: password,
						username: username
					})
				});
			},

			logout: route => {
				setStore({ logUser: null });
				route.push("/");
			}
		}
	};
};
getState.propTypes = {
	history: PropTypes.object
};

export default getState;

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
			movies: [
				{
					id: 33297,
					title: "Sneaky Pete",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2015-08-07",
					imdb_id: "tt5011816",
					tvdb: 300166,
					themoviedb: 64199,
					freebase: null,
					wikipedia_id: 47942695,
					tvrage: {
						tvrage_id: null,
						link: null
					},
					artwork_208x117:
						"http://static-api.guidebox.com/111615/thumbnails_small/33297-2672223617-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/111615/thumbnails_medium/33297-513000256-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/111615/thumbnails_large/33297-7280233628-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/111615/thumbnails_xlarge/33297-3364854907-608x342-show-thumbnail.jpg"
				},
				{
					id: 24885,
					title: "The Man in the High Castle",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2015-01-15",
					imdb_id: "tt1740299",
					tvdb: 295829,
					themoviedb: 62017,
					freebase: null,
					wikipedia_id: 45111069,
					tvrage: {
						tvrage_id: 34577,
						link: "http://www.tvrage.com/shows/id-34577"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/120214/thumbnails_small/24885-1111294628-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/120214/thumbnails_medium/24885-3200115073-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/120214/thumbnails_large/24885-225090618-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/120214/thumbnails_xlarge/24885-2027612501-608x342-show-thumbnail.jpg"
				},
				{
					id: 19367,
					title: "Bosch",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2015-02-13",
					imdb_id: "tt3502248",
					tvdb: 277928,
					themoviedb: 60585,
					freebase: "/m/0_s4fhj",
					wikipedia_id: 41974768,
					tvrage: {
						tvrage_id: 36430,
						link: "http://www.tvrage.com/shows/id-36430"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/022615/thumbnails_small/19367-6216263687-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/022615/thumbnails_medium/19367-8667029398-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/022615/thumbnails_large/19367-7142098904-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/022615/thumbnails_xlarge/19367-862685997-608x342-show-thumbnail.jpg"
				},
				{
					id: 19586,
					title: "Mozart in the Jungle",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2014-02-06",
					imdb_id: "tt3502172",
					tvdb: 278335,
					themoviedb: 61744,
					freebase: "/m/0_fnbt4",
					wikipedia_id: 41705111,
					tvrage: {
						tvrage_id: 38225,
						link: "http://www.tvrage.com/shows/id-38225"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/120214/thumbnails_small/19586-6170841730-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/120214/thumbnails_medium/19586-1403662744-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/120214/thumbnails_large/19586-3807297805-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/120214/thumbnails_xlarge/19586-4552634181-608x342-show-thumbnail.jpg"
				},
				{
					id: 44612,
					title: "The Tick (2017)",
					alternate_titles: ["The Tick", "The Tick (2016)"],
					container_show: 0,
					first_aired: "2016-08-19",
					imdb_id: "tt5540054",
					tvdb: 317654,
					themoviedb: 67487,
					freebase: null,
					wikipedia_id: 52857075,
					tvrage: {
						tvrage_id: null,
						link: null
					},
					artwork_208x117:
						"http://static-api.guidebox.com/091716/thumbnails_small/44612-4045406375-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/091716/thumbnails_medium/44612-6168999374-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/091716/thumbnails_large/44612-9247200549-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/091716/thumbnails_xlarge/44612-5913224523-608x342-show-thumbnail.jpg"
				},
				{
					id: 20477,
					title: "Red Oaks",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2014-08-28",
					imdb_id: "tt3973820",
					tvdb: 284641,
					themoviedb: 63130,
					freebase: null,
					wikipedia_id: 44500428,
					tvrage: {
						tvrage_id: 41283,
						link: "http://www.tvrage.com/shows/id-41283"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/120214/thumbnails_small/20477-169775174-208x117-show-thumbnail.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/120214/thumbnails_medium/20477-8619605139-304x171-show-thumbnail.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/120214/thumbnails_large/20477-6368232029-448x252-show-thumbnail.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/120214/thumbnails_xlarge/20477-8261387320-608x342-show-thumbnail.jpg"
				},
				{
					id: 32653,
					title: "Catastrophe (2015)",
					alternate_titles: ["Catastrophe"],
					container_show: 0,
					first_aired: "2015-01-19",
					imdb_id: "tt4374208",
					tvdb: 289771,
					themoviedb: 61920,
					freebase: null,
					wikipedia_id: 45065093,
					tvrage: {
						tvrage_id: 42962,
						link: "http://www.tvrage.com/shows/id-42962"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/111615/thumbnails_small/32653-5715935579-208x117.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/111615/thumbnails_medium/32653-3031740319-304x171.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/111615/thumbnails_large/32653-7639916967-448x252.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/111615/thumbnails_xlarge/32653-113556982-608x342.jpg"
				},
				{
					id: 20476,
					title: "Hand Of God",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2014-08-28",
					imdb_id: "tt3973768",
					tvdb: 284643,
					themoviedb: 61263,
					freebase: null,
					wikipedia_id: 43704362,
					tvrage: {
						tvrage_id: 40531,
						link: "http://www.tvrage.com/shows/id-40531"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/091414/thumbnails_small/20476-9952534209-208x117.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/091414/thumbnails_medium/20476-9821232534-304x171.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/091414/thumbnails_large/20476-1389072496-448x252.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/091414/thumbnails_xlarge/20476-5869452446-608x342.jpg"
				},
				{
					id: 19557,
					title: "Transparent",
					alternate_titles: [],
					container_show: 0,
					first_aired: "2014-02-06",
					imdb_id: "tt3502262",
					tvdb: 278334,
					themoviedb: 61406,
					freebase: "/m/0_qfb20",
					wikipedia_id: 41919722,
					tvrage: {
						tvrage_id: 37044,
						link: "http://www.tvrage.com/shows/id-37044"
					},
					artwork_208x117:
						"http://static-api.guidebox.com/041014/thumbnails_small/19557-5767976544-208x117.jpg",
					artwork_304x171:
						"http://static-api.guidebox.com/041014/thumbnails_medium/19557-1172384168-304x171.jpg",
					artwork_448x252:
						"http://static-api.guidebox.com/041014/thumbnails_large/19557-9055926213-448x252.jpg",
					artwork_608x342:
						"http://static-api.guidebox.com/041014/thumbnails_xlarge/19557-3524096427-608x342.jpg"
				}
			]
		},
		actions: {
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

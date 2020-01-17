import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MDBContainer } from "mdbreact";
import "../../styles/demo.scss";
import Groverlogo from "../../img/groverlogo.png";
import PropTypes from "prop-types";
import withRouter from "react-router/withRouter";

class Stickynab extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div
								className="modal fade"
								id="exampleModal"
								tabIndex="-1"
								role="dialog"
								data-dismiss="modal"
								aria-labelledby="exampleModalLabel"
								data-backdrop="true"
								aria-hidden="true">
								<div className="modal-dialog" role="document">
									<div className="modal-content">
										<form className="text-center light-blue-text border border-light p-5">
											<p className="h4 mb-4 ">SIGN IN</p>

											<input
												type="email"
												id="FormEmail"
												className="form-control mb-4"
												placeholder="E-mail"
											/>

											<input
												type="password"
												id="FormPassword"
												className="form-control mb-4"
												placeholder="Password"
											/>
											<div className="d-flex justify-content-around">
												<div>
													<div className="custom-control custom-checkbox">
														<input
															type="checkbox"
															className="custom-control-input"
															id="defaultLoginFormRemember"
														/>
														<label
															className="custom-control-label"
															htmlFor="defaultLoginFormRemember">
															Remember me
														</label>
													</div>
												</div>
												<div>
													<a href>Forgot password?</a>
												</div>
											</div>

											<button
												type="button"
												className="btn btn-info btn-block my-4 "
												onClick={() => {
													actions.loginUser(
														this.props.history,
														document.querySelector("#FormEmail").value,
														document.querySelector("#FormPassword").value
													);
												}}>
												<strong>Sign in</strong>
											</button>

											<p>
												Not a member?
												<Link to={"/registration"}>
													<strong>Register</strong>
												</Link>
											</p>
											<p>or sign in with:</p>
											<a className="fb-ic mr-3 light-blue-text" role="button">
												<i className="fab fa-lg fa-facebook-f" />
											</a>
											<a className="tw-ic mr-3 light-blue-text" role="button">
												<i className="fab fa-lg fa-twitter" />
											</a>
											<a className="gplus-ic mr-3 light-blue-text" role="button">
												<i className="fab fa-lg fa-google-plus-g" />
											</a>
											<a className="ins-ic mr-3 light-blue-text" role="button">
												<i className="fab fa-lg fa-instagram" />
											</a>
										</form>
									</div>
								</div>
							</div>

							<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
								<p>
									<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
								</p>

								<a
									id="log"
									// className="navbar-text pull-right"
									data-toggle="modal"
									data-target="#exampleModal">
									<strong>LOG IN</strong>
								</a>
							</nav>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Stickynab.propTypes = {
	history: PropTypes.object
};
export default withRouter(Stickynab);

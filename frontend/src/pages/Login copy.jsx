import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";
const Login = () => {
	const { state, dispatch } = useContext(UserContext);
	const history = useHistory();
	const [values, setValues] = useState({
		userName: "",
		password: "",
	});
	const { userName, password } = values;
	const handleChange = (name) => (e) => {
		setValues({ ...values, [name]: e.target.value });
	};
	const handleSubmit = (e) => {
		localStorage.removeItem("user");
		e.preventDefault();
		setValues({ ...values, error: false });
		if (!userName || !password) {
			console.log("missing");
			// M.toast({html:"Empty Fields",classes:"#c62828 red darken-3"})
			return;
		}
		axios(
			`http://localhost:8084/api/hm/user/search/getAuthentication?userName=${userName}&password=${password}`
		)
			.then((data) => {
				console.log(data);
				localStorage.setItem("user", JSON.stringify(data.data));
				dispatch({ type: "USER", payload: data.data });
				// M.toast({html:"Signedin Success",classes:"#43a047 green darken-1"})
				history.push("/landing");
			})
			.catch((err) => {
				setValues({ ...values, error: true });
				// M.toast({html:"Invalid Credentials",classes:"#c62828 red darken-3"})
				console.log(err);
			});
	};
	return (
		<>
			<br />

			<nav aria-label="breadcrumb">
				<ol
					className="breadcrumb"
					style={{ padding: "13px", backgroundColor: "#074235" }}
				>
					<li className="breadcrumb-item text-light">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumb-item text-light active" aria-current="page">
						Login
					</li>
				</ol>
			</nav>

			<hr />
			<div className="container">
				<div
					className="card shadow  mb-5 bg-body rounded"
					style={{ width: "700px" }}
				>
					<h5
						className="card-header"
						style={{ backgroundColor: "#074235", color: "white" }}
					>
						Login
					</h5>
					<div className="card-body">
						<form type="post" className="form-floating">
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label">
									UserName{" "}
								</label>
								<input
									required
									placeholder="Enter username"
									onChange={handleChange("userName")}
									className="form-control"
								/>
								<div className="form-text">
									<font color="red" style={{ fontSize: "13px" }}></font>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									required
									type="password"
									placeholder="Enter Password"
									onChange={handleChange("password")}
									className="form-control"
								/>
								<div className="form-text">
									<font color="red" style={{ fontSize: "13px" }}></font>
								</div>
							</div>
							<button
								type="submit"
								className="btn btn-primary pull-right"
								onClick={(e) => handleSubmit(e)}
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;

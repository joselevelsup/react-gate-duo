import * as React from "react";
import { randomId } from "../utils";
import { GateProps } from "../types";

const SimpleGate = ({ localCredentials, authorized, inputClassName, children }: React.PropsWithChildren<GateProps>) => {

	const [ passThroughGate, setGatePass ] = React.useState<boolean>(false);
	const [ username, setUsername ] = React.useState<string>("");
	const [ password, setPassword ] = React.useState<string>("");

	const checkSession = (): boolean => {
		if(typeof localStorage == "undefined"){
			return false;
		} else {
			const sessionId = localStorage.getItem("sessionId");
			const sessionTime = localStorage.getItem("sessionTime"); //should come back as unix timestamp

			let d = new Date(sessionTime);
			let today = new Date();
			if(sessionId){
				if(d.getDay() - today.getDay() == 2 || d.getDay() - today.getDay() == -2) {
					return false;
				} else {
					return true;
				}
			} else {
				return false;
			}
		}
	}

	const loginUser = (event: any): void => {
    event.preventDefault();
		if(localCredentials){
			if(localCredentials.username == username && localCredentials.password == password){
				if(typeof localStorage != "undefined"){
					localStorage.setItem("sessionTime", Date.now().toString());
					localStorage.setItem("sessionId", randomId(6));
					setGatePass(true);
				}
			} else {
				alert("Wrong username and/or password");
			}
		}
	}

	if(checkSession() || passThroughGate || authorized){
		return <>{children}</>;
	} else {
		return (
			<form onSubmit={loginUser}>
				<div>
					<input className={inputClassName ? inputClassName : ""} placeholder="Username" name="username" type="text" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
				</div>
				<div>
					<input className={inputClassName ? inputClassName : ""} placeholder="Password" name="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		)
	}
}

export default SimpleGate;

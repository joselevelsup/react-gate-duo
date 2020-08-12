import * as React from "react";
import * as ReactDOM from "react-dom";

import SimpleGate from "../src";

ReactDOM.render(
	<SimpleGate localCredentials={{ username: "hello", password: "password" }}>
		<p>if you are seeing this, you made it</p>
	</SimpleGate>,
	document.getElementById("root")
)

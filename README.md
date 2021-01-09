# React Gate Duo

This project was very little based on [react-gate](https://www.npmjs.com/package/react-gate) . Aims to be simple.

### Install

```
npm install --save react-gate-duo
```


### Examples
```jsx 
import SimpleGate from "react-gate-duo";
// ...other imports here

// React Router Dom (with local credentials)
<Route path="/protected-route" render={props => (
	<SimpleGate localCredentials={{ username: "admin", password: "password" }}>
		<Component {...props} />	
	</SimpleGate>
)}>

// React Router Dom (with an authorization pass)
const isUserLoggedIn = () => {
	if(userSession && userLoggedInTime){
		return true;
	}

	return false;
}

<Route path="/protected-route" render={props => (
	<SimpleGate authorized={isUserLoggedIn()}>
		<Component {...props} />	
	</SimpleGate>
)}>
```

When using ``localCredentials`` prop, when logging in, `SimpleGate` sets a sessionId and sessionTime. The sessionId is generated randomly. The sessionTime is for a check to see if the visiting user has been to the site within the past 2 days. if not, the visiting user is redirected to a login form. Super simple and not styled. If so, the user is immediately passed to the child.


| Prop Name							 | Type																		 | Required?															 | Default |
|------------------------|-----------------------------------------|-----------------------------------------|---------|
| localCredentials			 | { username: string, password: string }  | If authorized prop not being used			 | none    |
| authorized						 | Function that returns a boolean				 | If localCredentials prop not being used | none		 |
| inputClassName				 | className for inputs										 | No																			 | none		 |


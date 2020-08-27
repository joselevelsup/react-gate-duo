import React, { useEffect, useState } from "react";
import { PermissionGateProps } from "../types";

const PermissionGate = ({ permissions, allowedRoles, children, }: React.PropsWithChildren<PermissionGateProps>) => {
	const [ permissionStates, setPermissionState ] = useState<{role: string, pass: boolean}[]>([]);

	useEffect(() => {
		permissions.forEach((p: { name: string, checker(): boolean }) => {
			setPermissionState([...permissionStates, { role: p.name, pass: p.checker() }]);
		})
	}, [])

/* allowed.forEach(a => { */
/* 	console.log(perms.find(p => p.name == a && p.pass)); */
/* }) */

	return (
		<>{children}</>
	);
}

export default PermissionGate;

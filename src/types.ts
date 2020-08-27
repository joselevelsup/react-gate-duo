export interface GateProps {
  localCredentials?: { username: string, password: string };
  authorized?: boolean | Function;
  inputClassName?: string;
}

export interface PermissionGateProps {
	permissions: {
		name: string,
		checker(): boolean
	}[],
	allowedRoles: string[]
	redirect: string
}

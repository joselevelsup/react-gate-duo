export interface GateProps {
  localCredentials?: { username: string, password: string };
  authorized?: boolean | Function;
  inputClassName?: string;
}

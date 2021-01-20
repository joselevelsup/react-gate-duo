import * as React from "react";
import { GateProps } from "./types";
declare function SimpleGate({ localCredentials, authorized, gateClasses, children }: React.PropsWithChildren<GateProps>): JSX.Element;
declare namespace SimpleGate {
    var defaultProps: {
        gateClasses: {
            formClassName: string;
            firstInputClassName: string;
            secondInputClassName: string;
            inputClassName: string;
            submitButtonClassName: string;
            submitButtonContainerClassName: string;
        };
    };
}
export default SimpleGate;

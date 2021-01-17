export interface GateProps {
    localCredentials?: {
        username: string;
        password: string;
    };
    authorized?: boolean | Function;
    gateClasses?: {
        inputClassName?: string;
        formClassName?: string;
        firstInputClassName?: string;
        secondInputClassName?: string;
        submitButtonContainerClassName?: string;
        submitButtonClassName?: string;
    };
}

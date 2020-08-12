"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var utils_1 = require("./utils");
exports.default = (function (_a) {
    var localCredentials = _a.localCredentials, authorized = _a.authorized, inputClassName = _a.inputClassName, children = _a.children;
    var _b = React.useState(false), passThroughGate = _b[0], setGatePass = _b[1];
    var _c = React.useState(""), username = _c[0], setUsername = _c[1];
    var _d = React.useState(""), password = _d[0], setPassword = _d[1];
    var checkSession = function () {
        if (typeof localStorage == "undefined") {
            return false;
        }
        else {
            var sessionId = localStorage.getItem("sessionId");
            var sessionTime = localStorage.getItem("sessionTime"); //should come back as unix timestamp
            var d = new Date(sessionTime);
            var today = new Date();
            if (sessionId) {
                if (d.getDay() - today.getDay() == 2 || d.getDay() - today.getDay() == -2) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    };
    var loginUser = function (event) {
        event.preventDefault();
        if (localCredentials) {
            if (localCredentials.username == username && localCredentials.password == password) {
                if (typeof localStorage != "undefined") {
                    localStorage.setItem("sessionTime", Date.now().toString());
                    localStorage.setItem("sessionId", utils_1.randomId(6));
                    setGatePass(true);
                }
            }
            else {
                alert("Wrong username and/or password");
            }
        }
    };
    if (checkSession() || passThroughGate || authorized) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return (React.createElement("form", { onSubmit: loginUser },
            React.createElement("div", null,
                React.createElement("input", { className: inputClassName ? inputClassName : "", placeholder: "Username", name: "username", type: "text", value: username, onChange: function (e) { return setUsername(e.target.value); } })),
            React.createElement("div", null,
                React.createElement("input", { className: inputClassName ? inputClassName : "", placeholder: "Password", name: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } })),
            React.createElement("div", null,
                React.createElement("button", { type: "submit" }, "Login"))));
    }
});

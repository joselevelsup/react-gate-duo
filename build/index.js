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
    var localCredentials = _a.localCredentials, authorized = _a.authorized, _b = _a.gateClasses, _c = _b.inputClassName, inputClassName = _c === void 0 ? "" : _c, _d = _b.formClassName, formClassName = _d === void 0 ? "" : _d, _e = _b.firstInputClassName, firstInputClassName = _e === void 0 ? "" : _e, _f = _b.secondInputClassName, secondInputClassName = _f === void 0 ? "" : _f, _g = _b.submitButtonContainerClassName, submitButtonContainerClassName = _g === void 0 ? "" : _g, _h = _b.submitButtonClassName, submitButtonClassName = _h === void 0 ? "" : _h, children = _a.children;
    var _j = React.useState(false), passThroughGate = _j[0], setGatePass = _j[1];
    var _k = React.useState(""), username = _k[0], setUsername = _k[1];
    var _l = React.useState(""), password = _l[0], setPassword = _l[1];
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
        return (React.createElement("form", { className: formClassName, onSubmit: loginUser },
            React.createElement("div", { className: firstInputClassName },
                React.createElement("input", { className: inputClassName, placeholder: "Username", name: "username", type: "text", value: username, onChange: function (e) { return setUsername(e.target.value); } })),
            React.createElement("div", { className: secondInputClassName },
                React.createElement("input", { className: inputClassName, placeholder: "Password", name: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } })),
            React.createElement("div", { className: submitButtonContainerClassName },
                React.createElement("button", { className: submitButtonClassName, type: "submit" }, "Login"))));
    }
});

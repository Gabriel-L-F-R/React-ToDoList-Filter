import {atom } from "recoil"

const loginState = atom({
    key: "loginState",
    default: {
        isLoggedIn: false,
        username: null
    }
});

export default loginState;
import Store from "../store";
import { http } from "./HttpService";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login(user) {
  return http()
    .post("/login", user)
    .then(res => {
      if (res) {
        const fakeToken = {
          token: "xxxxxxxx"
        };
        setToken(fakeToken);
      }
    });
}

export function register(user) {
  return http().post("/register", user);
}

function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
  Store.dispatch("authenticate");
}

export function getUsername() {
  return "david";
}

export function getUserId() {
  return 1;
}

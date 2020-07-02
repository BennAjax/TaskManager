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
        setToken(res.data.token);
      }
    });
}

export function register(user) {
  return http().post("/register", user);
}

function setToken(token) {
  localStorage.setItem("token", token);
  Store.dispatch("authenticate");
}

export function logout() {
  localStorage.clear();
  Store.dispatch("authenticate");
}
export function getUsername() {
  return "david";
}

export function getUserId() {
  return 1;
}

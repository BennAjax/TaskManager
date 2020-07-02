import jwt from "jsonwebtoken";
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

export function getToken() {
  localStorage.getItem('token')
}

export function getUsername() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.username
}

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.id
}

function decodeToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  return jwt.decode(token);
}




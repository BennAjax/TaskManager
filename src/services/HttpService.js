import axios from "axios";
import store from "../store";
import * as auth from "./AuthService";

export function http() {
  return axios.create({
    baseURL: store.state.apiURL,
    headers: {
      Authorization: auth.getToken()
    }
  });
}

import axios from "axios";
import { hideSpinner, showSpinner } from "../redux/spinnerDuck";
import store from '../redux/store'
// const ENV = () => "https://staging-gps-monitor.herokuapp.com/";
const ENV = () => "http://localhost:3000/";
// axios.defaults.timeout = 30000;

class ApiService {
  get(url, mapFunc = () => { }) {
    let headers = config();
    store.dispatch(showSpinner());

    return axios.get(ENV() + url, headers).then((response) => {
      store.dispatch(hideSpinner());
      return mapFunc(response);
    });
  }

  post(url, body, mapFunc, params = {}) {
    store.dispatch(showSpinner());

    return axios
      .post(ENV() + url, body, params)
      .then((response) => {
        store.dispatch(hideSpinner());
        return mapFunc(response);
      });
  }

  patch(url, body, mapFunc, params = {}) {
    store.dispatch(showSpinner());

    return axios
      .patch(ENV() + url, body, params)
      .then((response) => {
        store.dispatch(hideSpinner());
        return mapFunc(response);
      });
  }

  delete(url, params = {}) {
    store.dispatch(showSpinner());

    let headers = { ...params, ...config() };
    if (params.headers) {
      headers.headers = {
        ...headers.headers,
        ...params.headers,
      };
    }
    return axios.delete(ENV() + url, headers)
      .then(() => {
        store.dispatch(hideSpinner());
      });
  }
}

export default ApiService;

const config = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

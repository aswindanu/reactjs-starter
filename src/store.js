import createStore from "unistore";
import axios from "axios";
import { Host } from "./Host";

const initialState = {
  is_login: false,
  Bearer: "",

  // Flagr
  enabled: false,
};

export const store = createStore(initialState);
export const actions = store => ({
  postLogout: state => {
    store.setState({ is_login: false });
  },
  Login: async (state, username, password) => {
    const request = {
      method: "POST",
      url: Host + "/api/login",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
        store.setState({ Bearer: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  GetListUser: async state => {
    const request = {
      method: "GET",
      url: Host + "/api/unknown",
      headers: {
        Authorization: "Bearer " + store.getState().Bearer
      }
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  GetFlagr: async state => {
    const request = {
      method: "GET",
      url: Host + "/flags/1",
      // headers: {
      //   Authorization: "Bearer " + store.getState().Bearer
      // }
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
        store.setState({ enabled: response.data['enabled'] });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
});

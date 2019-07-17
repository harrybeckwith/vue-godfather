import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // Basically the `data` in your component but for the whole app.
  state: {
    current: 0,
    employeeData: [],
  },

  actions: {
    loadData({ commit }) {
      axios.get('/data/EmployeeData.json').then(response => {
        // console.log(response.data, this)
        commit('updateEmployeeData', response.data);
      });
    },
    activateLink: function(store, payload) {
      store.commit('activateLink', payload);
    },
  },
  // Basically `computed` values shared across components.
  getters: {},
  // Synchronous methods for modifying the values in the state.
  // They are handed a `state` from the store, and an optional `payload` value you pass in.
  mutations: {
    updateEmployeeData(state, employeeData) {
      state.employeeData = employeeData;
    },
    activateLink: function(state, payload) {
      // state.links.forEach(function(link) {
      //   link.active = false;
      // });
      // state.links[payload.index].active = true;
      // eslint-disable-next-line no-console
      state.current = payload.index;
    },
  },
  // Asynchronous methods that can call mutation methods to mutate the state via commits.
  // They are handed a context of the `store`, and an optional `payload` object you pass in.
});

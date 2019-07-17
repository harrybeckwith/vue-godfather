import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // Data for whole app
  state: {
    current: 0,
    employeeData: [],
    loading: true,
  },

  actions: {
    // get user data and store in state
    loadData({ commit }) {
      axios.get('/data/EmployeeData.json').then(response => {
        commit('updateEmployeeData', response.data);
        commit('changeLoadingState', false);
      });
    },
    nameClick: function(store, payload) {
      store.commit('nameClick', payload);
    },
    dataSlide: function(store, payload) {
      store.commit('dataSlide', payload);
    },
  },

  mutations: {
    updateEmployeeData(state, employeeData) {
      state.employeeData = employeeData;
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    nameClick: function(state, payload) {
      state.current = payload.index;
    },
    dataSlide: function(state, payload) {
      // eslint-disable-next-line no-console

      state.employeeData.employees[state.current].popularity = payload;
    },
  },
});

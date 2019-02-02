import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'FunnelCloud Contact Form',
    editIndex: null,
    contacts: [{
      fname: 'Walden',
      lname: 'Wang',
      email: 'wwalde@google.com',
      phone: '1234567890',
      department: 'IT',
      role: 'Developer'
    }, {
      fname: 'Walden',
      lname: 'Wang',
      email: 'wwalde@google.com',
      phone: '1234567890',
      department: 'IT',
      role: 'Developer'
    }]
  },
  getters,
  mutations,
  actions
});
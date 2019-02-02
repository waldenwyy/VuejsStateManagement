export default {
  countContacts: state => {
    return state.contacts.length;
  },

  getItem: state => {
    return state.contacts[state.itemIndex];
  }
};
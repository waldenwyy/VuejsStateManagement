export default {
  ADD_CONTACT: (state, contact) => {
    state.contacts.push(contact);
  },

  EDIT_CONTACT: (state, contact) => {
    state.contacts[state.itemIndex] = contact;
  },

  SET_ITEM_INDEX: (state, index) => {
    state.itemIndex = index;
  },

  REMOVE_CONTACT: (state, index) => {
    state.contacts.splice(index, 1);
  }
};
export default {
  ADD_CONTACT: (state, contact) => {
    state.contacts = [...state.contacts, contact]
  },

  EDIT_CONTACT: (state, contact) => {
    state.contacts[state.itemIndex] = contact;
  },

  SET_ITEM_INDEX: (state, index) => {
    state.itemIndex = index;
  },

  REMOVE_CONTACT: (state, index) => {
    state.contacts = state.contacts.filter((contact, contactIndex) => contactIndex !== index);
  }
};
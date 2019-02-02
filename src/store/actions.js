export default {
  addContact: (context, contact) => {
    context.commit('ADD_CONTACT', contact);
  },

  editContact: (context, contact) => {
    context.commit('EDIT_CONTACT', contact);
  },

  removeContact: (context, index) => {
    context.commit('REMOVE_CONTACT', index);
  },

  setItemIndex: (context, index) => {
    context.commit('SET_ITEM_INDEX', index);
  }
};
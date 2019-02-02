import {
  expect
} from 'chai';
import mutations from '@/store/mutations';

const state = {
  itemIndex: null,
  contacts: [{
    fname: 'test',
    lname: 'test',
    email: 'test@test.com',
    phone: '6471234561',
    department: 'IT',
    role: 'IT'
  }]
};

const addContact = {
  fname: 'fname',
  lname: 'lname',
  email: 'test@example.com',
  phone: '6471234567',
  department: 'IT',
  role: 'IT'
};

const editContact = {
  fname: 'test3',
  lname: 'test3',
  email: 'test@test.com',
  phone: '6471234561',
  department: 'IT',
  role: 'IT'
};

describe('Mutations', () => {
  it('Add a contact', () => {
    mutations.ADD_CONTACT(state, addContact);
    expect(state.contacts).to.deep.include(addContact);
  });

  it('Edit a contact', () => {
    state.itemIndex = 1;

    mutations.EDIT_CONTACT(state, editContact);
    expect(state.contacts[state.itemIndex]).to.equal(editContact);
  });

  it('Edit an item index', () =>{
    const index = 0;

    mutations.SET_ITEM_INDEX(state, index);
    expect(state.itemIndex).to.equal(index);
  });

  it('Remove a contact', () => {
    const contactsLength = state.contacts.length;
    const index = 0;

    mutations.REMOVE_CONTACT(state, index);
    expect(state.contacts.length).to.equal(contactsLength-1);
    expect(state.contacts[index]).to.equal(editContact);
  });
});
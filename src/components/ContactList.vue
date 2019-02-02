<template>
  <div class="contact-form">
    <h1>{{ title }}</h1>
    <p>There are currently {{ countContacts }} Contacts</p>

    <table v-if="countContacts>0">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>

      <tr v-for="(contact, index) in contacts" v-bind:key="index">
        <td>{{ contact.fname }} {{ contact.lname }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.phone }}</td>
        <td>
          <div class="button-group">
            <router-link
              v-on:click.native="setItemIndexUse(index)"
              class="detail"
              to="/detail"
            >Detail</router-link>
            <router-link
              v-on:click.native="setItemIndexUse(index)"
              class="router-edit"
              to="/edit"
            >Edit</router-link>
            <button v-on:click="remove(index)" class="rm">REMOVE</button>
          </div>
        </td>
      </tr>
    </table>

    <router-link class="router-create" to="/create">ADD NEW</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ContactList",
  dagta() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["title", "contacts"]),
    ...mapGetters(["countContacts"])
  },
  methods: {
    remove: function(contact) {
      this.$store.dispatch("removeContact", contact);
    },
    setItemIndexUse: function(index) {
      this.$store.dispatch("setItemIndex", index);
    }
  }
};
</script>

<style>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

h1 {
  text-align: center;
}

.contact-form {
  padding: 30px;
  margin: 0 auto;
  width: 50%;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.button-group {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
}
.rm {
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
.router-edit {
  background: #dff9d0;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
}
.detail {
  background: #9ac1f5;
  border: none;
  padding: 5px;
  color: #006eff;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
}

.router-create {
  width: 100px;
  box-shadow: none;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #a5d7e1;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  text-decoration: none;
  margin-right: 40px;
  float: right;
}

table {
  background: #fff;
  margin: 1em 0;
  padding: 1em;
}

table tr td {
  padding: 1em;
}
</style>

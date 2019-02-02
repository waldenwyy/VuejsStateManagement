<template>
  <div class="form">
    <h1>{{ userData.title }}</h1>
    <form @submit.prevent="submit">
      <input
        class="contact-input"
        type="text"
        placeholder="Add a First Name"
        v-model.lazy.trim="userData.form.fname"
        required
        :disabled="userData.disabled"
      >
      <input
        class="contact-input"
        type="text"
        placeholder="Add a Last Name"
        v-model.lazy.trim="userData.form.lname"
        required
        :disabled="userData.disabled"
      >
      <input
        class="contact-input"
        type="email"
        id="email"
        placeholder="Add an Email"
        v-model.lazy.trim="userData.form.email"
        required
        :disabled="userData.disabled"
      >
      <input
        class="contact-input"
        type="tel"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        placeholder="Add an Phone Number"
        v-model.lazy.trim="userData.form.phone"
        required
        :disabled="userData.disabled"
      >
      <div class="select">
        <label for="newDep">Department:</label>
        <select v-model="userData.form.department" required :disabled="userData.disabled">
          <option v-for="(department, index) in departments" v-bind:key="index">{{ department }}</option>
        </select>
      </div>

      <input
        class="contact-input"
        type="text"
        placeholder="Add a Role"
        v-model.lazy.trim="userData.form.role"
        required
        :disabled="userData.disabled"
      >
      <div>
        <router-link class="router-home" to="/">Home</router-link>
        <input class="form-submit" type="submit" :value="userData.submit">
      </div>
    </form>
    <p>{{ msg }}</p>
  </div>
</template>

<script>

export default {
  name: "Form",
  data() {
    return {
      msg: "",
      index: "",
      departments: ["IT", "finance", "development", "account"]
    };
  },
  props: {
    userData: Object
  },
  computed: {},
  methods: {
    submit: function() {
      if (this.$route.name == "create") {
        this.$store.dispatch("addContact", this.userData.form);
        this.$router.push({ name: "home" });
      } else if (this.$route.name == "edit") {
        this.$store.dispatch("editContact", this.userData.form);
        this.$store.dispatch("setItemIndex", null);
        this.$router.push({ name: "home" });
      } else if (this.$route.name == "detail") {
        this.$router.push({ name: "edit" });
      }
    }
  }
};
</script>

<style scoped>
.form {
  padding: 30px;
  margin: 0 auto;
  width: 50%;
  background-color: #e9e9e9;
}
.select {
  float: left;
  margin-left: 70px;
}
button {
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 10px;
  width: 200px;
  outline: 0;
  cursor: pointer;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
}
input {
  border: none;
  padding: 10px;
  width: calc(100% - 140px);
  -webkit-box-shadow: 0 5px 5px lightgrey;
  box-shadow: 0 5px 5px lightgrey;
  outline: none;
  display: inline-block;
  margin: 20px auto;
}
label {
  display: block;
  margin-bottom: 10px;
}
select {
  border: none;
  padding: 20px;
  width: 200px;
  height: 30px;
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 30px;
  outline: none;
}
.form-submit {
  max-width: 100px;
  box-shadow: none;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  text-decoration: none;
  display: inline;
}
.router-home {
  box-shadow: none;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #e0f3f7;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  text-decoration: none;
  display: inline;
  margin-right: 40px;
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
</style>

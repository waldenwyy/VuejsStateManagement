<template>
  <div class="edit">
    <Form :userData="editViewData"/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import ContactFormModel from "../model.js";
import { mapGetters } from "vuex";

export default {
  name: "Edit",
  data: function() {
    return {
      editViewData: {
        title: "Edit Contact",
        disabled: false,
        submit: "Save",
        form: new ContactFormModel()
      }
    };
  },
  components: {
    Form
  },
  computed: {
    ...mapGetters(["getItem"])
  },
  methods: {
    editContact: function(contact) {
      this.$store.dispatch("editContact", contact);
    }
  },
  created() {
    if (this.getItem) {
      this.editViewData.form = Object.assign({}, this.getItem);
    } else {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

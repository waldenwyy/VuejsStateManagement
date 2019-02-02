<template>
  <div class="create">
    <Form :userData="createViewData"/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import ContactFormModel from "../model.js";

export default {
  name: "Create",
  data: function() {
    return {
      createViewData: {
        title: "Create a New Contact",
        disabled: false,
        submit: "Create",
        form: new ContactFormModel()
      }
    };
  },
  components: {
    Form
  }
};
</script>

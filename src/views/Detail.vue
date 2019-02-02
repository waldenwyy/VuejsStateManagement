<template>
  <div class="detail">
    <Form :userData="detailViewData"/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import ContactFormModel from "../model.js";
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  data: function() {
    return {
      detailViewData: {
        title: "Contact Detail",
        disabled: true,
        submit: "Edit",
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
  methods: {},
  created() {
    if (this.getItem) {
      this.detailViewData.form = Object.assign({}, this.getItem);
    } else {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

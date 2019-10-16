<template>
  <div>
    <!-- <b-button @click="onClickAddCustomer">Add Customer</b-button>
    <b-button>Save</b-button>-->
    <TestForm />
  </div>
</template>

<script>
import TestForm from "./TestForm.vue";
export default {
  components: {
    TestForm
  },
  methods: {
    onClickAddCustomer() {
      this.$router.push({ path: "/CustomerForm" });
    }
  }
};
</script>
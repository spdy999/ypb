<template>
  <div>
    <!-- <b-button @click="onClickAddCustomer">Add Customer</b-button>
    <b-button>Save</b-button>-->
    <!-- <TestForm /> -->
    <CustomerForm />
  </div>
</template>

<script>
// import TestForm from "./TestForm.vue";
import CustomerForm from "./CustomerForm.vue";
export default {
  components: {
    // TestForm,
    CustomerForm
  },
  methods: {
    onClickAddCustomer() {
      this.$router.push({ path: "/CustomerForm" });
    }
  }
};
</script>
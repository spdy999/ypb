<template>
  <div>
    <b-button>Add Customer</b-button>
    <b-button>Save</b-button>
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from "./CustomerForm";

export default {
  components: {
    CustomerForm
  }
  // methods: {
  //   onClickAddCustomer() {}
  // }
};
</script>
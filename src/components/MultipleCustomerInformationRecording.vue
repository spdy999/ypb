<template>
  <div>
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from "./CustomerForm.vue";
export default {
  components: {
    CustomerForm
  },
  methods: {
    onClickAddCustomer() {
      this.$router.push({ path: "/CustomerForm" });
    }
  }
};
</script>
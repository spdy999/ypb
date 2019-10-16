<template>
  <div>
    <b-button @click="onClickAddCustomer">Add Customer</b-button>
    <b-button>Save</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickAddCustomer() {
      this.$router.push({ path: "/CustomerForm" });
    }
  }
};
</script>
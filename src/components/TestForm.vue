<template>
  <form id="app" data-customers="initial">
    <div v-for="(customer, index) in customers" :key="index">
      <div>
        <div class="form-group col-xs-5">
          <label>Name</label>
          <input
            v-model="customer.name"
            name="customers[][name]"
            class="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group col-xs-5">
          <label>Email</label>
          <input
            v-model="customer.email"
            type="email"
            name="customers[][email]"
            class="form-control"
            placeholder="Email"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2">
        <button
          type="button"
          v-on:click="addCustomer"
          class="btn btn-block btn-success"
        >Add Customer</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2">
        <button type="submit" v-on:click.prevent="sumbitForm" class="btn btn-block btn-primary">Save</button>
      </div>
    </div>
    <hr />
    <pre>{{ $data }}</pre>
  </form>
</template>

<script>
export default {
  data() {
    return {
      initial: [
        { name: "Name", email: "email@mail.com" }
        // { name: "42000", email: "32" }
      ],
      customer: {
        name: "",
        email: ""
      },
      customers: []
    };
  },
  mounted() {
    this.customers = this.initial;
  },
  methods: {
    addCustomer() {
      this.customers.push(this.customer);
    },
    removeApartment() {
      // removeApartment(index) {
      // Vue.delete(this.customers, index);
    },
    sumbitForm() {
      console.info("<< Form Submitted >>");
      console.info("Vue.js customers object:", this.customers);
    }
  }
};
</script>
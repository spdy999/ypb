<template>
  <div>
    <b-form @submit="onSubmit" data-customers="initial">
      <div v-for="(customer, index) in customers" :key="index">
        <b-form-group id="input-group-2" label="Name:" label-for="input-2" required>
          <b-form-input id="input-2" v-model="customer.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Email " label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="customer.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Form-checkbox-group stacked checkboxes">
          <b-form-checkbox-group
            v-model="customer.selected"
            :options="options"
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <hr />
      </div>

      <div class="row">
        <div class="col-xs-2">
          <b-button
            type="button"
            v-on:click="addCustomer"
            class="btn btn-block btn-success"
          >Add Customer</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <b-button
            type="submit"
            v-on:click.prevent="onSubmit"
            class="btn btn-block btn-primary"
          >Save</b-button>
        </div>
      </div>
      <hr />
    </b-form>
    <pre>{{ customers }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initial: [{ name: "", email: "" }],
      customer: {
        name: "",
        email: "",
        selected: [] // Must be an array reference!
      },
      customers: [],
      options: [
        { text: "Apple Juice", value: "Apple Juice" },
        { text: "Orange Juice", value: "Orange Juice" },
        { text: "Watermelon Juice", value: "Watermelon Juice" }
      ]
    };
  },
  mounted() {
    this.customers = this.initial;
  },
  methods: {
    addCustomer() {
      this.customers.push(this.customer);
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log("submit");
    }
  }
};
</script>
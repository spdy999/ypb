<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" data-customers="initial">
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
            v-model="customer.favouriteJuice"
            :options="options"
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        <hr />
      </div>
      <b-button type="submit" variant="primary">Save</b-button>
      <b-button v-on:click="addCustomer" variant="danger">Add Customer</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ customers }}</pre>
    </b-card>
    <ResultModal />
  </div>
</template>

<script>
import ResultModal from "./ResultModal";
export default {
  components: {
    ResultModal
  },
  data() {
    return {
      initial: [
        {
          email: "",
          name: "",
          favouriteJuice: []
        }
      ],
      customer: {
        email: "",
        name: "",
        favouriteJuice: []
      },

      options: [
        { text: "Apple Juice", value: "Apple Juice" },
        { text: "Orange Juice", value: "Orange Juice" },
        { text: "Watermelon Juice", value: "Watermelon Juice" }
      ],
      show: true,
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
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.customer));

      this.$bvModal.show("modal-1");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
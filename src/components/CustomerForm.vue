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

        <b-form-group label="Favourite Juice">
          <b-form-checkbox-group
            v-model="customer.favouriteJuice"
            :options="options"
            :state="state[index]"
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
          <b-form-invalid-feedback :state="state[index]">Please select at least one juice</b-form-invalid-feedback>
        </b-form-group>
        <hr />
      </div>
      <b-button v-on:click="addCustomer" variant="primary">Add Customer</b-button>
      <b-button type="submit" variant="success">Save</b-button>
    </b-form>

    <b-modal id="modal-1" title="Added Customers" ref="modal" hide-footer>
      <pre class="my-4">{{JSON.stringify(customers, null, 2)}}</pre>

      <b-button class="mt-3" variant="outline-danger" block @click="onReset">Close</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
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

  computed: {
    state() {
      const validate = this.customers.map(
        customer => customer.favouriteJuice.length >= 1
      );

      return validate;
    }
  },

  mounted() {
    this.customers = this.initial;
  },
  methods: {
    addCustomer() {
      this.customer = {
        email: "",
        name: "",
        favouriteJuice: []
      };
      this.customers.push(this.customer);
    },
    checkState(state) {
      return state.every(v => v === true);
    },
    onSubmit(evt) {
      evt.preventDefault();
      if (this.checkState(this.state)) {
        this.$bvModal.show("modal-1");
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.customers = [
        {
          email: "",
          name: "",
          favouriteJuice: []
        }
      ];

      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
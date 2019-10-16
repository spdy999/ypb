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
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        <hr />
      </div>
      <b-button v-on:click="addCustomer" variant="primary">Add Customer</b-button>
      <b-button type="submit" variant="success">Save</b-button>
    </b-form>

    <b-modal id="modal-1" title="Added Customers" @ok="onReset" ref="modal">
      <p class="my-4">{{customers}}</p>
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
  mounted() {
    this.customers = this.initial;
  },
  methods: {
    addCustomer() {
      this.customers.push(this.customer);
    },
    onSubmit(evt) {
      evt.preventDefault();

      this.$bvModal.show("modal-1");
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
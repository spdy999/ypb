<template>
  <form id="app" data-apartments="initial">
    <h1>Dynamic apartment forms</h1>
    <hr />
    <div class="row">
      <div class="col-xs-2">
        <button type="button" v-on:click="addNewApartment" class="btn btn-block btn-success">Add +</button>
      </div>
      <div class="col-xs-10">Would you like add more apartments?</div>
    </div>
    <div v-for="(apartment, index) in apartments" :key="index">
      <div class="row">
        <div class="col-xs-2">
          <label>&nbsp;</label>
          <button
            type="button"
            v-on:click="removeApartment(index)"
            class="btn btn-block btn-danger"
          >Rem -</button>
        </div>
        <div class="form-group col-xs-5">
          <label>Price (HUF)</label>
          <input
            v-model="apartment.price"
            type="number"
            name="apartments[][price]"
            class="form-control"
            placeholder="Price"
          />
        </div>
        <div class="form-group col-xs-5">
          <label>Rooms (PCS)</label>
          <input
            v-model="apartment.rooms"
            type="number"
            name="apartments[][rooms]"
            class="form-control"
            placeholder="Rooms"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2">
        <button
          type="submit"
          v-on:click.prevent="sumbitForm"
          class="btn btn-block btn-primary"
        >Submit</button>
      </div>
      <div class="col-xs-10">Open the console (F12) and see the result</div>
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
        { price: "23000", rooms: "12" },
        { price: "42000", rooms: "32" }
      ],
      apartment: {
        price: "",
        rooms: ""
      },
      apartments: []
    };
  },
  mounted() {
    /*
     * The "data-apartments" could come from serverside (already saved apartments)
     */
    // this.apartments = JSON.parse(this.$el.dataset.apartments);
    this.apartments = this.initial;
  },
  methods: {
    addNewApartment() {
      this.apartments.push(this.apartment);
    },
    removeApartment() {
      // removeApartment(index) {
      // Vue.delete(this.apartments, index);
    },
    sumbitForm() {
      /*
       * You can remove or replace the "submitForm" method.
       * Remove: if you handle form sumission on server side.
       * Replace: for example you need an AJAX submission.
       */
      console.info("<< Form Submitted >>");
      console.info("Vue.js apartments object:", this.apartments);
      window.testSumbit();
    }
  }
};
</script>
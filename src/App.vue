<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          {{ message }}
          <v-card class="elevation-12">
            <v-btn
              v-for="label in button_label_list"
              v-bind:key="label.id"
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray(label)"
              v-bind:disabled="num_button_disable"
              >{{ label }}</v-btn
            >
            <v-btn
              color="accent"
              elevation="2"
              height="100"
              width="100"
              v-bind:disabled="submit_button_disable"
              >submit</v-btn
            >
            <v-btn color="accent" elevation="2" height="100" width="100"
              >clear</v-btn
            >
            <v-btn color="accent" elevation="2" height="100" width="100"
              >give up</v-btn
            >
            <v-btn color="accent" elevation="2" height="100" width="100"
              >reset</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {},

  data: () => ({
    estimate_array: [],
    limit_of_num: 5,
    button_label_list: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ],
    num_button_disable: false,
  }),

  computed: {
    message: function () {
      return this.estimate_array;
    },

    submit_button_disable: function () {
      return this.estimate_array.length < this.limit_of_num;
    },
  },

  methods: {
    addNumToEstimateArray: function (num) {
      if (this.estimate_array.length + 1 > this.limit_of_num) {
        alert("over length. please submit or clear");
        return;
      }
      this.estimate_array.push(num);
    },
  },
};
</script>

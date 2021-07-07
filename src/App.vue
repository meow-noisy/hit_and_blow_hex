<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          {{ message }}
          <v-card class="elevation-12">
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('0')"
              >0</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('1')"
              >1</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('2')"
              >2</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('3')"
              >3</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('4')"
              >4</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('5')"
              >5</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('6')"
              >6</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('7')"
              >7</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('8')"
              >8</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('9')"
              >9</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('A')"
              >A</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('B')"
              >B</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('C')"
              >C</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('D')"
              >D</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('E')"
              >E</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('F')"
              >F</v-btn
            >
            <v-btn color="accent" elevation="2" height="100" width="100"
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
  }),

  computed: {
    message: function () {
      return this.estimate_array;
    },
  },

  methods: {
    addNumToEstimateArray: function (num) {
      this.estimate_array.push(num);
    },
  },
};
</script>

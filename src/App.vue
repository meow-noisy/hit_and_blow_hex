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
              :disabled="num_button_disable"
              >0</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('1')"
              :disabled="num_button_disable"
              >1</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('2')"
              :disabled="num_button_disable"
              >2</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('3')"
              :disabled="num_button_disable"
              >3</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('4')"
              :disabled="num_button_disable"
              >4</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('5')"
              :disabled="num_button_disable"
              >5</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('6')"
              :disabled="num_button_disable"
              >6</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('7')"
              :disabled="num_button_disable"
              >7</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('8')"
              :disabled="num_button_disable"
              >8</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('9')"
              :disabled="num_button_disable"
              >9</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('A')"
              :disabled="num_button_disable"
              >A</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('B')"
              :disabled="num_button_disable"
              >B</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('C')"
              :disabled="num_button_disable"
              >C</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('D')"
              :disabled="num_button_disable"
              >D</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('E')"
              :disabled="num_button_disable"
              >E</v-btn
            >
            <v-btn
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray('F')"
              :disabled="num_button_disable"
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
    num_button_disable: false,
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

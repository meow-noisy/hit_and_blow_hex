<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          {{ message }} {{ answer_array }} {{ hit }} {{ blow }}
          <v-card class="elevation-12">
            <v-btn
              v-for="(label, index) in button_label_list"
              v-bind:key="index"
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray(label)"
              v-bind:disabled="numButtonDisable(label, index)"
              >{{ label }}</v-btn
            >
            <v-btn
              color="accent"
              elevation="2"
              height="100"
              width="100"
              v-bind:disabled="submit_button_disable"
              v-on:click="count_num_of_hit_and_blow()"
              >submit</v-btn
            >
            <v-btn
              color="accent"
              elevation="2"
              height="100"
              width="100"
              v-on:click="clearEstimateArrayElements()"
              >clear</v-btn
            >
            <v-btn color="accent" elevation="2" height="100" width="100"
              >give up</v-btn
            >
            <v-btn
              color="accent"
              elevation="2"
              height="100"
              width="100"
              v-on:click="setAnswerNumberGenerator()"
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
    answer_array: [],
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
    hit: 0,
    blow: 0,
  }),

  created: function () {
    this.setAnswerNumberGenerator();
  },

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
    clearEstimateArrayElements: function () {
      this.estimate_array.splice(0);
    },
    setAnswerNumberGenerator: function () {
      // copy
      let button_label_list_copy = this.button_label_list.concat();
      // Shuffle array
      let shuffled = button_label_list_copy.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, this.limit_of_num);

      this.answer_array = selected;
    },

    numButtonDisable: function (label, index) {
      console.log(index);
      return this.estimate_array.includes(label);
    },

    count_num_of_hit_and_blow: function () {
      let hit = 0;
      let blow = 0;

      for (let i = 0, len = this.estimate_array.length; i < len; ++i) {
        if (this.estimate_array[i] === this.answer_array[i]) {
          ++hit;
        }

        if (this.answer_array.includes(this.estimate_array[i])) {
          ++blow;
        }
      }
      this.hit = hit;
      this.blow = blow;

      this.clearEstimateArrayElements();
    },
  },
};
</script>

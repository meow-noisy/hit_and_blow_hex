<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm7 md7>
          <v-card class="elevation-0">
            {{ message }}<br />
            {{ current_predict }}
          </v-card>
          <v-card class="elevation-12">
            <v-btn
              v-for="(label, index) in button_label_list"
              v-bind:key="index"
              color="primary"
              elevation="2"
              height="100"
              width="100"
              v-on:click="addNumToEstimateArray(label)"
              v-bind:disabled="numButtonDisable(label)"
              >{{ label }}</v-btn
            >
          </v-card>

          <v-card class="elevation-12">
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
              v-bind:disabled="clear_disabled"
              >clear</v-btn
            >

            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  elevation="2"
                  height="100"
                  width="100"
                  v-bind="attrs"
                  v-on="on"
                  v-bind:disabled="giveup_disabled"
                  >give up</v-btn
                >
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Really give up?
                </v-card-title>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn rounded elevation="2" text @click="dialog = false">
                    No.
                  </v-btn>

                  <v-btn
                    rounded
                    elevation="2"
                    color="accent"
                    @click="dialog = false"
                    v-on:click="goGaveOverState()"
                  >
                    Yes, I give up.
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn
              color="red"
              class="white--text"
              elevation="2"
              height="100"
              width="100"
              v-show="show"
              v-on:click="retryGame()"
              >retry
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 md4>
          <v-card class="elevation-12">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="text-left">submit num</th>
                  <th class="text-left">predict num</th>
                  <th class="text-left">hit</th>
                  <th class="text-left">blow</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(record, index) in predict_history" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ record.predict }}</td>
                  <td>{{ record.hit }}</td>
                  <td>{{ record.blow }}</td>
                </tr>
              </tbody></v-simple-table
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
    predict_history: [],
    message: "",
    dialog: false,
    gameover_state: false,
  }),

  created: function () {
    this.setAnswerNumberGenerator();
  },

  computed: {
    current_predict: function () {
      if (this.estimate_array.length === 0) {
        return `Predict ${this.limit_of_num} digit number. Press buttons.`;
      }
      return this.estimate_array.join(" ");
    },

    submit_button_disable: function () {
      if (this.gameover_state == true) {
        return true;
      }
      return this.estimate_array.length < this.limit_of_num;
    },

    clear_disabled: function () {
      if (this.gameover_state == true) {
        return true;
      } else {
        return false;
      }
    },

    giveup_disabled: function () {
      if (this.gameover_state == true) {
        return true;
      } else {
        return false;
      }
    },

    show: function () {
      if (this.gameover_state == true) {
        return true;
      } else {
        return false;
      }
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
      let button_label_list_copy = this.button_label_list.slice();
      // Shuffle array
      let shuffled = button_label_list_copy.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, this.limit_of_num);

      this.answer_array = selected;

      this.predict_history.splice(0);
    },

    numButtonDisable: function (label) {
      if (this.gameover_state == true) {
        return true;
      }
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

      this.predict_history.push({
        predict: this.current_predict,
        hit: hit,
        blow: blow,
      });

      if (hit === this.limit_of_num) {
        this.goGameClearState();
      } else {
        this.clearEstimateArrayElements();
      }
    },
    goGaveOverState: function () {
      this.gameover_state = true;
      this.estimate_array = [];
      this.message = `Answer is "${this.answer_array.join(" ")}"`;
    },
    goGameClearState: function () {
      this.gameover_state = true;
      this.message = "Congratulations !";
    },
    retryGame: function () {
      this.setAnswerNumberGenerator();
      this.gameover_state = false;
      this.estimate_array = [];
      this.predict_history = [];
      this.message = "";
      this.hit = 0;
      this.blow = 0;
    },
  },
};
</script>

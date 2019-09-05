<template>
  <v-row justify="center">
    <!-- <v-btn class="success" dark @click.stop="dialog = true">Open dialog</v-btn> -->
    <!-- use attribute 'persistent' to make the dialog stay -->
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on" @click="resetForm"
          >Open dialog</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline">Add a New Project</v-card-title>
        <v-card-text class="pb-0">
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12" class="pb-0">
                  <v-text-field
                    label="Title"
                    v-model="title"
                    prepend-icon="folder"
                    required
                    hint="Please enter a title here"
                    :rules="titleRules"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" class="pb-0">
                  <v-text-field
                    label="Name"
                    v-model="name"
                    prepend-icon="person"
                    required
                    hint="Please enter a name here"
                    :rules="titleRules"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" class="pb-0">
                  <v-textarea
                    v-model="content"
                    label="Information"
                    prepend-icon="edit"
                  ></v-textarea>
                </v-col>

                <v-col col="12" sm="4" class="pb-0 ml-auto">
                  <v-select
                    class="my-2 pt-0"
                    :items="statusDropdown"
                    label="Status"
                    @change="changeStatus"
                    :rules="dropdownRules"
                  ></v-select>
                </v-col>

                <v-col cols="12" class="pb-0 py-0">
                  <v-menu
                    :close-on-content-click="true"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="computedDateFormattedMomentjs"
                        label="Pick a date"
                        prepend-icon="event"
                        readonly
                        clearable
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-6 mb-5 mt-0 success"
            text
            @click="submit"
            :loading="loading"
            >Add project</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from "moment";
import db from "@/fb";

export default {
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    title: "",
    content: "",
    name: "",
    status: "",
    statusDropdown: [
      { text: "ongoing" },
      { text: "done" },
      { text: "overdue" }
    ],
    titleRules: [v => v.length >= 3 || "Mininum length is 3 characters"],
    dropdownRules: [v => v || "Select status"],
    loading: false
  }),
  methods: {
    resetForm() {
      if (this.$refs.form) {
        this.$refs.form.reset();
      }
    },
    changeStatus(v) {
      this.status = v;
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.date).format("Do MMM YYYY"),
          person: "momo",
          status: "ongoing"
        };
        db.collection("vuetify-todo")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          });
      }
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("Do MMM YYYY") : "";
    }
  }
};
</script>

<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Students</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="(student, index) in $store.getters.students"
          :to="'editStudent/' + index"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="student.fullName"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      students: this.$store.state.students,
    };
  },
  computed: mapState({
    students: () => state.students,
  }),
  async created() {},
};
</script>

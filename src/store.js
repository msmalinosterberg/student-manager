import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
  },
  getters: {
    students: (state) =>
      state.students.map((s) => ({
        ...s,
        fullName: s.firstName + " " + s.lastName,
      })),
  },
});

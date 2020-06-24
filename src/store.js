import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getPatients: () => {
      return [
        {
          id: "1",
          firstName: "משה",
          lastName: "כהן",
          phoneNumber: "05456233",
          cellphoneNumber: "0545676382",
          city: "מכמש",
          street: "תרשיש",
          houseNumber: "5\r"
        },
        {
          id: "3",
          firstName: "דוד",
          lastName: "כהן",
          phoneNumber: "05456233",
          cellphoneNumber: "0545674582",
          city: "מכמש",
          street: "תרשיש",
          houseNumber: "6\r"
        },
        {
          id: "5",
          firstName: "שלמה",
          lastName: "בלנגה",
          phoneNumber: "05452343",
          cellphoneNumber: "",
          city: "ירושלים",
          street: "המרפא",
          houseNumber: "6\r"
        }
      ];
    }
  }
});

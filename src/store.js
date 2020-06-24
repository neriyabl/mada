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
          city: "מצפה יריחו",
          street: "תרשיש",
          houseNumber: "5",
          status: "נקבע תור",
          turnDate: new Date()
        },
        {
          id: "3",
          firstName: "דוד",
          lastName: "כהן",
          phoneNumber: "05456233",
          cellphoneNumber: "0545674582",
          city: "מצפה יריחו",
          street: "תרשיש",
          houseNumber: "6",
          status: "חדש"
        },
        {
          id: "5",
          firstName: "שלמה",
          lastName: "בלנגה",
          phoneNumber: "05452343",
          cellphoneNumber: "",
          city: "ירושלים",
          street: "המרפא",
          houseNumber: "6",
          status: "בהמתנה לשיחה"
        }
      ];
    }
  }
});

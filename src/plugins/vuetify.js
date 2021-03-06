import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken2,
        accent: colors.lightBlue.lighten5
      }
    }
  }
});

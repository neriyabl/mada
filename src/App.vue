<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-h4 text-md-h3">
        <span>אפליקצית מדא</span>
      </div>
    </v-app-bar>

    <v-main class="ma-7">
      <patients />
    </v-main>
  </v-app>
</template>

<script>
import Patients from "./views/Patients";

export default {
  name: "App",

  components: {
    Patients
  }
};
</script>

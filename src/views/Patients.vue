<template>
  <div class="patients">
    <v-card elevation="4">
      <v-toolbar color="accent">
        <v-toolbar-title class="headline primary--text">
          כל המטופלים
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          color="primary"
          outlined
          rounded
          :disabled="!selectedPatients.length"
        >
          צור שיחות למטופלים המסומנים
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <PatientsTable v-model="selectedPatients" :patients="patients" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PatientsTable from "../components/PatientsTable";
export default {
  name: "Patients",
  components: { PatientsTable },
  async created() {
    this.patients = await this.$store.dispatch("getPatients");
  },
  data: () => ({
    patients: [],
    selectedPatients: []
  })
};
</script>

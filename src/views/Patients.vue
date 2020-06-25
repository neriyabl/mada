<template>
  <div class="patients">
    <v-card elevation="4">
      <v-toolbar color="accent">
        <v-toolbar-title class="headline primary--text">
          כל המטופלים
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          class="ml-2"
          color="primary"
          outlined
          rounded
          @click="importPatientsDialog = true"
        >
          <v-icon left>mdi-plus</v-icon>
          הוסף מטופלים חדשים
        </v-btn>
        <v-btn
          class="mr-2"
          color="primary"
          outlined
          rounded
          :disabled="!selectedPatients.length"
        >
          <v-icon left>mdi-phone</v-icon>
          צור שיחות למטופלים המסומנים
        </v-btn>
      </v-toolbar>
      <v-card-text class="px-0 pb-0">
        <PatientsTable v-model="selectedPatients" :patients="patients" />
      </v-card-text>
    </v-card>
    <v-dialog
      v-if="importPatientsDialog"
      v-model="importPatientsDialog"
      max-width="80%"
      persistent
    >
      <ImportPatients @close="importPatientsDialog = false" />
    </v-dialog>
  </div>
</template>

<script>
import PatientsTable from "../components/PatientsTable";
import ImportPatients from "../components/ImportPatients";
export default {
  name: "Patients",
  components: { ImportPatients, PatientsTable },
  async created() {
    this.patients = await this.$store.dispatch("getPatients");
  },
  data: () => ({
    patients: [],
    selectedPatients: [],
    importPatientsDialog: false
  })
};
</script>

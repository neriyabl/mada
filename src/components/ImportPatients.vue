<template>
  <v-card elevation="4">
    <v-card-title class="py-0 accent">
      <v-row>
        <v-col cols="6">
          <v-file-input
            outlined
            rounded
            dense
            @change="handleFileUpload()"
            v-model="file"
            label="העלאת קובץ csv"
            accept=".csv"
            hide-details
          />
        </v-col>
        <v-col cols="6" class="text-end">
          <v-btn
            class="ml-2"
            color="primary"
            outlined
            rounded
            :disabled="!selectedPatients.length"
          >
            <v-icon left>mdi-cloud-upload</v-icon>
            הוסף את המטופלים המסומנים
          </v-btn>
          <v-btn
            class="mr-2"
            color="error"
            rounded
            text
            @click="$emit('close')"
          >
            <v-icon class="pl-1">mdi-close</v-icon>
            סגור
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider v-if="fileData.length" />
    <v-card-text v-if="fileData.length" class="pa-0">
      <PatientsTable
        v-model="selectedPatients"
        :patients="fileData"
        hide-footer
      />
    </v-card-text>
  </v-card>
</template>

<script>
import PatientsTable from "./PatientsTable";
export default {
  name: "ImportPatients",
  components: { PatientsTable },
  data: () => ({
    file: null,
    fileData: [],
    selectedPatients: []
  }),
  methods: {
    handleFileUpload() {
      if (!this.file) {
        this.fileData = [];
        return;
      }
      // const file = this.$refs.file.files[0];
      if (!this.file.name.endsWith(".csv")) {
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("loadend", ({ target: { result } }) => {
        if (!this.validateFileData(result)) {
          alert("הקובץ לא תקין");
          return;
        }
        this.fileData = result
          .split("\n")
          .filter(f => Boolean(f) && f !== "\n")
          .map(row => {
            const props = row.split(",");
            return {
              id: props[0],
              firstName: props[1],
              lastName: props[2],
              phoneNumber: props[3],
              cellphoneNumber: props[4],
              city: props[5],
              street: props[6],
              houseNumber: props[7]
            };
          });
      });
      reader.readAsText(this.file);
    },
    validateFileData(data) {
      //todo validate file data
      return data || true;
    }
  }
};
</script>

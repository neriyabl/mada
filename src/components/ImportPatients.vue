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
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.csv,application/vnd.ms-excel"
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
import { readFile } from "../utils/fileParser";

export default {
  name: "ImportPatients",
  components: { PatientsTable },
  data: () => ({
    file: null,
    fileData: [],
    selectedPatients: []
  }),
  methods: {
    async handleFileUpload() {
      if (!this.file) {
        this.fileData = [];
        return;
      }

      const data = await readFile(this.file);

      if (!this.validateFileData(data)) {
        alert("הקובץ לא תקין");
        return;
      }

      this.fileData = data.map(row => ({
        id: row[0],
        firstName: row[1],
        lastName: row[2],
        phoneNumber: row[3],
        cellphoneNumber: row[4],
        city: row[5],
        street: row[6],
        houseNumber: row[7]
      }));
    },
    validateFileData(data) {
      //todo validate file data
      return data || true;
    }
  }
};
</script>

<template>
  <v-card class="ma-7" elevation="4">
    <v-card-title class="py-0 accent">
      <v-row>
        <v-col cols="4" lg="2" class="pa-1">
          <v-file-input
            @change="handleFileUpload()"
            v-model="file"
            label="העלאת קובץ csv"
            accept=".csv"
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider v-if="fileData.length" />
    <v-card-text v-if="fileData.length">
      <v-row>
        <v-col cols="12">
          <v-data-table
            v-model="selectedPatients"
            :headers="headers"
            :items="fileData"
            show-select
            item-key="id"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    file: null,
    fileData: [],
    selectedPatients: [],
    headers: [
      {
        text: "תעודת זהות",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "שם פרטי", value: "firstName" },
      { text: "שם משפחה", value: "lastName" },
      { text: "טלפון", value: "phoneNumber" },
      { text: "נייד", value: "cellphoneNumber" },
      { text: "יישוב", value: "city" },
      { text: "רחוב", value: "street" },
      { text: "מספר בית", value: "houseNumber" }
    ]
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

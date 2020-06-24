<template>
  <v-data-table
    :value="value"
    :headers="headers"
    :items="patients"
    show-select
    item-key="id"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: "PatientsTable",
  props: {
    patients: {
      type: Array,
      required: true
    },
    value: {
      type: Array
    }
  },
  data: () => ({
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
  })
};
</script>

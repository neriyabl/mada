<template>
  <v-data-table
    :value="value"
    :headers="headers"
    :items="patients"
    :search="search"
    :hide-default-footer="hideFooter"
    show-select
    item-key="id"
    @input="$emit('input', $event)"
  >
    <template v-slot:item.turnDate="{ item }">
      <span
        v-text="
          item.turnDate
            ? item.turnDate.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            : ''
        "
      />
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip v-if="item.status" :color="statusColor(item)" outlined small>
        {{ item.status }}
      </v-chip>
    </template>
  </v-data-table>
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
    },
    search: String,
    hideFooter: Boolean
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
      { text: "טלפון", value: "phoneNumber", sortable: false },
      { text: "נייד", value: "cellphoneNumber", sortable: false },
      { text: "יישוב", value: "city" },
      { text: "רחוב", value: "street" },
      { text: "מספר בית", value: "houseNumber" },
      { text: "תור בתאריך", value: "turnDate" },
      { text: "סטאטוס", value: "status" }
    ]
  }),
  methods: {
    statusColor({ status }) {
      switch (status) {
        case "חדש": {
          return "info";
        }
        case "בהמתנה לשיחה": {
          return "success";
        }
        case "נקבע תור": {
          return "warning";
        }
      }
    }
  }
};
</script>

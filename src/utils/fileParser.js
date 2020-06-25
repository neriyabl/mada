import { chunk } from "lodash";
import { read, utils } from "xlsx";
import header from "vuetify/lib/components/VDataTable/mixins/header";

export const readFile = file => {
  // if (file.name.endsWith(".csv")) {
  //   return readCsvFile(file);
  // } else if (file.name.endsWith(".xlsx")) {
  return readExelFile(file);
  // }
};

async function readCsvFile(file) {
  const data = await readFileData(file);
  return data
    .split("\n")
    .filter(f => Boolean(f) && f !== "\n")
    .map(row => row.split(","));
}

async function readExelFile(file) {
  const fileData = await readFileData(file);
  const wb = await read(fileData, { type: "array", WTF: 1 });
  console.log(wb);
  const first_worksheet = wb.Sheets[wb.SheetNames[0]];
  const data = utils.sheet_to_json(first_worksheet, { header: 1 });
  if (data[0][0].includes("ת")) {
    data.shift();
  }
  console.log(data);
  return data;
}

export function readFileData(file) {
  const reader = new FileReader();
  return new Promise(resolve => {
    reader.onload = ({ target: { result } }) => {
      resolve(new Uint8Array(result));
    };
    reader.readAsArrayBuffer(file);
  });
}

const response = {
  status: "SUCCESS",
  system_status_code: "200",
  message: "",
  document_type: "IND-KYC-002",
  format: "AADHAAR-FRONT",
  result: {
    document_id_number: {
      value: "4724 6897 5835",
    },
    old_id_number: {
      value: "",
    },
    name: {
      value: "ANAND TIWARI",
    },
    parent_or_spouse: {
      value: "shreyas",
    },
    father_name: {
      value: "jesus",
    },
    spouse_name: {
      value: "mary",
    },
    mother_name: {
      value: "",
    },
    surname: {
      value: "",
    },
    address: {
      value: "",
    },
    pincode: {
      value: "",
    },
    state: {
      value: "",
    },
    nationality: {
      value: "",
    },
    date_of_birth: {
      value: "",
    },
    place_of_birth: {
      value: "",
    },
    age: {
      value: "",
    },
    gender: {
      value: "MALE",
    },
    place_of_issue: {
      value: "",
    },
    old_date_of_issuance: {
      value: "",
    },
    date_of_issue: {
      value: "",
    },
    date_of_expiry: {
      value: "",
    },
    pp_file_number: {
      value: "",
    },
    photo: {
      value:
        "https://storage.googleapis.com/recognic-india//tmp/2022-06-07-094839D2s.jpeg",
    },
    signature: {
      value: "",
    },
    issuing_authority: {
      value: "",
    },
  },
  num_expected_fields: 6,
  num_extracted_fields: 5,
  fields_not_detected: ["date_of_birth"],
  columns: [],
  fields: [
    "name",
    "document_id_number",
    "father_name",
    "spouse_name",
    "date_of_birth",
    "photo",
    "gender",
  ],
  response_time: "38.072827",
  request_origin: "Console",
};
render();
function render() {
  document
    .getElementById("myFile")
    .addEventListener("change", handleFileSelect, false);
  generateTable();
  generateJSON();
}

function handleFileSelect() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#preview"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
}
function generateTable() {
  const data = response.result;
  let tableBody = document.getElementById("table-body");
  let __tr__ = document.createElement("tr");

  for (let [key, value] of Object.entries(data)) {
    let __td__ = document.createElement("td");
    __td__.classList.add("tg-0lax");
    __td__.innerHTML = value.value === "" ? "null" : value.value;

    __tr__.appendChild(__td__);
  }

  tableBody.appendChild(__tr__);
}
function generateJSON() {
  console.log("inside generateJSON");
  const data = response.result;

  let obj = JSON.parse(JSON.stringify(data));
  let pretty = JSON.stringify(obj, undefined, 4);
  document.getElementById("fileContent").textContent = pretty;
}

function toggleDisplay() {
  document.getElementById("fileContent").classList.toggle("hidden");
  document.getElementById("table").classList.toggle("hidden");
}
// function handleFileLoad(event){
//   console.log(event);
//   document.getElementById('fileContent').textContent = event.target.result;
// }

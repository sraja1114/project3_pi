import axios from "axios";

const API_ENDPOINT = "https://pomandhoneyapi.azurewebsites.net/reports";

export async function getExcessReport(startTime) {
    const response = await axios.post(API_ENDPOINT + "/excess-report", {
        "fromDate": startTime
    });
    
    console.log(response.data);
    return response;
}

export async function getSalesReport(name, startDate, endDate) {
    const response = await axios.post(API_ENDPOINT + "/sales-report", {
        "startDate": startDate,
        "endDate": endDate,
        "menuItem": name
    });
    console.log(response.data);
    return response;
  }

export async function getXReport() {
  const response = await axios.get(API_ENDPOINT + "/xreport");
  console.log(response.data);
  return response;
}

export async function getZReport() {
  const response = await axios.get(API_ENDPOINT + "/zreport");
  console.log(response.data);
  return response;
}

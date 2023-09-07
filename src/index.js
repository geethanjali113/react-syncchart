import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt9QHFqVkFrVE5AaV1CX2BZdllzQ2laek4BCV5EYF5SRHFfRF1hTX5Td0JrWn0=;Mgo+DSMBPh8sVXJ2S0d+X1ZPfkBGQmFJfFBmTWlceVRzcUU3HVdTRHRcQlpjT35RckVjWHdedHY=;ORg4AjUWIQA/Gnt2V1hhQlJDfVddWXxLflF1VWtTelh6d1BWESFaRnZdQV1kSXhTdEFjWX5WcnVX;MjU0ODM5MEAzMjMyMmUzMDJlMzBqZUZWQ0d1MVlUaWdJYWlHOG0ybndOUC9DUkdFTXo0aW1JWmgzTTNGeU5FPQ==;MjU0ODM5MUAzMjMyMmUzMDJlMzBKdVcrT1ljRWVSN3RXa2dtTnM4K3VJYm5FU1I5eDUxemU2dVVOMldwaVU0PQ==;NRAiBiAaIQQuGjN/V0R+XU9HcVRKQmdWfFN0RnNRdVt2flZDcC0sT3RfQF5jTn5VdkdnWX9feH1TRA==;MjU0ODM5M0AzMjMyMmUzMDJlMzBqbmMrOXhTQW82K1pQc3daNlBicXpJRG15a21xNlF2eGxpNlZTRVBHQ2hvPQ==;MjU0ODM5NEAzMjMyMmUzMDJlMzBpdmhKVElVZ1VKOWpKY09NSStVRHdTQWMyS1dvb0Y4c205RDVtd3VoWDIwPQ==;Mgo+DSMBMAY9C3t2V1hhQlJDfVddWXxLflF1VWtTelh6d1BWESFaRnZdQV1kSXhTdEFjWX5XdnRX;MjU0ODM5NkAzMjMyMmUzMDJlMzBFSXgxWGFYQlg5Z0FXOS9RTUg2L2ZDWlR6eEJ6dFBXdHk4L1o3REZOdjlVPQ==;MjU0ODM5N0AzMjMyMmUzMDJlMzBYdGhDbFdXZFI1R2ZFaHVVQm00dG8vZ0tybFRqM0Z2RlBHbWwxWldicTVzPQ==;MjU0ODM5OEAzMjMyMmUzMDJlMzBqbmMrOXhTQW82K1pQc3daNlBicXpJRG15a21xNlF2eGxpNlZTRVBHQ2hvPQ=="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

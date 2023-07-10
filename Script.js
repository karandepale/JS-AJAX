let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const myUrl = "http://localhost:3000/Employee";

function makeAjaxCall(methodType, url, cb, async = true, data = null) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(xhr.responseText);
      } else {
        console.log("Error: " + xhr.status);
      }
    }
  };
  xhr.open(methodType, url, async);
  xhr.send();
  console.log("Request sent to the server...");
}
function getUserDetails(data) {
  console.log("Data in getUserDetails is: " + data);
}

makeAjaxCall("GET", myUrl, getUserDetails, true);

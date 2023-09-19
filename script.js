// document.body.style.backgroundColor = "red";
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  var html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.phno + "</td>";
    html += "<td>" + element.password + "</td>";

    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Edite</button></td>';

    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();

// addd

function saveData() {
  console.log("hello");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var phno = document.getElementById("phno").value;
  var password = document.getElementById("password").value;
    console.log(name);
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.push({
    name: name,
    email: email,
    address: address,
    phno: phno,
    password: password,
  });
  console.log(name);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("password").value = "";
}

function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList")); 
    }
    peopleList.splice(index,1);
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();

}

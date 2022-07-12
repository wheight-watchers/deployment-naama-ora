let start = 0;
const getAllUser = new URL("https://safe-tor-83297.herokuapp.com/users")
async function returnAllUser() {
  debugger;
  try {
    let res = await fetch(getAllUser)
    return res.json();
  }
  catch (error) {
    alert(error)
  }
}
async function getParams() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const getUser = new URL(`https://safe-tor-83297.herokuapp.com/users/${id}`)
  try {
    const response = await fetch(getUser)
    const CurrentUser = await response.json();
    document.getElementById(
      "userDetails"
    ).innerHTML += `<h1>${CurrentUser.firstName} details</h1>`;
    document.getElementById(
      "userDetails"
    ).innerHTML += `<h4>firstName: ${CurrentUser.firstName}</h4> 
      <h4>lastName: ${CurrentUser.lastName}</h4>
      <h4>email: ${CurrentUser.email}</h4>
    <h4>address : 
      ${CurrentUser.address.street}
      ${CurrentUser.address.building},
      ${CurrentUser.address.city}
      </h4>
      <h4>age: ${CurrentUser.age}</h4> 
      <h4>height: ${CurrentUser.height}</h4>
      <h4>start Weight: ${CurrentUser.Weights.startWeight}</h4> 
    <h3>meetings:</h3>`;
    const meet = CurrentUser.Weights.meetings;
    let table = `<table>
    <tr>
    <th>Date  </th>
    <th>Weight  </th>
    </tr></br>`;
    table.id = "userMeetingsTable";
    meet.forEach((m) => {
      table += `<tr>
         <td>${m.date + "   "}</td>
        <td>${m.weight}</td>
        </tr></br>`;
    });
    table += `</table>`;
    document.getElementById("userDetails").innerHTML += table;
  }
  catch (error) {
    alert(error)
  }
}
async function getUsersForManager() {
  debugger;
  if (start == 0) {
    debugger;
   const allUser=await returnAllUser();
   let userMeetings =allUser[0].Weights.meetings;
   numOfMeetings = Object.keys(userMeetings).length;
   let cities = [];
   let ind = 0;
   allUser.forEach((u, i) => {
          debugger;
          let CITY = JSON.stringify(u.address.city).replace(/"/g, "");
          let found = cities.indexOf(CITY) > -1;
          if (!found) {
            cities[ind] = CITY;
            ind += 1;
          }
        });
        const city = document.getElementById("citySelect");
        const street = document.getElementById("streetSelect");
        let index = 1;
        city.options[0] = new Option("city", 0);
        street.options[0] = new Option("street", 0);
        cities.forEach((c, i) => {
          debugger;
          city.options[i + 1] = new Option(c, i + 1);
          allUser.forEach((j, ind) => {
            debugger;
            if (j.address.city == c) {
              debugger;
              let STREET = JSON.stringify(j.address.street).replace(/"/g, "");
              street.options[index] = new Option(STREET, index);
              index += 1;
            }
          });
        });
        start += 1;
        document.getElementById("allUsers").innerHTML = "";
        showUsers(allUser, numOfMeetings);
    
   }
}
function showUsers(jsonusers, numOfmeetings) {
  debugger;
  let i = 0;
  let bmi;
  if (jsonusers == [])
    document.getElementById(
      "allUsers"
    ).innerHTML += `<p>no suitable users found</p>`;
  jsonusers?.forEach((user) => {
    debugger;
    bmi = user.Weights.meetings[numOfmeetings - 1].weight / user.height ** 2;
    lastBmi =
      user.Weights.meetings[numOfmeetings - 2].weight / user.height ** 2;
    let containerUser = document.createElement("div");
    containerUser.innerHTML = "";
    const para = document.createElement("p");
    const buttons = document.createElement("button");
    const txt = document.createElement("txt");
    txt.id = "textForUser";
    buttons.innerText = "details";
    buttons.id = "b" + i;
    buttons.className = "btn btn-outline-info";

    i = i + 1;
    if (bmi < lastBmi) para.style.color = "green";
    else para.style.color = "red";
    txt.innerHTML = `<h3>${user.firstName + " " + user.lastName}</h3>`;
    para.innerHTML = "CURRENT BMI : " + bmi;
    containerUser.appendChild(txt);
    containerUser.appendChild(para);
    containerUser.appendChild(buttons);
    let allUsers = document.getElementById("allUsers");
    allUsers.appendChild(containerUser);
  });
  i = 0;
  jsonusers?.forEach((user) => {
    debugger;
    let elem = document.getElementById("b" + i);
    i = i + 1;
    elem.addEventListener(
      "click",
      function () {
        debugger;
        directMyDetails(user);
      },
      false
    );
  });
  start += 1;
}
function directMyDetails(user) {
  window.location.href = `Details.html?userId=${user.id}`;
}
async function filterUsers() {
debugger;

  const text = document.getElementById("searchByFreeTextInput").value;
  let biggerThanWeight =document.getElementById("biggerThanWeight").valueAsNumber;
  let lowerThanWeight = document.getElementById("lowerThanWeight").valueAsNumber;
  const lostOrGained = document.getElementById("select_lost/gained").value;
  const from = document.getElementById("select_from").value;
  let lowerThanBMI = document.getElementById("lowerThanBMI").valueAsNumber;
  let biggerThanBMI =document.getElementById("biggerThanBMI").valueAsNumber;
  const s = document.getElementById("streetSelect");
  const streetSelect = s.options[s.selectedIndex].outerText;
  const c = document.getElementById("citySelect");
  const citySelect = c.options[c.selectedIndex].outerText;
  let users=await returnAllUser();
  let userMeetings = users[0].Weights.meetings;
  numOfmeetings = Object.keys(userMeetings).length;
  debugger;
  if (text != "") {
    users = filterByText(users, text);
  }
  if (biggerThanWeight || lowerThanWeight) {
    if (!biggerThanWeight) biggerThanWeight = 0;
    if (!lowerThanWeight) lowerThanWeight = 200;
    users = filterByWeight(users, biggerThanWeight, lowerThanWeight);
  }
  if (lostOrGained != "lost/gained" && from != "from") {
    users = filterByGainedOrLost(users, lostOrGained, from, numOfmeetings);
  }
  if (lowerThanBMI != "" || biggerThanBMI != "") {
    debugger;
    if (!lowerThanBMI) lowerThanBMI = 200;
    if (!biggerThanBMI) biggerThanBMI = 0;
    users = filterByBMI(users, biggerThanBMI, lowerThanBMI, numOfmeetings);
  }
  if (streetSelect != "street" || citySelect != "city") {
    users = filterByAddress(users, citySelect, streetSelect);
  }
  document.getElementById("allUsers").innerHTML = "";
  showUsers(users, numOfmeetings);
}
function filterByText(users, text) {
  users = users.filter((u) => {
    return (
      u.firstName.toLowerCase().includes(text.toLowerCase()) ||
      u.lastName.toLowerCase().includes(text.toLowerCase()) ||
      u.address.street.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
      u.address.city.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
      u.email.toLowerCase().includes(text.toLowerCase()) ||
      u.id.toString().indexOf(text) > -1 ||
      u.age.toString().indexOf(text) > -1 ||
      u.height.toString().indexOf(text) > -1
    );
  });
  return users;
}
function filterByWeight(users, biggerThanWeight, lowerThanWeight) {
  users = users.filter((u) => {
    debugger;
    let userWheight = u.Weights.meetings[numOfmeetings - 1].weight;
    return userWheight > biggerThanWeight && userWheight < lowerThanWeight;
  });
  return users;
}
function filterByGainedOrLost(users, lostOrGained, from, numOfmeetings) {
  if (lostOrGained == "lost_weight") {
    if (from == "from_the_last_week") {
      users = users.filter((u) => {
        let currentWheight = u.Weights.meetings[numOfmeetings - 1].weight;
        let lastWheight = u.Weights.meetings[numOfmeetings - 2].weight;
        return currentWheight < lastWheight;
      });
    } else {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight < u.Weights.startWeight
        );
      });
    }
  } else {
    if (from == "from_the_last_week") {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight >
          u.Weights.meetings[numOfmeetings - 2].weight
        );
      });
    } else {
      users = users.filter((u) => {
        return (
          u.Weights.meetings[numOfmeetings - 1].weight > u.Weights.startWeight
        );
      });
    }
  }
  return users;
}
function filterByBMI(users, biggerThanBMI, lowerThanBMI, numOfmeetings) {
  debugger;
  let bmi;
  users = users.filter((u) => {
    bmi = u.Weights.meetings[numOfmeetings - 1].weight / u.height ** 2;
    return bmi < lowerThanBMI && bmi > biggerThanBMI;
  });
  return users;
}
function filterByAddress(users, citySelect, streetSelect) {
  users = users.filter((u) => {
    return u.address.city == citySelect;
  });
  if (streetSelect != "street") {
    users = users.filter((u) => {
      return u.address.street == streetSelect;
    });
  }
  return users;
}



function directToMeetings() {
  debugger;
  window.location.href = `Meetings.html`;
}

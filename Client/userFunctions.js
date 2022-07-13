async function getUsers(id) {
  const url = new URL(`https://safe-tor-83297.herokuapp.com/users/${id}`);
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    alert(error);
  }
}
async function userDetails() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  debugger;
  const CurrentUser = await getUsers(id);

  let value1 = CurrentUser.firstName;
  let value2 = CurrentUser.lastName;
  let value3 = CurrentUser.email;
  let value5 = CurrentUser.address.city;
  let value6 = CurrentUser.address.street;
  let value7 = CurrentUser.address.building;
  let value8 = CurrentUser.age;
  let value9 = CurrentUser.height;
  let value10 = CurrentUser.Weights.startWeight;
  let meet = CurrentUser.Weights.meetings;
  meet.forEach((m) => {
    debugger;

    document.getElementById(
      "meeting"
    ).innerHTML += `<h4>date:     </h4><h5>${m.date}</h5>`;
    document.getElementById(
      "meeting"
    ).innerHTML += `<h4>weight:      </h4><h5>${m.weight}</h5>`;
    document.getElementById("meeting").innerHTML += "--------";
  });

  document.getElementById("user").innerHTML += value1;
  document.getElementById("name").innerHTML += value1 + " " + value2;
  document.getElementById("email").innerHTML += value3;
  document.getElementById("age&height").innerHTML += `<h4>${value8 +
    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
    value9
    }</h4>`;
  document.getElementById("address").innerHTML +=
    value6 + " " + value7 + " , " + value5;
  document.getElementById("StartingWeight").innerHTML +=
    "\xa0\xa0\xa0" + value10;
  // };
  debugger;
  getDiaryForCurrentuser();
}
function directToEditdetails() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  window.location.href = `editUser.html?userId=${id}`;
}
function directToProducts() {
  debugger;
  window.location.href = "../Client/Product.html";
}
async function edit() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const CurrentUser = await getUsers(id);
  let value1 = CurrentUser.firstName;
  let value2 = CurrentUser.lastName;
  let value3 = CurrentUser.email;
  let value5 = CurrentUser.address.city;
  let value6 = CurrentUser.address.street;
  let value7 = CurrentUser.address.building;
  let value8 = CurrentUser.age;
  let value9 = CurrentUser.height;
  document.getElementById("name").nameInput += "hello " + value1;
  document.getElementById("nameInput").value = value1;
  document.getElementById("lastNameInput").value = value2;
  document.getElementById("emailInput").value = value3;
  document.getElementById("addressCityInput").value = value5;
  document.getElementById("addressStreetInput").value = value6;
  document.getElementById("addressBuildingInput").value = value7;
  document.getElementById("ageInput").value = value8;
  document.getElementById("heightInput").value = value9;
}

async function saveYourDetails() {
  debugger;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const CurrentUser = await getUsers(id);
  const url = new URL(`https://safe-tor-83297.herokuapp.com/users/${id}`);
  debugger;
  let firstName = document.getElementById("nameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let email = document.getElementById("emailInput").value;
  let city = document.getElementById("addressCityInput").value;
  let street = document.getElementById("addressStreetInput").value;
  let building = document.getElementById("addressBuildingInput").value;
  let age = document.getElementById("ageInput").value;
  let height = document.getElementById("heightInput").value;
  debugger
  const data =
  {
    "id": CurrentUser.id,
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "address": {
      "city": city,
      "street": street,
      "building": building
    },
    "height": height,
    "age": age,
    "Weights": CurrentUser.Weights,
    "diary": CurrentUser.diary
  }
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      // GIFLENS-https://media0.giphy.com/media/llKJGxQ1ESmac/200.gif
      // GIFLENS-https://media3.giphy.com/media/3og0ID5AW1SmPuG3u0/200.gif
      },
    })
    window.location.href = `User.html?userId=${CurrentUser.id}`;
  } 
  catch (err) {
    alert(err)
  }
}



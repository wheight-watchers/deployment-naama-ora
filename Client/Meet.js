function displayUsersForEnterWeight() {
  const dateInput = document.getElementById("dateInput");
  dateInput.value = new Date().toLocaleDateString();
  debugger;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://safe-tor-83297.herokuapp.com/users");
  xhr.send();
  xhr.onload = () => {
    debugger;
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${managerXHR.statusText}`);
    } else {
      let users = JSON.parse(xhr.responseText);
      const usersContainer = document.getElementById("usersWeightsForMeet");
      users.forEach((u) => {
        debugger;
        usersContainer.innerHTML += `
            <lable>${u.firstName + " " + u.lastName}</lable>
            <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
             id=${u.id + "Weight"} placeHolder="enter ${u.firstName} weight">`;
      });
    }
  };
}
function newMeeting() {
  debugger;
  const meetDate = document.forms.meet.date.value;
  const meetId = document.forms.meet.id.value;
  debugger
  let weights = []
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://safe-tor-83297.herokuapp.com/users");
  xhr.send();
  xhr.onload = () => {
    debugger;
    let users = JSON.parse(xhr.responseText);
    users.forEach((u) => {
      debugger
      let wgt = document.getElementById(u.id + "Weight").value;
      weights.push({id: meetId, date: meetDate, weight: wgt })
    })
  }
  xhr.onloadend = () => {
    
    debugger
    console.log(weights)
    const addMeeting = "https://safe-tor-83297.herokuapp.com/meeting"
    const add = "http://localhost:3000/meeting"
    const parametr=""
    fetch(add, {
      method: "POST",
      body: JSON.stringify({      
      //  "body":
       weights
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response =>{
        response.json();
        alert("added succesfully");
      }
      )
      .then(json => console.log(json));
  }
}






meetings = [];
onload = displayUsersForEnterWeight();

let CurrentUser;
const logIn = () => {
  const mail = document.getElementById("mailInput").value;
  const pswd = document.getElementById("passwordInput").value;
  const manager_url=`https://safe-tor-83297.herokuapp.com/account/login/manager?email=${mail}&password=${pswd}`;
  const user_url=`https://safe-tor-83297.herokuapp.com/account/login/user?email=${mail}&password=${pswd}`;
  const manager = await fetch(manager_url).then((res=> {debugger; res.json})).catch(()=>{debugger;});

  debugger;
  const managerXHR = new XMLHttpRequest();
  managerXHR.open("GET", );
  managerXHR.send();
  managerXHR.onload = () => {
    if (managerXHR.status !== 200) {
      alert(`Error ${managerXHR.status}: ${managerXHR.statusText}`);
    } else {
      let manager = JSON.parse(managerXHR.response);
      console.log(manager);
      let mail = document.getElementById("mailInput").value;
      let pswd = document.getElementById("passwordInput").value;
      if (mail == manager.email && pswd == manager.password) {
        if (window.confirm("welcome")) {
          window.location.href = "../Client/Manager.html";
        }
      } else {
        const userXHR = new XMLHttpRequest();
        // userXHR.open("GET", "http://localhost:3000/users");
        userXHR.open("GET", "https://safe-tor-83297.herokuapp.com/users");
        userXHR.send();
        userXHR.onload = () => {
          if (userXHR.status !== 200) {
            alert(`Error ${userXHR.status}: ${userXHR.statusText}`);
          } else {
            let users = JSON.parse(userXHR.responseText);
            console.log(users);
            CurrentUser = users.find((u) => u.email == mail && u.id == pswd);
            if (CurrentUser) {
              localStorage.setItem("cu", JSON.stringify(CurrentUser));//זה רק בנוסף
              debugger;
              window.location.href = `../Client/User.html?userId=${CurrentUser.id}`;
            } else alert("user not found");
          }
        }
      }
    };
  };
}
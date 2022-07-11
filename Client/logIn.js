let CurrentUser;
const logIn = async () => {
  debugger;
  const mail = document.getElementById("mailInput").value;
  const pswd = document.getElementById("passwordInput").value;
  const manager_url = `https://safe-tor-83297.herokuapp.com/account/login/manager?email=${mail}&password=${pswd}`;
  const user_url = `https://safe-tor-83297.herokuapp.com/account/login/user?email=${mail}&password=${pswd}`;
  debugger;
  const XHR = new XMLHttpRequest();
  XHR.open("GET", manager_url);
  XHR.send();
  XHR.onload = () => {
    if (XHR.status !== 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
    } else {
      let manager =
        //  JSON.parse(
        XHR.response;
      //  );
      //  if(mail==manager.email&&pswd==manager.password)
      if (manager) {
        if (window.confirm("welcome")) {
          window.location.href = "../Client/Manager.html";
        }
      } else {
        const userXHR = new XMLHttpRequest();
        userXHR.open("GET", user_url);
        userXHR.send();
        userXHR.onload = () => {
          if (userXHR.status !== 200) {
            alert(`Error ${userXHR.status}: ${userXHR.statusText}`);
          } else {
            let user =
              // JSON.parse(
              userXHR.response;
            // );
            // CurrentUser = users.find((u) => u.email == mail && u.id == pswd);
            // if (CurrentUser) {
            if (user) {
              //   localStorage.setItem("cu", JSON.stringify(CurrentUser)); //זה רק בנוסף
              //   debugger;
              let jsonuser = JSON.parse(userXHR.response);
              window.location.href = `../Client/User.html?userId=${jsonuser.id}`;
            } else alert("not found");
          }
        };
      }
    }
  };
};

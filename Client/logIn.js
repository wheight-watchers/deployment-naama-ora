let CurrentUser;

const logIn = async () => {
  debugger;
  const mail = document.getElementById("mailInput").value;
  const pswd = document.getElementById("passwordInput").value;
  const manager_url = new URL(`https://safe-tor-83297.herokuapp.com/account/login/manager?email=${mail}&password=${pswd}`);
  const user_url = new URL(`https://safe-tor-83297.herokuapp.com/account/login/user?email=${mail}&password=${pswd}`);
  debugger;
  try {
    let manager = await fetch(manager_url);
    manager = await manager.json()
    if (manager) {
      if (window.confirm("welcome")) {
        window.location.href = "../Client/Manager.html";
      }
    }
  }
  catch (error) {
    try {
      let user = await fetch(user_url);
    //  user = await user.json()
      if (user.status===200) {
        window.location.href = `../Client/User.html?userId=${pswd}`;
      }
    } catch (err) {
      alert("not found!!!")
    }

  }
};

async function logout() {
  const response = await fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

    if (response.ok) {
      alert("One of the best things you can do for yourself is to invest in yourself. ―Angel Moreira" )
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logOut").addEventListener("click", logout);

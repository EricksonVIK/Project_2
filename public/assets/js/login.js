// const { response } = require("express");

const login = async (event) => {
  
    event.preventDefault();
    // document.body.classList.add("waiting");
    const email = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();

  //   if (email && password) {
  //     const response = await fetch('/api/users/login', {
  //       method: 'post',
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     if (response.ok) {
  //       console.log('-----success-----')
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // }
    if (!email || !password) {
      alert("Please fill all the inputs.");
      return;
    }
    const reponse = await fetch('/api/user/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  if (reponse.ok) {
    console.log('----- SUCCESS!!! -----')
    document.location.replace('/dashboard');

      // alert("Email and password doesn't match. Please check your details.");
      // document.querySelector("#email-input").value = "";
      // document.querySelector("#password-password").value = "";
      // return;
    }
    // if (response.ok) {
    //   console.log('----- SUCCESS!!! -----')
    //   document.location.replace('/dashboard');
    // }
    else {
      console.log('-------FAIL-----------------')
      alert(response.statusText);
    }
  }


document.querySelector("#signup-form").addEventListener("submit", login);

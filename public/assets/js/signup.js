const clearPassword = () => {
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  return;
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};


document.getElementById("signUpButton").addEventListener("click", async (event) => {
    event.preventDefault();
    document.body.classList.add("waiting");
    const firstName = document.querySelector('#signupFirst').value.trim();
    const lastName = document.querySelector('#signupLast').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector("#password").value.trim();
    const passwordConfirmed = document.querySelector("#passwordConfirm").value.trim();
    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)

    if (!firstName || !lastName || !email || !password || !passwordConfirmed) {
      alert("Please fill all the fields!");
      clearPassword();
      return;
    }
    const checkEmail = validateEmail(email);
    if (!checkEmail) {
      alert("Please enter a valid email!");
      clearPassword();
      return;
    }
    if (password.length < 8) {
      alert("Password must have at least 8 characters");
      clearPassword();
      return;
    }
    if (password !== passwordConfirmed) {
        alert("Passwords must match!");
        clearPassword();
        return;
    }
    else {
        const response = await fetch("/api/user", {
            method: "post",
          body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
            headers: { "Content-Type": "application/json" },
        });
      if (response.ok) {
          console.log('User has been added!')
            document.location.replace("/dashboard");
        } else {
            alert("Looks like something went wrong. Try again!");
        }
    }
});

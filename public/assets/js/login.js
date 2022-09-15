const login = async (event) => {
  try {
    event.preventDefault();
    document.body.classList.add("waiting");
    const email = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();

    if (!email || !password) {
      alert("Please fill all the inputs.");
      return;
    }
    const reponse = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!reponse.ok) {
      alert("Email and password doesn't match. Please check your details.");
      document.getElementById("#email-input").value = "";
      document.getElementById("#password-password").value = "";
      return;
    }
    if (response.ok) {
      document.location.replace("/dashboard");
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("loginButton").addEventListener("click", login);

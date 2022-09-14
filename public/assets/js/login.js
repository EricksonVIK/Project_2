const login = async (event) => {
    try {
      event.preventDefault();
      document.body.classList.add("waiting");
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password) {
        alert("Please fill all the inputs.");
        return;
      }
      const reponse = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!reponse.ok) {
        alert("Email and password doesn't match. Please check your details.");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        return;
      }
      document.location.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  
  document.getElementById("loginButton").addEventListener("click", login);
  
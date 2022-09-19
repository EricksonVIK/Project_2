const login = async (event) => {
  
    event.preventDefault();
    const email = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();

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
    }
    else {
      console.log('-------FAIL-----------------')
      alert(response.statusText);
    }
  }


document.querySelector("#signup-form").addEventListener("submit", login);

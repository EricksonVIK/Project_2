const clearPassword = () => {
    document.getElementById("password").value = ""
    document.getElementById("confirmPassword").value = ""
    return
}

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email)
}

const signUp = async (event) => {
    try {
        event.preventDefault()
        document.body.classList.add("waiting")
        const firstName = document.getElementById("first-name").value.trim()
        const lastName = document.getElementById("last-name").value.trim()
        const email = document.getElementById("user-email").value.trim()
        const password = document.getElementById("password").value.trim()
        const passwordConfirmed = document.getElementById("confirmPassword").value.trim()
        
        console.log(firstName, lastName);
        
        if (
            !firstName || !lastName || !email || !password || !passwordConfirmed
        ) {
            alert("Please fill all the fields!")
            clearPassword()
            return
        }
        const checkEmail = validateEmail(email)
        if (!checkEmail) {
            alert("Please enter a valid email!")
            clearPassword()
            return
        }
        if (password.length < 8) {
            alert("Password must have at least 8 characters");
            clearPasswordFields();
            return;
        } if (password !== passwordConfirmed) {
            alert("Passwords must match!")
            clearPassword()
            return
        } else {
            const response = await fetch("/api/user", {
                method: "post",
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
                headers: { "Content-Type": "application/json"}
            })
            if (response.ok) {
                document.location.replace("/dashboard")
            } else {
                alert("Looks like something went wrong. Try again!")
            }
        }
    } catch (err) {
        console.error(err)
    }
} 

document.getElementById("signUpButton").addEventListener("click", signUp)
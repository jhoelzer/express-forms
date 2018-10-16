const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateForm.addEventListener("submit", submitForm)

function submitForm (event) {
    event.preventDefault();

    let user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        firstName: document.getElementById("first").value,
        lastName: document.getElementById("last").value,
        phone: document.getElementById("phone").value,
        homepage: document.getElementById("homepage").value,
        awesome: document.getElementById("awesome").value,
        contact: radioButtonChecker(),
        devices: checkBoxChecker(),
        userType: document.getElementById("userType").value,
        birthYear: document.getElementById("birthYear").value
    }

    function radioButtonChecker() {
        const email = document.getElementById("emailContact").checked
        const phone = document.getElementById("phoneContact").checked
        if (email === true) {
            return "Email"
        } else if (phone === true) {
            return "Phone"
        }
    }

    function checkBoxChecker() {
        const ios = document.getElementById("ios").checked
        const android = document.getElementById("android").checked
        const mac = document.getElementById("mac").checked
        const windows = document.getElementById("windows").checked
        const chrome = document.getElementById("chrome").checked
        const linux = document.getElementById("linux").checked
        let preferredDevice = []
        if (android === true) {
            preferredDevice.push("Android")
        } if (ios === true) {
            preferredDevice.push("IOS")
        } if (mac === true) {
            preferredDevice.push("Mac")
        } if (windows === true) {
            preferredDevice.push("Windows")
        } if (chrome === true) {
            preferredDevice.push("Chrome")
        } if (linux === true) {
            preferredDevice.push("Linux")
        } 
        return preferredDevice
    }

    console.log("User: " + user)

    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    fetch("/api/user", post)
        .then(res => res.json())
        .then(data => console.log(data))
}
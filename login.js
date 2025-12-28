
const customer = JSON.parse(localStorage.getItem("users")) || [];
const admin = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin"
};

localStorage.setItem("admin", JSON.stringify(admin));

let email;
let password;
let n;
let role;
console.log(customer);

document.querySelector(".login-btn").addEventListener("click", function () {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    role = document.querySelector('input[name="role"]:checked')?.value;
    console.log("Role:", role);
    // const user = users.find(
    //     u => u.email === email && u.password === password
    // );

    if (!role) {
        alert("Please select Admin or User");
        return;
    }

    let foundUser = null;
    
    customer.forEach(e => {
        // console.log(e.name)
        // console.log(e.email)
        // console.log(e.password)

        if (e.email === email && e.password === password) {
            foundUser = e;
            email = e.email;
            password = e.password;
            n = e.name;
        }
    });
    if (role === "admin") {
        const admin = JSON.parse(localStorage.getItem("admin"));
        if (admin.email === email && admin.password === password) {
            localStorage.setItem("CurrentUser", JSON.stringify(admin));

            alert("Login successful as Admin credentials");


            window.location.href = "admin.html";
        }
        else {
            alert("Invalid Admin credentials");
            return;
        }
    }
    else if (role === "user") {

        if (foundUser) {
            console.log(foundUser)


            alert("Login successful");
            localStorage.setItem("CurrentUser", JSON.stringify(foundUser))
            window.location.href = "student.html";


        }
        else {

            alert("Invalid email or password");
        }
    }

});


function googleLogin() {
    const googleUser = {
        name: "Google User",
        email: "googleuser@gmail.com",
        role: "student"
    };

    localStorage.setItem("CurrentUser", JSON.stringify(googleUser));
    alert("Logged in with Google (Demo)");
    window.location.href = "student.html";
}

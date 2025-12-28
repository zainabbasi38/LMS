function Signup(){
    let email = document.getElementById("em").value;
    console.log(email);
    let password = document.getElementById("pass").value;
    let name = document.getElementById("n").value;
    console.log(name);
    const newUser = {
        email:email,
        password :password,
        name:name,
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users) );
    window.location.href = "student.html";
}
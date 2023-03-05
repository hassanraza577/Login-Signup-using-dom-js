function gotologin() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "flex";
}
function gotosignup() {
  document.getElementById("signup").style.display = "flex";
  document.getElementById("login").style.display = "none";
}

let container = document.querySelector(".container");
let mine = document.createElement("p");
mine.innerText = "Hassan Raza Assignment";
container.appendChild(mine);
let signup = document.createElement("div");
signup.classList.add("signup");
signup.setAttribute("id", "signup");
container.appendChild(signup);

var signupheading = document.createElement("h1");
signupheading.innerText = "Signup";

var inpname = document.createElement("INPUT");
inpname.classList.add("signupname");
inpname.setAttribute("type", "text");

var labelname = document.createElement("label");
labelname.innerText = "User Name*";

var inpemail = document.createElement("INPUT");
inpemail.classList.add("signupemail");
inpemail.setAttribute("type", "text");

var labelemail = document.createElement("label");
labelemail.innerText = "Email*";

var inppass = document.createElement("INPUT");
inppass.classList.add("signuppass");
inppass.setAttribute("type", "text");

var labelpass = document.createElement("label");
labelpass.innerText = "Password*";

var upresp = document.createElement("p");
upresp.classList.add("uptxtinp");


var btn = document.createElement("div");
btn.classList.add("btns");
btn.innerHTML = `<button onclick="chk()">Signup</button>`;

var dontacc = document.createElement("p");
dontacc.innerHTML = `<p class="goto">Already have an account? <span onclick="gotologin()">Signin</span></p>`;

signup.appendChild(signupheading);
signup.appendChild(labelname);
signup.appendChild(inpname);
signup.appendChild(labelemail);
signup.appendChild(inpemail);
signup.appendChild(labelpass);
signup.appendChild(inppass);
signup.appendChild(btn);
signup.appendChild(upresp)
signup.appendChild(dontacc);

let login = document.createElement("div");
login.classList.add("login");
login.setAttribute("id", "login");
container.appendChild(login);

var loginheading = document.createElement("h1");
loginheading.innerText = "Signin";

var inpname = document.createElement("INPUT");
inpname.classList.add("loginname");
inpname.setAttribute("type", "text");

var labelname = document.createElement("label");
labelname.innerText = "User Name*";

var inppass = document.createElement("INPUT");
inppass.classList.add("loginpass");
inppass.setAttribute("type", "text");

var labelpass = document.createElement("label");
labelpass.innerText = "Password*";

var btn = document.createElement("div");
btn.classList.add("btns");
btn.innerHTML = `<button onclick="inchk()">Signin</button>`;

var inresp = document.createElement("p");
inresp.classList.add("intxtinp");


var dontacc = document.createElement("p");
dontacc.innerHTML = `<p class="goto">Already have an account? <span onclick="gotosignup()">Signup</span></p>`;

login.appendChild(loginheading);
login.appendChild(labelname);
login.appendChild(inpname);
login.appendChild(labelpass);
login.appendChild(inppass);
login.appendChild(btn);
login.appendChild(inresp);
login.appendChild(dontacc);

let arr = []

function chk() {

  let nameup = document.querySelector(".signupname");
  let emailup = document.querySelector(".signupemail");
  let passup = document.querySelector(".signuppass");


  // Check if user name, email, and password fields are empty
  if (nameup.value === "" || emailup.value === "" || passup.value === "") {
    upresp.style.color = "#D53446";
    upresp.innerText = "Please fill out all required fields.";
  } else {

    arr.push(nameup.value);
    arr.push(passup.value);

    nameup.value = "";
    emailup.value = "";
    passup.value = "";
    upresp.style.color = "#0F9D58";
    upresp.innerText = "Signup Sucessfully.";

  }
}
console.log(arr)
function inchk() {
  let namein = document.querySelector(".loginname");
  let passin = document.querySelector(".loginpass");
  if (namein.value === "" || passin.value === "") {
    inresp.style.color = "#D53446";
    inresp.innerText = "Please fill out all required fields.";
  }
  else if(namein.value != arr[0] || passin.value != arr[1]){
    inresp.style.color = "#FDBB08";
    inresp.innerText = "Incorrect Input.";
  } 
  else{
    namein.value = "";
    passin.value = "";
    inresp.style.color = "#0F9D58";
    inresp.innerText = "Login Sucessfully.";
  } 
  // else {
  //   namein.value = "";
  //   passin.value = "";
  //   inresp.style.color = "green";
  //   inresp.innerText = "Login Sucessfully.";
  // }
}
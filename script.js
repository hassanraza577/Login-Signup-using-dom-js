function gotologin(){
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "flex";
}
function gotosignup(){
    document.getElementById("signup").style.display = "flex";
    document.getElementById("login").style.display = "none";
}

let container = document.querySelector(".container");
let mine = document.createElement("p")
mine.innerText = "Hassan Raza Assignment"
container.appendChild(mine);
let signup = document.createElement("div");
signup.classList.add("signup");
signup.setAttribute("id","signup");
container.appendChild(signup);

var signupheading = document.createElement("h1");
signupheading.innerText = "Signup";

var inpname = document.createElement("INPUT");
inpname.setAttribute("type", "text");

var labelname = document.createElement("label");
labelname.innerText = "User Name";

var inpemail = document.createElement("INPUT");
inpemail.setAttribute("type", "text");

var labelemail = document.createElement("label");
labelemail.innerText = "Email";

var inppass = document.createElement("INPUT");
inppass.setAttribute("type", "text");

var labelpass = document.createElement("label");
labelpass.innerText = "Password";

var btn = document.createElement("div");
btn.classList.add("btns");
btn.innerHTML = `<button onclick="chk()">Signup</button>`

var dontacc = document.createElement("p");
dontacc.innerHTML = `<p class="goto">Already have an account? <span onclick="gotologin()">Signin</span></p>`

signup.appendChild(signupheading)
signup.appendChild(labelname)
signup.appendChild(inpname)
signup.appendChild(labelemail)
signup.appendChild(inpemail)
signup.appendChild(labelpass)
signup.appendChild(inppass)
signup.appendChild(btn)
signup.appendChild(dontacc)


let login = document.createElement("div");
login.classList.add("login");
login.setAttribute("id","login");
container.appendChild(login);

var loginheading = document.createElement("h1");
loginheading.innerText = "Signin";

var inpname = document.createElement("INPUT");
inpname.setAttribute("type", "text");

var labelname = document.createElement("label");
labelname.innerText = "User Name";



var inppass = document.createElement("INPUT");
inppass.setAttribute("type", "text");

var labelpass = document.createElement("label");
labelpass.innerText = "Password";

var btn = document.createElement("div");
btn.classList.add("btns");
btn.innerHTML = `<button onclick="chk()">Signin</button>`

var dontacc = document.createElement("p");
dontacc.innerHTML = `<p class="goto">Already have an account? <span onclick="gotosignup()">Signup</span></p>`

login.appendChild(loginheading)
login.appendChild(labelname)
login.appendChild(inpname)
login.appendChild(labelpass)
login.appendChild(inppass)
login.appendChild(btn)
login.appendChild(dontacc)

function chk() {
    let allinp = document.getElementsByTagName("input");
  
    // Check if user name, email, and password fields are empty
    if (allinp[0].value === "" || allinp[1].value === "" || allinp[2].value === "") {
      alert("Please fill out all required fields.");
    }  else {
      console.log("Completed");
      for (let i = 0; i < allinp.length; i++) {
        allinp[i].value = "";
      }
    }
  }
  
  
  
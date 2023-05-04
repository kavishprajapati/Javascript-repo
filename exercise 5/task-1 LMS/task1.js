
let allForms = document.forms;
// console.log(allForms);
let loginForm = allForms[0];
let signUpForm = allForms[1];

function emailValidator(email) {
  if (email == '') {
    alert("Please Enter your Email Address");
    return false;
  }

  let emailRegex = /[\w]+@[\w]+\.[\w]{2,3}/;
  if (!emailRegex.test(email)) {
    alert('Please Enter a Vaild Email Address');
    return false;
  }

  return true;
}

function passwordValidator(password) {
  if (password == '') {
    alert("Please enter your password");
    return false;
  }

  let passwordLen = password.length;
  if (passwordLen < 7) {
    alert('Password must be atleast 8 characters long');
    return false;
  }

  return true;
}

function againPasswordValidator(againPassword, realPassword) {
  if (againPassword == '') {
    alert("Please Again enter your password");
    return false;
  }

  if (realPassword != againPassword) {
    alert('Passwords do not match');
    return false;
  }

  return true;
}

function authorizeLogin(email, password) {
  const matchedUser = getUserFromEmail(email);
  console.log({ matchedUser });

  if (!matchedUser) {
    alert("Email address or Password is Incorrect")
    return false;
  }

  if (matchedUser.password != password) {
    alert("Email address or Password is Incorrect")
    return false;
  }

  return matchedUser;
}

//LF SignUp Btn
let lFormSignUpButton = document.getElementById("LFSignUpBtn");

lFormSignUpButton.addEventListener("click", lfSignUpBtnFunc);

function lfSignUpBtnFunc(e) {
  e.preventDefault();
  let loginFormContainer = document.getElementById("myLoginFormContainer");
  loginFormContainer.style.display = "none";

  let signUpFormContainer = document.getElementById("mySignUpFormContainer");
  signUpFormContainer.style.display = "flex";
}

// SF login Btn
let sFormLoginButton = document.getElementById("SFLoginBtn");
sFormLoginButton.addEventListener("click", sfLoginBtnFunc);

function sfLoginBtnFunc(e) {
  e.preventDefault();
  let signUpFormContainer = document.getElementById("mySignUpFormContainer");
  signUpFormContainer.style.display = "none";

  let loginFormContainer = document.getElementById("myLoginFormContainer");
  loginFormContainer.style.display = "flex";
}

//LF login Btn
let lFormLoginButton = document.getElementById('LFLoginBtn');
lFormLoginButton.addEventListener("click", lfLoginBtnFunc);

function lfLoginBtnFunc(e) {
  e.preventDefault();

  // getting values from form elements
  let myEmail = loginForm.elements.LFEmail.value;
  let myPassword = loginForm.elements.LFPassword.value;

  // password validation
  const isPasswordValidated = passwordValidator(myPassword);

  // email validation
  const isEmailValidated = emailValidator(myEmail);

  if (!isEmailValidated || !isPasswordValidated) {
    return;
  }

  // email and password combination validation
  const currentUser = authorizeLogin(myEmail, myPassword);
  if (!currentUser) {
    return;
  }

  // setting current user to localstorage
  alert("successfully Login!");
  localStorage.setItem("myCurrentUser", JSON.stringify(currentUser));

  // redirecting user to dashbaord based on isAdmin flag
  if (currentUser.isAdmin) {
    window.location.assign("task1_Admin.html")
  }
  else {
    window.location.assign("task1_User.html");
  }
}

//SF SignUp Btn
let SFormSignUpButton = document.getElementById('SFSignUpBtn');
SFormSignUpButton.addEventListener("click", sfSignUpBtnFunc);

function sfSignUpBtnFunc(e) {
  e.preventDefault();

  // getting values from form elements
  let myPassword = signUpForm.elements.SFPassward.value;
  let myEmail = signUpForm.elements.SFEmail.value;
  let myAgainPassword = signUpForm.elements.SFAgainPassward.value;
  let myIsAdminCheckbox = signUpForm.elements.SFCheckBox.checked;
  console.log({ myPassword, myEmail, myAgainPassword, myIsAdminCheckbox });

  // email validation (basic validation)
  const isEmailValidated = emailValidator(myEmail);
  if (!isEmailValidated) {
    return;
  }

  // duplicate email validation
  const matchedUser = getUserFromEmail(myEmail);
  if (matchedUser) {
    alert('Email already exists');
    signUpForm.elements.SFEmail.value = '';
    return;
  }

  // password validation
  const isPasswordValidated = passwordValidator(myPassword);
  if (!isPasswordValidated) {
    return;
  }

  // again password validation
  const isAgainPasswordValidated = againPasswordValidator(myAgainPassword, myPassword);
  if (!isAgainPasswordValidated) {
    return;
  }

  // successfull signup
  alert('Successfully Signed Up ');
  const newUser = {
    email: myEmail,
    password: myPassword,
    isAdmin: myIsAdminCheckbox
  }
  console.log({ newUser });

  const myAllUser = loadAllUsers();
  console.log("Before writing new user to allUsers", myAllUser);
  myAllUser.push(newUser);
  localStorage.setItem("myAllUser", JSON.stringify(myAllUser));
}


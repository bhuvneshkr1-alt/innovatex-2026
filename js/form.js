function fillEventDropdown() {
  var dropdown = document.getElementById("event");
  for (var i = 0; i < events.length; i++) {
    var option = document.createElement("option");
    option.value = events[i].name;
    option.textContent = events[i].name;
    dropdown.appendChild(option);
  }
}
function checkForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var college = document.getElementById("college").value.trim();
  var eventChoice = document.getElementById("event").value;

  var allGood = true;
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("phone-error").textContent = "";
  document.getElementById("college-error").textContent = "";
  document.getElementById("event-error").textContent = "";
  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    allGood = false;
  }
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition === email.length - 1) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    allGood = false;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phone-error").textContent = "Phone number must be 10 digits.";
    allGood = false;
  }
  if (college === "") {
    document.getElementById("college-error").textContent = "Please enter your college.";
    allGood = false;
  }
  if (eventChoice === "") {
    document.getElementById("event-error").textContent = "Please choose an event.";
    allGood = false;
  }

  return allGood;
}
function setupForm() {
  fillEventDropdown();

  var form = document.getElementById("register-form");
  var message = document.getElementById("form-message");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (checkForm() === true) {
      message.textContent = "Thank you! You are registered.";
      form.reset();
    } else {
      message.textContent = "";
    }
  });
}
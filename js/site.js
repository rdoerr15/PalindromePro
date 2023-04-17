//controller function
function getValues() {
  //get the user's input
  //decide what to do with it

  let userInput = document.getElementById("message").value;

  if (userInput.length > 0) {
    let reversedInput = reverseString(userInput);
    let isPalindrome = checkForPalindrome(userInput);

    displayResult(reversedInput, isPalindrome);
  } else {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Taco Cat",
      text: "You must enter an input to check for palindrome!",
    });
  }
}

function checkForPalindrome(userString) {
  userString = userString.toLowerCase();

  const regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let reversedString = reverseString(userString);

  let isPalindrome = reversedString == userString;

  return isPalindrome;
}

//business/logic function
function reverseString(message) {
  //take a string, return it in reverse
  let reversedMsg = "";

  for (let i = message.length - 1; i >= 0; i--) {
    reversedMsg += message[i];
  }

  //reversedMsg = message.split('').reverse().join(''); quick solution

  return reversedMsg;
}

//view function
function displayResult(resultMessage, isPalindrome) {
  //show the string on the page
  let resultMessage = "";

  let alertClass = isPalindrome ? "alert-success" : "alert-danger";
  alertBox.classList.add(alertClass);

  if (isPalindrome) {
    resultMessage = "You enetred a palindrome!";
  } else {
    resultMessage = "You did not enter a plaindrome!";
  }

  resultMessage += "your message reversed is" + resultMessage;

  document.getElementById("msg").textContent = resultMessage;
  document.getElementById("alert").remove("d-none");

  let alertBox = document.getElementById("alert");
  alertBox.classList.remove("alert-danger");
  alertBox.classList.remove("alert-success");
  alertBox.classList.add("d-none");
}

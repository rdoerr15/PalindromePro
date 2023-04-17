//controller function
function getValues() {
  //get the user's input
  //decide what to do with it
  let userInput = document.getElementById("message").value;

  let reversedInput = checkForPalindrome(
    userInput.toLowerCase().replaceAll(" ", "")
  );

  displayResults(reversedInput);;
}

//business/logic function
function checkForPalindrome(input) {
  //take a string, return it in reverse
  let inputLength = input.length;

  for (let i = 0; i < inputLength / 2; i++) {
    if (input[i] !== input[inputLength - 1 - i]) {
      return '';
    }
  }
  return input;
}

//view function
function displayResults(revInput) {
  //show the string on the page
  if (revInput) {
    document.getElementById('msg').textContent = revInput;
  } else {
    document.getElementById('msg2').textContent = revInput;
  }

  if (revInput) {
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("alert2").classList.add("d-none");
  } else {
    document.getElementById("alert2").classList.remove("d-none");
    document.getElementById("alert").classList.add("d-none");
  }
}

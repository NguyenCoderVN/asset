function checkEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email.value.trim())) {
    return true;
  } else {
    return false;
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    return false;
  }
  return true;
}

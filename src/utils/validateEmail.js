export const validateEmail = email => {

  const emailPattern =   /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  if(emailPattern.test(email)) {
    return null;
  } else {
    return "Email format is invalid";
  }
}

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const regexTwitter = /(?<!\w)@[\w+]{1,15}\b/;

export const validateUserSettings = (values) => {
  const required = "Este campo es requerido";
  const nonValid = "Este campo no es valido";

  let errors = {};

  if (!values.userName) {
    errors.userName = required;
  }

  if (values.paypal && !regexEmail.test(values.paypal)) {
    errors.paypal = nonValid;
  }
  if (values.binanceId && isNaN(values.binanceId)) {
    errors.binanceId = nonValid;
  }
  console.log(values.twitter);
  if (values.twitter && !regexTwitter.test(values.twitter)) {
    errors.twitter = nonValid;
  }

  return errors;
};

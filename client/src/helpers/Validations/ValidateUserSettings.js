// const regexEmail =
//   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

// const regexTwitter = /(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)/;

export const validateUserSettings = (values) => {
  const required = "Este campo es requerido";
  const nonValid = "Este campo no es valido";

  let errors = {};

  if (!values.userName) {
    errors.userName = required;
  }

  // if (values.paypal && !regexEmail.test(values.email)) {
  //   errors.paypal = nonValid;
  // }

  if (values.binancePayId && isNaN(values.binancePayId)) {
    errors.binancePayId = nonValid;
  }

  // if (values.twitter && !regexTwitter.test(values.twitter)) {
  //   errors.twitter = nonValid;
  // }

  return errors;
};

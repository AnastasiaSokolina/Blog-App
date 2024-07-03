export const validateConfigUsername = () => ({
  required: 'required field',
  minLength: {
    value: 3,
    message: 'Your username needs to be at least 3 characters!',
  },
  maxLength: {
    value: 20,
    message: 'Your username must be a maximum of 20 characters!',
  },
});

export const validateConfigEmail = () => ({
  required: 'required field',
  pattern: {
    value:
        // eslint-disable-next-line no-useless-escape
        /^((([0-9a-z]{1}[-0-9a-z\.]{1,}[0-9a-z]{1})|([0-9а-я]{1}[-0-9а-я\.]{1,}[0-9а-я]{1}))@([-a-z]{1,}\.){1,2}[-a-z]{2,})$/u,
    message: 'Invalid Email address!',
  },
});

export const validateConfigPassword = () => ({
  required: 'required field',
  minLength: {
    value: 6,
    message: 'Your password needs to be at least 6 characters',
  },
  maxLength: {
    value: 40,
    message: 'Your password must be a maximum of 40 characters',
  },
});

export const validateConfigRepeatPassword = (getPasswordValue) => ({
  required: 'required field',
  validate: (value) => {
    const passwordValue = getPasswordValue('password');
    return value === passwordValue;
  },
});

export const validateConfigAgreeCheckbox = () => ({
  required: true,
});

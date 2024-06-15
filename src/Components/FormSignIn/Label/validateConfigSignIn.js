export const validateConfigEmail = () => ({
    required: 'required field',
    pattern: {
      value:
        // eslint-disable-next-line no-useless-escape
        /^((([0-9a-z]{1}[-0-9a-z\.]{1,}[0-9a-z]{1})|([0-9а-я]{1}[-0-9а-я\.]{1,}[0-9а-я]{1}))@([-a-z]{1,}\.){1,2}[-a-z]{2,})$/u,
      message: 'please write correct Email address',
    },
  })
  
  export const validateConfigPassword = () => ({
    required: 'required field',
  })
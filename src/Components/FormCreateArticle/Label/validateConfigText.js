export const validateConfigTitle = () => ({
  required: 'Field must not be empty',
  validate: (value) => {
    if (value.trim() === '') {
      return 'Field must not be empty';
    }
    return true;
  },
});

export const validateConfigShortDescription = () => ({
  required: 'Field must not be empty',
  validate: (value) => {
    if (value.trim() === '') {
      return 'Field must not be empty';
    }
    return true;
  },
});

export const validateConfigText = () => ({
  required: 'Field must not be empty',
  validate: (value) => {
    if (value.trim() === '') {
      return 'Field must not be empty';
    }
    return true;
  },
});

export const validateConfigTag = () => ({
  required: 'Fill input or delete it',
  validate: (value) => {
    if (value.trim() === '') {
      return 'Field must not be empty';
    }
    return true;
  },
});

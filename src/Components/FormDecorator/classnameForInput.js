import classNames from 'classnames';

export const classnameForInput = (err, textField) => classNames({
  doNotValidates: err,
  textField: !!textField,
});

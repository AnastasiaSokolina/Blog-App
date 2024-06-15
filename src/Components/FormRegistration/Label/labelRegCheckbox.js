import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigAgreeCheckbox } from './validateConfigsReg'

export default function LabelRegCheckbox(props) {
    const { errors, register } = props
    return (
    <label className="agreeField">
      <input
        type="checkbox"
        {...register('checkboxAgree', validateConfigAgreeCheckbox())}
        className={classnameForInput(errors?.checkboxAgree)}
      />
      <span className="checkmark"> </span>
      <span> I agree to the processing of my personal information</span>
    </label>
  )
}
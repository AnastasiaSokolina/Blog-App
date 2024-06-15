import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigRepeatPassword } from './validateConfigsReg'

export default function LabelRepeatPassword(props) {
    const { errors, register, getValues } = props;
    return (
        <label>
        <h4>Repeat Password</h4>
        <input
            type="password"
            placeholder="Password"
            className={classnameForInput(errors?.repeatPassword)}
            {...register('repeatPassword', validateConfigRepeatPassword(getValues))}
        />
        <p>{errors?.repeatPassword?.message || (errors?.repeatPassword && 'Password must match')}</p>
        </label>
    )
}
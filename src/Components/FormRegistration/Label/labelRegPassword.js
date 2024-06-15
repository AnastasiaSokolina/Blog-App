import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigPassword } from './validateConfigsReg'

export default function LabelRegPassword(props) {
    const { errors, register } = props
    return (
        <label>
        <h4>Password</h4>
        <input
            type="password"
            placeholder="Password"
            className={classnameForInput(errors?.password)}
            {...register('password', validateConfigPassword())}
        />
        <p>{errors?.password?.message}</p>
        </label>
    )
}
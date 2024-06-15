import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigPassword } from './validateConfigSignIn'

export default function LabelSignInPassword(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Password</h4>
        <input
            type="password"
            placeholder="Password"
            {...register('password', validateConfigPassword())}
            className={classnameForInput(errors?.password)}
        />
        <p>{errors?.password?.message}</p>
        </label>
    )
}
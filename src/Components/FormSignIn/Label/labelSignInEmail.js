import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigEmail } from './validateConfigSignIn'

export default function LabelSignInEmail(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Email address</h4>
        <input
            type="email"
            placeholder="Email address"
            {...register('email', validateConfigEmail())}
            className={classnameForInput(errors?.email)}
        />
        <p>{errors?.Email?.message}</p>
        </label>
    )
}
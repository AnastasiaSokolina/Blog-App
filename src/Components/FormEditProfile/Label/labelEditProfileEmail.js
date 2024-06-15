import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigEmail } from './validateConfigs'

export default function LabelEditProfileEmail(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Email address</h4>
        <input
            type="email"
            placeholder="Email address"
            {...register('editProfileEmail', validateConfigEmail())}
            className={classnameForInput(errors?.editProfileEmail)}
        />
        <p>{errors?.editProfileEmail?.message}</p>
        </label>
    )
}
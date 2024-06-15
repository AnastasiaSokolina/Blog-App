import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigUsername } from './validateConfigs'

export default function LabelEditProfileUsername(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Username</h4>
        <input
            type="text"
            placeholder="Username"
            {...register('editProfileUsername', validateConfigUsername())}
            className={classnameForInput(errors?.editProfileUsername)}
        />
        <p>{errors?.editProfileUsername?.message}</p>
        </label>
    )
}
import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigPassword } from './validateConfigs'

export default function LabelEditProfilePassword(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>New password</h4>
        <input
            type="password"
            placeholder="New password"
            {...register('editProfilePassword', validateConfigPassword())}
            className={classnameForInput(errors?.editProfilePassword)}
        />
        <p>{errors?.editProfilePassword?.message}</p>
        </label>
    )
}
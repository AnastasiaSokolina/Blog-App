import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigAvatar } from './validateConfigs'

export default function LabelEditProfileAvatar(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Avatar image (url)</h4>
        <input
            type="url"
            placeholder="Avatar image"
            {...register('editProfileAvatar', validateConfigAvatar())}
            className={classnameForInput(errors?.editProfileAvatar)}
        />
        <p>{errors.editProfileAvatar?.message}</p>
        </label>
    )
}
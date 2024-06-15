import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigUsername } from './validateConfigsReg'

export default function LabelRegUsername(props) {
    const { errors, register } = props;
    return (
        <label>
        <h4>Username</h4>
        <input
            type="text"
            placeholder="Username"
            className={classnameForInput(errors?.username)}
            {...register('username', validateConfigUsername())}
        />
        <p>{errors?.username?.message}</p>
        </label>
    )
}
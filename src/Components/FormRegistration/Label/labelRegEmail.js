import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigEmail } from './validateConfigsReg'

export default function LabelRegEmail(props) {
    const { errors, register } = props
    return (
        <label>
        <h4>Email address</h4>
        <input
            type="email"
            placeholder="Email address"
            className={classnameForInput(errors?.email)}
            {...register('email', validateConfigEmail())}
        />
        <p>{errors?.email?.message}</p>
        </label>
    )
}
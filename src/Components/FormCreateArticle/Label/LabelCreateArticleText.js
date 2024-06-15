import { validateConfigText } from './validateConfigText'
import { classnameForInput } from '../../FormDecorator/classnameForInput'

export default function LabelCreateArticleText(props) {
    const { errors, register, item } = props
    return (
        <label>
            <h4>Text</h4>
            <textarea
                defaultValue={item?.body}
                placeholder="Text"
                id="textarea"
                {...register('editProfileText', validateConfigText())}
                className={classnameForInput(errors?.editProfileText, 'textField')}
            />
            <p>{errors.editProfileText?.message}</p>
        </label>
  )
}
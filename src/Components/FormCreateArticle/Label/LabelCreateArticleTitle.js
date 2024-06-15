import { classnameForInput } from '../../FormDecorator/classnameForInput'
import { validateConfigTitle } from './validateConfigText'

export default function LabelCreateArticleTitle(props) {
    const { errors, register, item } = props
    return (
      <label>
        <h4>Title</h4>
        <input
          defaultValue={item?.title || ''}
          type="text"
          placeholder="Title"
          {...register('editProfileTitle', validateConfigTitle())}
          className={classnameForInput(errors?.editProfileTitle)}
        />
        <p>{errors.editProfileTitle?.message}</p>
      </label>
    )
}
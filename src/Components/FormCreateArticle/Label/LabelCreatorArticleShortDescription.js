import { classnameForInput } from "../../FormDecorator/classnameForInput"
import { validateConfigShortDescription } from './validateConfigText'

export default function LabelCreatorArticleShortDescription(props) {
    const { errors, register, item } = props
    return (
      <label>
        <h4>Short description</h4>
        <input
          defaultValue={item?.description}
          type="text"
          placeholder="Short description"
          {...register('editProfileShortDescription', validateConfigShortDescription())}
          className={classnameForInput(errors?.editProfileShortDescription)}
        />
        <p>{errors.editProfileShortDescription?.message}</p>
      </label>
    )
}
import { Button } from 'antd'
import { validateConfigTag } from '../FormCreateArticle/Label/validateConfigText'
import { classnameForInput } from '../FormDecorator/classnameForInput'

export default function TagsFieldItem(props) {
    const { register, errors, index, append, remove, data } = props
    return (
        <li>
          <label>
            <input
              defaultValue={data}
              {...register(`tags.${index}.tag`, validateConfigTag())}
              className={classnameForInput(errors?.tags?.[index])}
            />
            <Button type="primary" className="createArticle__deleteBtn" danger ghost onClick={() => remove(index)}>
              Delete
            </Button>
            <Button type="primary" className="createArticle__addTagBtn" ghost onClick={() => append()}>
              Add tag
            </Button>
          </label>
          {errors?.tags?.[index] ? <p className="errorMessage">{errors.tags?.[index].tag.message}</p> : null}
        </li>
      )
    
}
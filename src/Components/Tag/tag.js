import './tag.scss'

export default function Tag(props) {
    const { value } = props
    return <li className="tag">{value}</li>
}
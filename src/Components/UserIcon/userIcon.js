import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import classNames from 'classnames'
import { format } from 'date-fns'
import React from 'react'
import './userIcon.scss'

function UserIcon(props) {
    const {
        className,
        item: {
            createdAt,
            author: { username, image },
        },
    } = props
    const classNamesOfUserIcon = classNames({
        userIcon: true,
        [className]: className,
    })

    return (
        <div className={ classNamesOfUserIcon }>
            <div className='userIcon__info'>
                <h3 className="userIcon__name">{username}</h3>
                {createdAt && <div className="userIcon__date">{format(new Date(createdAt), 'MMMM dd, yyyy')}</div>}
            </div>
            <Avatar size='large' icon={<UserOutlined />} src={image}/>
        </div> 
        )
}

export default UserIcon
import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import FormDecorator from '../../Components/FormDecorator/formDecorator'
import FormEditProfile from '../../Components/FormEditProfile/formEditProfile'


export default function EditProfile() {
    const editProfileLoading = useSelector((state) => state.reducers.editProfile.loading)
    const errorsMessage = useSelector((state) => state.reducers.editProfile.errorMessage)
    const successMessage = useSelector((state) => state.reducers.editProfile.successMessage)
    const token = useSelector((state) => state.reducers.logIn.token)
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(editProfileLoading)
    }, [editProfileLoading])

    return (
        <section className="editProfile">
          <FormDecorator title="Edit Profile">
            <Spin tip="Loading" size="large" spinning={loading}>
              <FormEditProfile errorsMessage={errorsMessage} successMessage={successMessage} token={token} />
            </Spin>
          </FormDecorator>
        </section>
      )
}
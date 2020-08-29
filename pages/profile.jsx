import React, { useState } from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import Banner from '../src/components/Card/Banner'
import Footer from '../src/components/Index/Footer'
import { CardStore } from '../src/hooks/useCard'
import { useLogin } from '../src/hooks/useLogin'
import { storage } from '../src/firebase'
import editCustomer from '../src/schema/mutations/editCustomer'

function Product() {
  const { me, setMe } = useLogin()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState(null)

  const handleUploadImage = async (callback) => {
    const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar)
    uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref('images')
          .child(avatar.name)
          .getDownloadURL()
          .then(async (url) => {
            await callback(url)
          })
      }
    )
  }

  const onHandleSelectImage = (event) => {
    const imageUrl = event.target.files[0]
    setAvatar(imageUrl)
  }

  const executeEditCustomer = async () => {
    const birthdayS = birthday && Number(new Date(birthday).getTime())
    try {
      if (avatar) {
        handleUploadImage(async (url) => {
          const user = await editCustomer({
            id: me.id,
            name: name || me.name,
            phone_number: phone || me.phone,
            address: address || me.address,
            avatar: url,
            birthday: birthdayS || Number(me.birthday),
            gender: gender || me.gender,
          })
          setMe(user)
          alert('Sửa thông tin cá nhân thành công!')
        })
      }
      const user = await editCustomer({
        id: me.id,
        name: name || me.name,
        phone_number: phone || me.phone,
        address: address || me.address,
        avatar: me.avatar,
        birthday: birthdayS || Number(me.birthday),
        gender: gender || me.gender,
      })
      setMe(user)
      alert('Sửa thông tin cá nhân thành công!')
    } catch (error) {
      alert('create failed')
    }
  }

  const birthDayy = me && me.birthday && `${new Date(Number(me.birthday)).getFullYear()}-${(new Date(Number(me.birthday)).getMonth() + 1) < 10 ? '0' + (new Date(Number(me.birthday)).getMonth() + 1) : (new Date(Number(me.birthday)).getMonth() + 1)}-${new Date(Number(me.birthday)).getDate() < 10 ? '0' + new Date(Number(me.birthday)).getDate() : new Date(Number(me.birthday)).getDate()}`

  return (
    <CardStore>
      <div className="wrapper">
        <MenuBar />
        <CardSideBar />
        <Banner />
        {me && (<section className="htc__product__grid bg__white ptb--30">
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="row" style={{ minWidth: 600 }}>
              <div>
                <h1 style={{ color: '#c43b68', marginBottom: 10 }}>Thông tin cá nhân</h1>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ color: '#c43b68' }}>Tên hiển thị</label>
                <input style={{ height: 40 }} type="text" placeholder="Tên hiển thị" value={name || me.name} onChange={(event) => { setName(event.target.value) }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ color: '#c43b68' }}>Avatar</label>
                <img src={(avatar && URL.createObjectURL(avatar)) || me.avatar || '/static/images/defaultAva.png'} width="120" height="120" style={{ borderRadius: '50%', marginLeft: 30 }} />
                <input
                  style={{ marginTop: 10 }}
                  id="fileItem"
                  type="file"
                  onChange={(event) => { onHandleSelectImage(event) }}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <label style={{ color: '#c43b68' }}>Số điện thoại</label>
                <input style={{ height: 40 }} type="text" placeholder="Số điện thoại" value={phone || me.phone_number} onChange={(event) => { setPhone(event.target.value) }} />
              </div>
              <div style={{ marginTop: 10 }}>
                <label style={{ color: '#c43b68' }}>Email</label>
                <input style={{ height: 40 }} disabled={true} type="text" placeholder="email" value={me.email} />
              </div>
              <div style={{ marginTop: 10 }}>
                <label style={{ color: '#c43b68' }}>Địa chỉ</label>
                <input style={{ height: 40 }} type="text" placeholder="địa chỉ" value={address || me.address} onChange={(event) => { setAddress(event.target.value) }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ color: '#c43b68' }}>Ngày sinh</label>
                <input style={{ height: 40 }} type="date" style={{ marginLeft: 10 }} value={birthday || birthDayy} onChange={(event) => { setBirthday(event.target.value) }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ color: '#c43b68' }}>Nam</label>
                <input type="checkbox" style={{ marginLeft: 10 }} checked={(gender === 1) || me.gender === 1} />
                <label style={{ marginLeft: 10, color: '#c43b68' }} >Nữ</label>
                <input type="checkbox" style={{ marginLeft: 10 }} checked={gender === 0 || me.gender === 0} />
              </div>
              <ul className="cr__btn" style={{ marginTop: 20 }}>
                <li><a onClick={(event) => {
                  event.preventDefault()
                  executeEditCustomer(event)
                }} style={{ width: '100%', textAlign: 'center' }}>Cập nhật</a></li>
              </ul>
            </div>
          </div>
        </section>)}
        <Footer />
      </div>
    </CardStore>
  )
}

Product.getInitialProps = ({ query }) => {
  return { query }
}

export default Product
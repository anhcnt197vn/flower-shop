import React from 'react'
import Search from './Search'
import Card from './Card'
import UserSideBar from './UserSideBar'
import { useCard } from '../../hooks/useCard'
import { useLogin } from '../../hooks/useLogin'

export default function CardSideBar() {
  const { isOpenCard, setOpenCard } = useCard()
  const { isOpenUserCard, setIsOpenUserCard } = useLogin()
  const classNameOverLay = (isOpenCard || isOpenUserCard) ? ' is-visible' : ''

 return (
   <>
      <div className={"body__overlay" + classNameOverLay} onClick={() => { 
        if (isOpenCard) {
          setOpenCard() 
        }
        if (isOpenUserCard) {
          setIsOpenUserCard(!isOpenUserCard)
        }
      }}></div>
      <div className="offset__wrapper">
        <Search />
        <Card />
        <UserSideBar />
      </div>
   </>
 )
}
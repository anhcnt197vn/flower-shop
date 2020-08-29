import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import createOrder from '../schema/mutations/createOrder'

const initialState = []

const defaultValue = {
  isOpenCard: false,
  card: initialState,
  setCard: null,
}

const CardContext = React.createContext(defaultValue)

export const CardStore = ({
  children,
}) => {
  const [
    state,
    setState,
  ] = useState([])
  const [
    isOpenCard,
    setIsOpenCard,
  ] = useState(false)

  useEffect(() => {
    const cardItem = localStorage.getItem('@card')
    if (cardItem) {
      const cardToStored = JSON.parse(cardItem)
      setState(cardToStored)
    }
  }, [])

  return (
    <CardContext.Provider
      value={{
        isOpenCard,
        setIsOpenCard,
        card: state,
        setCard: setState,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export function useCard() {
  const {
    isOpenCard,
    setIsOpenCard,
    card,
    setCard,
  } = useContext(CardContext)

  const addToCard = (item) => {
    let cardToStored = card.map((itemCard) => itemCard)
    if (card.length === 0) {
      cardToStored.push(Object.assign({}, item, { count: 1 }) )
    } else {
      if (card.find((cardItem) => cardItem.id === item.id)) {
        cardToStored = card.map((cardItem) => {
          if (item.id === cardItem.id) {
            return Object.assign({}, item, { count: cardItem.count + 1})
          }
          return cardItem
        })
      } else {
        cardToStored.push(Object.assign({}, item, { count: 1 }))
      }
    }

    setCard(cardToStored)
    localStorage.setItem('@card', JSON.stringify(cardToStored))
  }

  const reduceCard = (item) => {
    let cardToStored = card.map((itemCard) => itemCard)
    if (card.length === 0) {
      return
    } else {
      const currentCard = card.find((cardItem) => cardItem.id === item.id)
      if (currentCard.count > 1) {
        cardToStored = card.map((cardItem) => {
          if (item.id === cardItem.id) {
            return Object.assign({}, item, { count: cardItem.count - 1})
          }
          return cardItem
        })
      } else {
        cardToStored = card.filter((cardItem) => cardItem.id !== item.id)
      }

      setCard(cardToStored)
      localStorage.setItem('@card', JSON.stringify(cardToStored))
    }
  }

  const removeCard = (item) => {
    let cardToStored = []
    if (card) {
      card.forEach((cardItem) => {
        if (cardItem.id !== item.id) {
          cardToStored.push(cardItem)
        }
      })
    }
    setCard(cardToStored)
    localStorage.setItem('@card', JSON.stringify(cardToStored))
  }

  const clearCard = () => {
    setCard([])
    localStorage.removeItem('@card')
  }

  const checkout = async (billInfor) => {
    const products = card && card.map((item) => {
      return {
        product_id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.count,
      }
    })
    try {
      await createOrder({
        name: billInfor.name,
        note: billInfor.note,
        address: billInfor.address,
        total_price: billInfor.total_price,
        id_customer: billInfor.id_customer,
        email: billInfor.email,
        phone_number: billInfor.phone_number,
        products,
      })
      clearCard()
    } catch (error) {
      alert(error)
      return false
    }

    return true
  }

  const setOpenCard = () => {
    setIsOpenCard(!isOpenCard)
  }

  return {
    card,
    isOpenCard,
    addToCard,
    reduceCard,
    removeCard,
    setOpenCard,
    checkout,
  }
}
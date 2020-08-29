import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'
import { useLogin } from './useLogin'
import getOrderByCustomer from '../schema/queries/getOrderByCustomer'

const defaultValue = {
  order: [],
  setOrder: null,
  to: null,
  from: null,
  setTo: null,
  setFrom: null,
  totalOrder: [],
}

const OrderContext = React.createContext(defaultValue)

export const OrderStore = ({
  children,
}) => {
  console.log('new date', new Date())
  const [
    state,
    setState,
  ] = useState([])
  const [
    from,
    setFrom,
  ] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)))
  const [
    to,
    setTo,
  ] = useState(new Date())
  const totalOrder = useRef([])

  const { me } = useLogin()

  useEffect(() => {
    const getInitialData = async () => {
      const orders = await getOrderByCustomer(me.id)
      totalOrder.current = orders
      setState(orders)
    }

    if (me && me.id) {
      getInitialData()
    }
  }, [me])

  return (
    <OrderContext.Provider
      value={{
        order: state,
        setOrder: setState,
        setTo,
        setFrom,
        from,
        to,
        totalOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const {
    order,
    setOrder,
    setTo,
    setFrom,
    from,
    to,
    totalOrder,
  } = useContext(OrderContext)

  const onSearchOrder = () => {
    const newOrder = totalOrder.current.filter((item) => {
      if (Number(item.created_at) > from.getTime() && Number(item.created_at) < to.getTime()) {
        return true
      }
      return false
    })

    setOrder(newOrder)
  }

  return {
    order,
    setOrder,
    setTo,
    setFrom,
    from,
    to,
    onSearchOrder,
  }
}
import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function createOrder({
  address,
  name,
  id_customer,
  total_price,
  note,
  email,
  phone_number,
  products,
}) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $address: String, 
        $name: String, 
        $id_customer: Int, 
        $total_price: Float, 
        $note: String, 
        $email: String, 
        $phone_number: String,
        $products: [OrderProductInput],
      ) {
        createOrder(
          input: {
            address: $address
            name: $name
            id_customer: $id_customer
            total_price: $total_price
            note: $note
            email: $email
            phone_number: $phone_number
            products: $products
          }
        ) {
          name
          status
          id_customer
          phone_number
          total_price
          note
          email
          address
        }
      }
    `,
    variables: {
      name,
      address,
      id_customer,
      total_price,
      phone_number,
      note,
      email,
      products,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.createOrder
}
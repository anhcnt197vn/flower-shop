import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getOrderByCustomer(id_customer) {
  const result = await getClient().query({
    query: gql`
      query Query($id_customer: String) {
        getOrderByCustomer(id_customer: $id_customer) {
          id
          name
          note
          status
          total_price
          phone_number
          email
          address
          created_at
          updated_at
        }
      }
    `,
    variables: {
      id_customer: id_customer.toString(),
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getOrderByCustomer
}
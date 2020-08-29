import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getProductByOrderId(order_id) {
  const result = await getClient().query({
    query: gql`
      query Query($order_id: String!) {
        getProductByOrderId(order_id: $order_id) {
          name
          quantity
          image
          price
        }
      }
    `,
    variables: {
      order_id: order_id.toString(),
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getProductByOrderId
}
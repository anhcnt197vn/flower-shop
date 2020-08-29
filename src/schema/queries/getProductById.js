import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getProductById(id) {
  const result = await getClient().query({
    query: gql`
      query Query($id: Int!) {
        getProductById(id: $id) {
          id
          name
          quantity
          price
          category_id
          image
          description
          manufacture
          category {
            name
            status
          }
          short_description
          best_seller
          detail
          previous_price
          take_care
        }
      }
    `,
    variables: {
      id,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getProductById
}
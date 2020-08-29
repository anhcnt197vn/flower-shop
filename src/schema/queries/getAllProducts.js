import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getAllProducts() {
  const result = await getClient().query({
    query: gql`
      query Query {
        getAllProducts {
          id
          name
          quantity
          price
          category_id
          image
          description
          manufacture
          best_seller
          previous_price
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
    variables: {},
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getAllProducts
}
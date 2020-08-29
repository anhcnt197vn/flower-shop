import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getLikeProduct() {
  const result = await getClient().query({
    query: gql`
      query Query {
        getLikeProduct {
          product_id
        }
      }
    `,
    variables: {},
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getLikeProduct
}
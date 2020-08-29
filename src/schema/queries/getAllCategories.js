import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getAllCategories() {
  const result = await getClient().query({
    query: gql`
      query Query {
        getAllCategories {
          id
          name
          status
        }
      }
    `,
    variables: {},
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getAllCategories
}
import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getAllUsers() {
  const result = await getClient().query({
    query: gql`
      query Query {
        getAllUsers {
          id
          username
          firstName
          lastName
          address
        }
      }
    `,
    variables: {},
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getAllUsers
}
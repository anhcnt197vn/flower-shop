import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getCustomerByFilter({ email, password }) {
  const result = await getClient().query({
    query: gql`
      query Query(
        $email: String!
        $password: String!
      ) {
        getCustomerByFilter(
          email: $email
          password: $password
        ) {
          id
          email
          password
          name
          is_activate
          avatar
          address
          gender
          birthday
          phone_number
        }
      }
    `,
    variables: {
      email,
      password,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getCustomerByFilter
}
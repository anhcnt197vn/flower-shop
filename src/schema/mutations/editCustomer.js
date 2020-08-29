import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function editCustomer(item) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $id: Int, 
        $name: String, 
        $birthday: Float, 
        $address: String, 
        $gender: Int, 
        $phone_number: String, 
        $avatar: String,
      ) {
        editCustomer(
          id: $id, 
          name: $name, 
          birthday: $birthday, 
          address: $address, 
          gender: $gender, 
          phone_number: $phone_number, 
          avatar: $avatar,
        ) {
          id
          birthday
          address
          gender
          phone_number
          name
          is_activate
          email
          avatar
        }
      }
    `,
    variables: {
      id: item.id,
      name: item.name,
      birthday: item.birthday,
      address: item.address,
      gender: item.gender,
      phone_number: item.phone_number,
      avatar: item.avatar,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.editCustomer
}
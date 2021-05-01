import { gql } from '@apollo/client';

export default gql`
  mutation updateUser(
    $uid: String!
    $name: String
    $gender: String
    $birthDate: Date
    $region: String
    $language: String
    $isSentNewsletter: Boolean
  ) {
    updateUser(
      data: {
        uid: $uid
        name: $name
        gender: $gender
        birthDate: $birthDate
        region: $region
        language: $language
        isSentNewsletter: $isSentNewsletter
      }
    ) {
      uid
      name
      email
    }
  }
`;

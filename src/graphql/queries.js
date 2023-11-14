/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStrain = /* GraphQL */ `
  query GetStrain($id: ID!) {
    getStrain(id: $id) {
      id
      title
      photo
      cross
      description
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStrains = /* GraphQL */ `
  query ListStrains(
    $filter: ModelStrainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStrains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        photo
        cross
        description
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStrain = /* GraphQL */ `
  mutation CreateStrain(
    $input: CreateStrainInput!
    $condition: ModelStrainConditionInput
  ) {
    createStrain(input: $input, condition: $condition) {
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
export const updateStrain = /* GraphQL */ `
  mutation UpdateStrain(
    $input: UpdateStrainInput!
    $condition: ModelStrainConditionInput
  ) {
    updateStrain(input: $input, condition: $condition) {
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
export const deleteStrain = /* GraphQL */ `
  mutation DeleteStrain(
    $input: DeleteStrainInput!
    $condition: ModelStrainConditionInput
  ) {
    deleteStrain(input: $input, condition: $condition) {
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

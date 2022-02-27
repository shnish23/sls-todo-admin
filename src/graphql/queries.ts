/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: String!) {
    getTodo(id: $id) {
      id
      text
      checked
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos {
    listTodos {
      id
      text
      checked
      createdAt
      updatedAt
    }
  }
`;

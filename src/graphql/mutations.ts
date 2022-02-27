/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
      text
      checked
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      text
      checked
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
    updateTodo(updateTodoInput: $updateTodoInput) {
      id
      text
      checked
      createdAt
      updatedAt
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Result = {
  __typename: "Result",
  count: number,
};

export type CreateTodoInput = {
  id: string,
  text: string,
  checked: string,
  createdAt: string,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  text: string,
  checked: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  text?: string | null,
  checked?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodoMutationVariables = {
  id: string,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Result",
    count: number,
  } | null,
};

export type CreateTodoMutationVariables = {
  createTodoInput: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    text: string,
    checked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  updateTodoInput: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    text: string,
    checked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    text: string,
    checked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQuery = {
  listTodos?:  Array< {
    __typename: "Todo",
    id: string,
    text: string,
    checked: string,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    text: string,
    checked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

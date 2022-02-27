/* Amplify Params - DO NOT EDIT
	API_SLSTODOADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_SLSTODOADMIN_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

require("isomorphic-fetch");
const AWS = require("aws-sdk");
const gql = require("graphql-tag");
const AWSAppSyncClient = require("aws-appsync").default;
const { AUTH_TYPE } = require("aws-appsync");

const appSyncUrl = process.env.API_SLSTODOADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;

const client = new AWSAppSyncClient({
  url: appSyncUrl,
  region: region,
  auth: {
    type: AUTH_TYPE.AWS_IAM,
    credentials: () => AWS.config.credentials,
  },
  disableOffline: true,
});

exports.handler = async (event) => {
  const recordPromises = event.Records.map(async (record) => {
    console.log("Stream record: ", JSON.stringify(record, null, 2));
    // 登録
    if (record.eventName === "INSERT") {
      let newImage = record.dynamodb.NewImage;
      let createTodoInput = {
        id: newImage.id.S,
        text: newImage.text.S,
        checked: Number(newImage.checked.BOOL),
        createdAt: newImage.createdAt.N,
        updatedAt: newImage.updatedAt.N,
      };
      let response = await client.mutate({
        mutation: gql`
          mutation CreateTodo($createTodoInput: CreateTodoInput!) {
            createTodo(createTodoInput: $createTodoInput) {
              id
              text
              checked
              createdAt
              updatedAt
            }
          }
        `,
        variables: {
          createTodoInput: createTodoInput,
        },
      });
      if (!response.data.createTodo) {
        throw new Error("createTodo");
      } else {
        console.log(response);
      }
    } else if (record.eventName === "MODIFY") {
      // 更新
      let newImage = record.dynamodb.NewImage;
      let updateTodoInput = {
        id: newImage.id.S,
        text: newImage.text.S,
        checked: Number(newImage.checked.BOOL),
        createdAt: newImage.createdAt.N,
        updatedAt: newImage.updatedAt.N,
      };
      let response = await client.mutate({
        mutation: gql`
          mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
            updateTodo(updateTodoInput: $updateTodoInput) {
              id
              text
              checked
              createdAt
              updatedAt
            }
          }
        `,
        variables: {
          updateTodoInput: updateTodoInput,
        },
      });
      if (!response.data.updateTodo) {
        throw new Error("updateTodo");
      } else {
        console.log(response);
      }
    } else if (record.eventName === "REMOVE") {
      // 削除
      let response = await client.mutate({
        mutation: gql`
          mutation DeleteTodo($id: String!) {
            deleteTodo(id: $id) {
              count
            }
          }
        `,
        variables: {
          id: record.dynamodb.Keys.id.S,
        },
      });
      if (!response.data.deleteTodo) {
        throw new Error("deleteTodo");
      } else {
        console.log(response);
      }
    }
    return record;
  });
  return Promise.allSettled(recordPromises);
};

## Amplify CLI 設定

```console
amplify configure
amplify init
```

## custom AWS resources 設定

```console
amplify add custom
```

実行ログ

```console
✔ How do you want to define this custom resource? · AWS CDK
✔ Provide a name for your custom resource · auroraServerless
✅ Created skeleton CDK stack in amplify/backend/custom/auroraServerless directory
✔ Do you want to edit the CDK stack now? (Y/n) · yes
? Choose your default editor: Visual Studio Code
Edit the file in your editor: /workspaces/sls-todo-admin/amplify/backend/custom/auroraServerless/cdk-stack.ts
? Press enter to continue
```

## Authentication 設定

```console
amplify add auth
```

実行ログ

```console
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource slstodoadmin242f0f4d locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

## API (GraphQL) 設定

```console
amplify add api
```

実行ログ

```console
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Authorization modes: API key (default, expiration time: 7 days
 from now)
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API IAM
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: Blank Schema
GraphQL schema compiled successfully.

Edit your schema at /workspaces/sls-todo-admin/amplify/backend/api/slstodoadmin/schema.graphql or place .graphql files in a directory at /workspaces/sls-todo-admin/amplify/backend/api/slstodoadmin/schema
✔ Do you want to edit the schema now? (Y/n) · no
✅ Successfully added resource slstodoadmin locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

```console
amplify api add-graphql-datasource
```

実行ログ

````console
Using datasource: Aurora Serverless, provided by: awscloudformation
? Provide the region in which your cluster is located: ap-northeast-1
✔ Only one Cluster was found: 'analysis' was automatically selected.
✔ Only one Secret was found for the cluster: 'arn:aws:secretsmanager:ap-northeast-1:XXXXXXXXXXXX:secret:rds-db-credentials/cluster-WZOWVLGIUUTDGHYA5AZ7QGO73E/admin-cf5GQC' was automatically selected.
✔ Fetched Aurora Serverless cluster.
✔ Only one Database was found: 'analysis' was automatically selected.
✅ Successfully added the Aurora Serverless datasource locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

GraphQL schema compiled successfully.

Edit your schema at /workspaces/sls-todo-admin/amplify/backend/api/slstodoadmin/schema.graphql or place .graphql files in a directory at /workspaces/sls-todo-admin/amplify/backend/api/slstodoadmin/schema```
````

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

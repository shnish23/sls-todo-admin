import * as AmplifyHelpers from "@aws-amplify/cli-extensibility-helper";
//import * as iam from '@aws-cdk/aws-iam';
//import * as sns from '@aws-cdk/aws-sns';
//import * as subs from '@aws-cdk/aws-sns-subscriptions';
//import * as sqs from '@aws-cdk/aws-sqs';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as rds from "@aws-cdk/aws-rds";
import * as cdk from "@aws-cdk/core";

import { AmplifyDependentResourcesAttributes } from "../../types/amplify-dependent-resources-ref";

export class cdkStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });
    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */

    // VPC
    const vpc = new ec2.Vpc(this, "Vpc", {
      cidr: "10.0.0.0/16",
      natGateways: 0,
      subnetConfiguration: [
        { name: "aurora-vpc", subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      ],
    });

    // SUBNET GROUP
    const dbSubnetGroup = new rds.SubnetGroup(this, "AuroraSubnetGroup", {
      description: "Subnet group to Aurora",
      vpc: vpc,
      subnetGroupName: "aurora-subnet-group",
      vpcSubnets: {
        subnets: vpc.isolatedSubnets,
      },
    });

    // // RDS PARAMETER GROUP
    // const dbParamGroup = new rds.ParameterGroup(this, "ParameterGroup", {
    //   engine: rds.DatabaseInstanceEngine.mysql({
    //     version: rds.MysqlEngineVersion.VER_5_7,
    //   }),
    //   parameters: {
    //     innodb_large_prefix: "1",
    //     innodb_file_per_table: "1",
    //     innodb_file_format: "Barracuda",
    //     character_set_client: "utf8mb4",
    //     character_set_connection: "utf8mb4",
    //     character_set_database: "utf8mb4",
    //     character_set_results: "utf8mb4",
    //     character_set_server: "utf8mb4",
    //     collation_server: "utf8mb4_unicode_ci",
    //     collation_connection: "utf8mb4_unicode_ci",
    //   },
    // });

    // AURORA SERVERLESS CLUSTERS
    const aurora = new rds.ServerlessCluster(this, "AuroraServerless", {
      defaultDatabaseName: "analysis",
      clusterIdentifier: "analysis",
      engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
      vpc,
      enableDataApi: true,
      subnetGroup: dbSubnetGroup,
      scaling: {
        minCapacity: rds.AuroraCapacityUnit.ACU_1,
        maxCapacity: rds.AuroraCapacityUnit.ACU_4,
      },
    });

    // Example 1: Set up an SQS queue with an SNS topic

    /*
    const amplifyProjectInfo = AmplifyHelpers.getProjectInfo();
    const sqsQueueResourceNamePrefix = `sqs-queue-${amplifyProjectInfo.projectName}`;
    const queue = new sqs.Queue(this, 'sqs-queue', {
      queueName: `${sqsQueueResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // 👇create sns topic
    
    const snsTopicResourceNamePrefix = `sns-topic-${amplifyProjectInfo.projectName}`;
    const topic = new sns.Topic(this, 'sns-topic', {
      topicName: `${snsTopicResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // 👇 subscribe queue to topic
    topic.addSubscription(new subs.SqsSubscription(queue));
    new cdk.CfnOutput(this, 'snsTopicArn', {
      value: topic.topicArn,
      description: 'The arn of the SNS topic',
    });
    */

    // Example 2: Adding IAM role to the custom stack
    /*
    const roleResourceNamePrefix = `CustomRole-${amplifyProjectInfo.projectName}`;
    
    const role = new iam.Role(this, 'CustomRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      roleName: `${roleResourceNamePrefix}-${cdk.Fn.ref('env')}`
    }); 
    */

    // Example 3: Adding policy to the IAM role
    /*
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ['*'],
        resources: [topic.topicArn],
      }),
    );
    */

    // Access other Amplify Resources
    /*
    const retVal:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [
        {category: <insert-amplify-category>, resourceName: <insert-amplify-resourcename>},
      ]
    );
    */
  }
}
